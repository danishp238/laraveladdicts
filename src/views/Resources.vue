<template>

    <Header></Header>
  <div class="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 pt-20">
    
    <main class="container mx-auto px-4 py-12">
      <section class="max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold text-indigo-900 mb-4 text-center" data-aos="fade-down">
          Developer Resources
        </h1>
        <p class="text-xl text-indigo-700 text-center mb-12" data-aos="fade-down" data-aos-delay="100">
          Tools and references that fuel my development journey
        </p>
        
        <div class="space-y-12">
          <!-- Introduction -->
          <div class="bg-white rounded-xl shadow-lg p-8" data-aos="fade-up">
            <h2 class="text-2xl font-semibold text-purple-800 mb-4">Why Quality Resources Matter</h2>
            <p class="text-gray-700 mb-4">
              When I first started coding, I quickly realized that not all learning resources are created equal. The right documentation, tutorials, and community support can make the difference between frustration and breakthrough.
            </p>
            <p class="text-gray-700">
              Over time, I've curated this list of resources that have consistently helped me and countless other developers - from complete beginners to seasoned professionals. These are the references I wish I had known about when I started.
            </p>
          </div>
          
          <!-- Resource Cards -->
          <div class="grid md:grid-cols-2 gap-6">
            <!-- MDN -->
            <div class="bg-white rounded-xl shadow-lg overflow-hidden" data-aos="fade-right">
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <div class="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-gray-800">MDN Web Docs</h3>
                </div>
                <p class="text-gray-700 mb-4">
                  The ultimate reference for web technologies. When I need authoritative, up-to-date information about HTML, CSS, or JavaScript, this is my first stop.
                </p>
                <a href="https://developer.mozilla.org" target="_blank" class="inline-flex items-center text-purple-600 hover:underline">
                  Visit MDN
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <!-- Laravel -->
            <div class="bg-white rounded-xl shadow-lg overflow-hidden" data-aos="fade-left">
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <div class="bg-red-100 p-3 rounded-lg mr-4">
                    <svg class="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-gray-800">Laravel Documentation</h3>
                </div>
                <p class="text-gray-700 mb-4">
                  The framework that changed my development workflow. Laravel's documentation is exceptionally clear and comprehensive - a model for how framework docs should be written.
                </p>
                <a href="https://laravel.com" target="_blank" class="inline-flex items-center text-purple-600 hover:underline">
                  Visit Laravel
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <!-- Laracasts -->
            <div class="bg-white rounded-xl shadow-lg overflow-hidden" data-aos="fade-right">
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <div class="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-gray-800">Laracasts</h3>
                </div>
                <p class="text-gray-700 mb-4">
                  Jeffrey Way's video tutorials helped me understand complex concepts through practical examples. The "Laravel From Scratch" series was particularly transformative for my skills.
                </p>
                <a href="https://laracasts.com" target="_blank" class="inline-flex items-center text-purple-600 hover:underline">
                  Visit Laracasts
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <!-- Tailwind CSS -->
            <div class="bg-white rounded-xl shadow-lg overflow-hidden" data-aos="fade-left">
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <div class="bg-teal-100 p-3 rounded-lg mr-4">
                    <svg class="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-gray-800">Tailwind CSS</h3>
                </div>
                <p class="text-gray-700 mb-4">
                  The utility-first CSS framework that made styling enjoyable again. Their documentation is excellent, and the playground lets you experiment right in the browser.
                </p>
                <a href="https://tailwindcss.com" target="_blank" class="inline-flex items-center text-purple-600 hover:underline">
                  Visit Tailwind
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <!-- Stack Overflow -->
            <div class="bg-white rounded-xl shadow-lg overflow-hidden" data-aos="fade-right">
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <div class="bg-orange-100 p-3 rounded-lg mr-4">
                    <svg class="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-gray-800">Stack Overflow</h3>
                </div>
                <p class="text-gray-700 mb-4">
                  The programmer's best friend. Almost every developer I know has been saved by a Stack Overflow answer at some point. Learning to search effectively here is a crucial skill.
                </p>
                <a href="https://stackoverflow.com" target="_blank" class="inline-flex items-center text-purple-600 hover:underline">
                  Visit Stack Overflow
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <!-- W3Schools -->
            <div class="bg-white rounded-xl shadow-lg overflow-hidden" data-aos="fade-left">
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <div class="bg-green-100 p-3 rounded-lg mr-4">
                    <svg class="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-gray-800">W3Schools</h3>
                </div>
                <p class="text-gray-700 mb-4">
                  Perfect for beginners looking for simple, practical examples. Their "Try it Yourself" editor lets you experiment with code right in your browser.
                </p>
                <a href="https://www.w3schools.com" target="_blank" class="inline-flex items-center text-purple-600 hover:underline">
                  Visit W3Schools
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <!-- CTA -->
          <div class="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-lg p-8 text-center" data-aos="zoom-in">
            <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Build Your Own Legacy?</h2>
            <p class="text-purple-100 mb-6 text-lg">
              Start your development journey with our curated tutorials and resources
            </p>
            <router-link :to="'/'">
            <span class="inline-block bg-white text-purple-600 font-medium py-3 px-8 rounded-lg hover:bg-opacity-90 transition duration-300">
              Explore Tutorials
            </span>
            </router-link>
          </div>
        </div>
      </section>
    </main>
  </div>

  <Footer></Footer>
</template>

<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

onMounted(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
  });
});
</script>