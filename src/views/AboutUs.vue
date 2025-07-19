<template>

    <Header></Header>

  <div class="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 pt-20">
    <!-- Header (you mentioned you already have this) -->
    
    <main class="container mx-auto px-4 py-12">
      <section class="max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold text-indigo-900 mb-8 text-center" data-aos="fade-down">
          My Coding Journey
        </h1>
        
        <div class="space-y-12">
          <!-- Story Section 1 -->
          <div class="flex flex-col md:flex-row gap-8 items-center" data-aos="fade-right">
            <div class="md:w-1/2">
              <div class="bg-white p-6 rounded-xl shadow-lg h-full">
                <h2 class="text-2xl font-semibold text-purple-800 mb-4">The Spark of Passion</h2>
                <p class="text-gray-700">
                  It all began when I first encountered the world of coding. There was something magical about creating things from nothing but lines of text. The ability to build, solve problems, and bring ideas to life completely captivated me.
                </p>
              </div>
            </div>
            <div class="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                   alt="Coding passion" 
                   class="rounded-xl shadow-lg w-full h-64 object-cover">
            </div>
          </div>
          
          <!-- Story Section 2 -->
          <div class="flex flex-col md:flex-row-reverse gap-8 items-center" data-aos="fade-left">
            <div class="md:w-1/2">
              <div class="bg-white p-6 rounded-xl shadow-lg h-full">
                <h2 class="text-2xl font-semibold text-purple-800 mb-4">Family's Encouragement</h2>
                <p class="text-gray-700">
                  When my family noticed my growing interest, they encouraged me to pursue programming seriously. "You have a knack for solving puzzles," they said. Their support gave me the confidence to dive deeper into the world of web development.
                </p>
              </div>
            </div>
            <div class="md:w-1/2">
              <img src="/images/about-us.jpg" 
                   alt="Family support" 
                   class="rounded-xl shadow-lg w-full h-64 object-cover">
            </div>
          </div>
          
          <!-- Story Section 3 -->
          <div class="flex flex-col md:flex-row gap-8 items-center" data-aos="fade-right">
            <div class="md:w-1/2">
              <div class="bg-white p-6 rounded-xl shadow-lg h-full">
                <h2 class="text-2xl font-semibold text-purple-800 mb-4">Discovering Laravel</h2>
                <p class="text-gray-700">
                  After exploring various languages and frameworks, I found Laravel - a perfect blend of elegance and power. Its expressive syntax and robust ecosystem resonated with me. The more I learned, the more I appreciated the craftsmanship behind it.
                </p>
              </div>
            </div>
            <div class="md:w-1/2">
              <img src="/images/about-us2.jpg" 
                   alt="Laravel code" 
                   class="rounded-xl shadow-lg w-full h-64 object-cover">
            </div>
          </div>
          
          <!-- Story Section 4 -->
          <div class="flex flex-col md:flex-row-reverse gap-8 items-center" data-aos="fade-left">
            <div class="md:w-1/2">
              <div class="bg-white p-6 rounded-xl shadow-lg h-full">
                <h2 class="text-2xl font-semibold text-purple-800 mb-4">Overcoming Challenges</h2>
                <p class="text-gray-700">
                  The journey wasn't without obstacles. There were moments of frustration when bugs seemed insurmountable or concepts felt too complex. But each challenge overcome made me stronger and more determined.
                </p>
              </div>
            </div>
            <div class="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                   alt="Problem solving" 
                   class="rounded-xl shadow-lg w-full h-64 object-cover">
            </div>
          </div>
          
          <!-- Story Section 5 -->
          <div class="flex flex-col md:flex-row gap-8 items-center" data-aos="fade-up">
            <div class="md:w-1/2">
              <div class="bg-white p-6 rounded-xl shadow-lg h-full">
                <h2 class="text-2xl font-semibold text-purple-800 mb-4">Where I Am Today</h2>
                <p class="text-gray-700">
                  Now, as a solo developer, I combine my passion for clean code with the power of Laravel to create meaningful web applications. Every project is an opportunity to learn, grow, and push the boundaries of what I can build.
                </p>
              </div>
            </div>
            <div class="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                   alt="Current work" 
                   class="rounded-xl shadow-lg w-full h-64 object-cover">
            </div>
          </div>
        </div>
        
        <div class="mt-16 text-center" data-aos="zoom-in">
          <p class="text-xl text-indigo-800 font-medium">
            The journey continues, one line of code at a time...
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header.vue';

onMounted(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
  });
});
</script>