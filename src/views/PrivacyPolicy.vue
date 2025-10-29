<template>

    <Header></Header>

  <div class="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 pt-20">
    <!-- Header -->
    
    <main class="container mx-auto px-4 py-12">
      <section class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 class="text-4xl md:text-5xl font-bold text-indigo-900 mb-8 text-center" data-aos="fade-down">
          Privacy Policy
        </h1>
        
        <div class="prose max-w-none" data-aos="fade-up">
          <p class="text-gray-700 mb-6">Last Updated: July 19th, 2025</p>
          
          <h2 class="text-2xl font-semibold text-purple-800 mt-8 mb-4">Information We Collect</h2>
          <p class="text-gray-700 mb-4">
            We may collect personal information such as your name, email address, and IP address when you interact with our website, subscribe to our newsletter, or contact us through our forms.
          </p>
          
          <h2 class="text-2xl font-semibold text-purple-800 mt-8 mb-4">How We Use Your Information</h2>
          <p class="text-gray-700 mb-4">
            The information we collect may be used to:
          </p>
          <ul class="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>Provide and maintain our service</li>
            <li>Notify you about changes to our service</li>
            <li>Allow you to participate in interactive features</li>
            <li>Provide customer support</li>
            <li>Gather analysis or valuable information to improve our service</li>
            <li>Monitor the usage of our service</li>
            <li>Detect, prevent and address technical issues</li>
          </ul>
          
          <h2 class="text-2xl font-semibold text-purple-800 mt-8 mb-4">Cookies and Tracking</h2>
          <p class="text-gray-700 mb-4">
            We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier.
          </p>
          
          <h2 class="text-2xl font-semibold text-purple-800 mt-8 mb-4">Third-Party Services</h2>
          <p class="text-gray-700 mb-4">
            We may employ third-party companies and individuals to facilitate our service ("Service Providers"), provide the service on our behalf, perform service-related services or assist us in analyzing how our service is used.
          </p>
          <p class="text-gray-700 mb-6">
            These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>
          
          <h2 class="text-2xl font-semibold text-purple-800 mt-8 mb-4">Google Analytics</h2>
          <p class="text-gray-700 mb-4">
            We use Google Analytics to analyze the use of our website. Google Analytics gathers information about website use by means of cookies. The information gathered is used to create reports about the use of our website.
          </p>
          
          <h2 class="text-2xl font-semibold text-purple-800 mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p class="text-gray-700 mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
          
          <h2 class="text-2xl font-semibold text-purple-800 mt-8 mb-4">Contact Us</h2>
          <p class="text-gray-700">
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:email@example.com" class="text-purple-600 hover:underline">mcdanishp@gmail.com</a>.
          </p>
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