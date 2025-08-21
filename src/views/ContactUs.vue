<template>

    <Header></Header>

  <div class="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 pt-20">
    <!-- Header (you mentioned you already have this) -->
    
    <main class="container mx-auto px-4 py-12">
      <section class="max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold text-indigo-900 mb-4 text-center" data-aos="fade-down">
          Let's Connect
        </h1>
        <p class="text-xl text-indigo-700 text-center mb-12" data-aos="fade-down" data-aos-delay="100">
          I'd love to hear from you!
        </p>
        
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-white rounded-xl shadow-lg p-8" data-aos="fade-right">
            <h2 class="text-2xl font-semibold text-purple-800 mb-6">Send Me a Message</h2>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label for="name" class="block text-gray-700 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required>
              </div>
              
              <div>
                <label for="email" class="block text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required>
              </div>
              
              <div>
                <label for="subject" class="block text-gray-700 mb-2">Subject</label>
                <select 
                  id="subject" 
                  v-model="form.subject"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required>
                  <option value="" disabled selected>Select a topic</option>
                  <option value="recommendation">Recommendation</option>
                  <option value="guidance">Guidance Needed</option>
                  <option value="bug">Bug Report</option>
                  <option value="improvement">Improvement Suggestion</option>
                  <option value="sponsorship">Sponsorship Inquiry</option>
                  <option value="idea">Project Idea</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label for="message" class="block text-gray-700 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  v-model="form.message"
                  rows="5"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required></textarea>
              </div>
              
              <button 
                type="submit"
                class="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
                :disabled="isSubmitting">
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
              
              <p v-if="submitStatus" class="mt-4 text-green-600">
                {{ submitStatus }}
              </p>
            </form>
          </div>
          
          <!-- Contact Info -->
          <div class="space-y-8" data-aos="fade-left">
            <div class="bg-white rounded-xl shadow-lg p-8">
              <h2 class="text-2xl font-semibold text-purple-800 mb-4">Why Reach Out?</h2>
              <ul class="space-y-4 text-gray-700">
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-purple-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Need recommendations for your Laravel project</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-purple-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Seeking guidance on web development challenges</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-purple-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Found bugs or have improvement suggestions</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-purple-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Interested in sponsorship opportunities</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-purple-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>
                    <a href="https://www.profitableratecpm.com/x64ce697?key=7b19c8d5379b11e2d01834ca8aceafa0">
                      Have exciting project ideas to discuss
                    </a>
                    
                  </span>
                </li>
              </ul>
            </div>
            
            <div class="bg-white rounded-xl shadow-lg p-8">
              <h2 class="text-2xl font-semibold text-purple-800 mb-4">Direct Contact</h2>
              <div class="space-y-4 text-gray-700">
                <div class="flex items-center">
                  <svg class="h-6 w-6 text-purple-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>mcdanishp@gmail.com</span>
                </div>
                <div class="flex items-center">
                  <svg class="h-6 w-6 text-purple-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                  <span>@professional_gamer20</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header.vue';

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const submitStatus = ref('');

const submitForm = () => {
  isSubmitting.value = true;
  
  // Simulate form submission
  setTimeout(() => {
    console.log('Form submitted:', form.value);
    submitStatus.value = 'Thank you for your message! I will get back to you soon.';
    form.value = { name: '', email: '', subject: '', message: '' };
    isSubmitting.value = false;
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      submitStatus.value = '';
    }, 5000);
  }, 1500);
};

onMounted(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
  });
});
</script>