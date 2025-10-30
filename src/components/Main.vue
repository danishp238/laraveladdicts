<template>
    <Header></Header>

    <div class="relative overflow-hidden">
        <!-- Main Banner -->
        <!-- cookies -->
        <CookieConsent></CookieConsent>

        <section
            class="relative h-screen min-h-[600px] flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 overflow-hidden">
            <!-- Physics canvas -->
            <canvas ref="physicsCanvas" class="absolute inset-0 w-full h-full pointer-events-none opacity-0"></canvas>

            <!-- Content -->
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div class="text-center" data-aos="fade-up">
                    <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
                        <span class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Master Laravel
                        </span>
                        <br>
                        <span class="text-gray-800">Like a Pro</span>
                    </h1>

                    <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8" data-aos="fade-up"
                        data-aos-delay="100">
                        Discover the best walkthroughs with project demos, code explanation and full source code at the end for building amazing web applications with
                        Laravel.
                    </p>

                    <div class="flex flex-col sm:flex-row justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
                        <button
                            class="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium">
                           Scroll To Explore Walkthroughs
                        </button>
                        <router-link :to="'/resources'">
                        <button
                            class="px-6 py-3 bg-white text-gray-800 border border-gray-200 rounded-lg shadow hover:shadow-md transition-all duration-300 font-medium hover:bg-gray-50">
                            Recommended Resources
                        </button>
                        </router-link>
                    </div>
                </div>

            </div>
        </section>

        <!-- Blog Links Section -->
        <section class="py-16 bg-white">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold text-center mb-12" data-aos="fade-up">
                    Latest <span class="text-indigo-600">Laravel</span> Guides</h2>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="(blog, index) in blog_descriptions" :key="blog.id"
                        class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                        data-aos="fade-up" :data-aos-delay="100 * index">
                        <div
                            class="h-48 bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center">

                            <img :src="blog.image" class="w-full h-56 object-cover transition duration-300 group-hover:blur-sm" alt="blog image">
                            <!-- <svg class="w-16 h-16 text-indigo-400" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                                </path>
                            </svg> -->
                        </div>
                        <div class="p-6">
                            <div class="flex items-center text-sm text-gray-500 mb-2">
                                <span>{{ blog.category }}</span>
                                <span class="mx-2">•</span>
                                <span>{{ blog.date }}</span>
                            </div>
                            <h3 class="text-xl font-semibold mb-3 text-gray-800 hover:text-blue-500">
                                <router-link :to="`/blog/${blog.slug}`">
                                    {{ blog.title }}
                                </router-link>
                                            
                            </h3>
                            <p class="text-gray-600 mb-4">{{ blog.excerpt }}</p>
                            <a :href="blog.link"
                                class="text-indigo-600 font-medium hover:text-indigo-800 inline-flex items-center">
                                <router-link :to="`/blog/${blog.slug}`">Read More</router-link>
                                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-12" data-aos="fade-up">
                    <button
                        class="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium">
                        View All Guides
                    </button>
                </div>
            </div>
        </section>
    </div>

    <Footer></Footer>

</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap';
import Matter from 'matter-js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import blogDescriptions from '/src/assets/blog-descriptions.js'
import { useRouter } from 'vue-router'
import Header from './Header.vue'
import Footer from './Footer.vue'
import CookieConsent from './CookieConsent.vue';

const blog_descriptions = ref(blogDescriptions)

const router = useRouter()

// Physics elements
const physicsCanvas = ref(null);
const engine = ref(null);
const render = ref(null);
const world = ref(null);
const circles = ref([]);

