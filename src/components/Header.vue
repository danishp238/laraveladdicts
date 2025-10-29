<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { RouterLink } from 'vue-router';

const scrolled = ref(false);
const mobileMenuOpen = ref(false);
const navItems = [
  { name: 'About Us', href: '/about-us' },
  { name: 'Contact us', href: '/contact-us' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Recommended Resources', href: '/resources' },
];

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const animateHeader = (el) => {
  gsap.from(el, {
    y: -50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
  });
};

const animateLogo = (logoSquare, logoText) => {
  gsap.to(logoSquare, {
    rotation: 360,
    duration: 1,
    ease: 'elastic.out(1, 0.5)',
  });

  gsap.to(logoText, {
    y: -5,
    duration: 0.3,
    yoyo: true,
    repeat: 1,
  });
};

const animateNavItem = (underline) => {
  gsap.fromTo(
    underline,
    { width: 0 },
    { width: '100%', duration: 0.3, ease: 'power2.out' }
  );
};

const animateButton = (ctaButton) => {
  gsap.to(ctaButton, {
    scale: 1.05,
    duration: 0.2,
    yoyo: true,
    repeat: 1,
  });
};

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
  });

  onMounted(() => {
    gsap.to(".start-button", {
      scale: 1.05,
      duration: 0.2,
      repeat: -1,
      yoyo: true,
    });
  });


  window.addEventListener('scroll', handleScroll);

  // Ensure animations run after mount
  animateHeader(document.querySelector('.header'));
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>


<template>
  <header class="fixed w-full z-50 transition-all duration-300"
    :class="{ 'bg-white/90 shadow-md backdrop-blur-sm py-2': scrolled, 'bg-transparent py-4': !scrolled }"
    data-aos="fade-down">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <!-- Logo with animation -->
        <div class="flex items-center space-x-2" @mouseenter="animateLogo">
          <div class="logo-container relative w-10 h-10">
            <div class="absolute inset-0 bg-indigo-600 rounded-lg transform rotate-0 transition-all duration-500"
              ref="logoSquare"></div>
            <span class="absolute inset-0 flex items-center justify-center text-white font-bold text-xl z-10"
              ref="logoText">L</span>
          </div>
          <router-link :to="'/'">
            <span
              class="text-xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Laravel<span class="text-red-300">Addicts</span>
            </span>
          </router-link>
        </div>

        <!-- Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <li v-for="(item, index) in navItems" :key="item.name"
            class="text-gray-700 hover:text-indigo-600 font-medium relative group transition-colors"
            @mouseenter="animateNavItem(index)"> <router-link :to="item.href">
              {{ item.name }}
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"
                ref="navUnderlines"></span>
            </router-link>
          </li>
        </nav>

        <!-- CTA and mobile menu button -->
        <div class="flex items-center space-x-4">
          <router-link :to="'/'">
            <button
              class="hidden md:block px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              @mouseenter="animateButton" ref="ctaButton">
              Start Reading
            </button>
          </router-link>
          <button class="md:hidden text-gray-700 focus:outline-none" @click="toggleMobileMenu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      class="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 ease-in-out"
      :class="{ 'max-h-0': !mobileMenuOpen, 'max-h-96 py-4': mobileMenuOpen }">
      <div class="container mx-auto px-4">
        <div class="flex flex-col space-y-4">
          <!-- Mobile Menu -->
          <ul v-if="mobileMenuOpen" class="md:hidden flex flex-col space-y-4 p-4">
            <li v-for="(item, index) in navItems" :key="item.name"
              class="text-gray-700 hover:text-indigo-600 font-medium">
              <router-link :to="item.href" @click="mobileMenuOpen = false">
                {{ item.name }}
              </router-link>
            </li>
          </ul>

          <router-link :to="'/'">
            <button
              class="start-button px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg mt-2">
              Start Reading
            </button>
          </router-link>

        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Custom styles can be added here if needed */
.logo-container:hover .logo-square {
  transform: rotate(45deg);
}

li {
  list-style: none;
}
</style>