// Icons for physics simulation
const icons = ref([
    { name: 'laravel', path: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
    { name: 'heart', path: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
    { name: 'laptop', path: 'M3 6l2-2h14l2 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6zM2 6h20v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6z' },
    { name: 'code', path: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
    { name: 'emoji', path: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'database', path: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4' }
]);

// Initialize AOS and animations
onMounted(() => {
    AOS.init({
        duration: 800,
        once: true
    });

    initPhysics();
    createFloatingIcons();
});

// Clean up Matter.js
onBeforeUnmount(() => {
    if (render.value) {
        Matter.Render.stop(render.value);
    }
    if (engine.value) {
        Matter.Engine.clear(engine.value);
    }
    window.removeEventListener('resize', handleResize);
});

// Initialize physics engine
const initPhysics = () => {
    if (window.innerWidth < 768) return;

    const { Engine, Render, World, Bodies, Composite } = Matter;

    engine.value = Engine.create({
        enableSleeping: true
    });
    world.value = engine.value.world;

    render.value = Render.create({
        canvas: physicsCanvas.value,
        engine: engine.value,
        options: {
            width: window.innerWidth,
            height: window.innerHeight,
            background: 'transparent',
            wireframes: false
        }
    });

    gsap.to(physicsCanvas.value, {
        opacity: 0.3,
        duration: 1
    });

    createBoundaries();
    createIconBodies();

    Engine.run(engine.value);
    Render.run(render.value);
    window.addEventListener('resize', handleResize);
};

// Create physics boundaries
const createBoundaries = () => {
    const { Bodies, World } = Matter;
    const boundaryOptions = {
        isStatic: true,
        render: { visible: false }
    };

    const ground = Bodies.rectangle(
        window.innerWidth / 2,
        window.innerHeight + 50,
        window.innerWidth,
        100,
        boundaryOptions
    );

    const leftWall = Bodies.rectangle(
        -50,
        window.innerHeight / 2,
        100,
        window.innerHeight,
        boundaryOptions
    );

    const rightWall = Bodies.rectangle(
        window.innerWidth + 50,
        window.innerHeight / 2,
        100,
        window.innerHeight,
        boundaryOptions
    );

    World.add(world.value, [ground, leftWall, rightWall]);
};

// Create icon bodies for physics simulation
const createIconBodies = () => {
    const { Bodies, World, Body } = Matter;
    const colors = ['#818cf8', '#a78bfa', '#7c3aed', '#8b5cf6', '#6366f1', '#8b5cf6'];

    // Clear existing bodies
    circles.value.forEach(circle => World.remove(world.value, circle));
    circles.value = [];

    // Create icon bodies
    for (let i = 0; i < 25; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * -window.innerHeight;
        const size = 15 + Math.random() * 25;
        const icon = icons.value[Math.floor(Math.random() * icons.value.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];

        const body = Bodies.rectangle(x, y, size, size, {
            restitution: 0.7,
            friction: 0.1,
            render: {
                fillStyle: color,
                strokeStyle: color,
                sprite: {
                    texture: generateIconSVG(icon.path, color),
                    xScale: size / 24,
                    yScale: size / 24
                }
            },
            chamfer: { radius: 5 }
        });

        // Apply random rotation
        Body.setAngle(body, Math.random() * Math.PI * 2);

        // Apply slight force for movement
        Body.applyForce(body, body.position, {
            x: (Math.random() - 0.5) * 0.005,
            y: (Math.random() - 0.5) * 0.005
        });

        World.add(world.value, body);
        circles.value.push(body);
    }
};

// Generate SVG data URI for icons
const generateIconSVG = (path, color) => {
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}">
      <path d="${path}" />
    </svg>
  `;
    return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svg)));
};

// Create floating icons (non-physics)
const createFloatingIcons = () => {
    for (let i = 0; i < 12; i++) {
        const icon = document.createElement('div');
        icon.innerHTML = `
      <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="${icons.value[Math.floor(Math.random() * icons.value.length)].path}" />
      </svg>
    `;

        icon.className = 'absolute pointer-events-none opacity-30 hidden md:block';
        icon.style.color = `hsl(${Math.random() * 60 + 240}, 80%, 70%)`;
        icon.style.width = `${10 + Math.random() * 30}px`;
        icon.style.height = icon.style.width;
        icon.style.left = `${Math.random() * 100}%`;
        icon.style.top = `${Math.random() * 80}%`;

        document.querySelector('section').appendChild(icon);

        // Animate with GSAP
        gsap.to(icon, {
            y: `+=${20 + Math.random() * 40}`,
            x: `+=${10 + Math.random() * 20}`,
            rotation: Math.random() * 360,
            duration: 8 + Math.random() * 12,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }
};

// Handle window resize
const handleResize = () => {
    if (!render.value) return;

    render.value.options.width = window.innerWidth;
    render.value.options.height = window.innerHeight;
    render.value.canvas.width = window.innerWidth;
    render.value.canvas.height = window.innerHeight;

    const { Bodies, World, Composite } = Matter;
    const bodies = Composite.allBodies(world.value);
    const boundaries = bodies.filter(body => body.isStatic);
    World.remove(world.value, boundaries);

    createBoundaries();
    createIconBodies();
};

// Explode title into physics bodies
const explodeTitle = () => {
    const { Body, Composite, Bodies } = Matter;
    const title = "Master Laravel Like a Pro";

    title.split('').forEach((letter, i) => {
        if (letter === ' ') return;

        const x = window.innerWidth / 2 - (title.length * 10) + (i * 22);
        const y = window.innerHeight / 3;
        const color = i < 6 ? '#4f46e5' : '#7c3aed';

        const textBody = Bodies.rectangle(x, y, 18, 25, {
            render: {
                fillStyle: color,
                text: {
                    content: letter,
                    size: 20,
                    color: '#ffffff'
                }
            },
            chamfer: { radius: 3 },
            restitution: 0.8
        });

        Body.applyForce(textBody, textBody.position, {
            x: (Math.random() - 0.5) * 0.03,
            y: -0.03
        });

        Composite.add(world.value, textBody);
        circles.value.push(textBody);
    });

    setTimeout(() => {
        createIconBodies();
    }, 5000);
};
</script>