<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <footer class="bg-gradient-to-br text-white pt-12 pb-8 px-4 border-t border-purple-500/20">
        <div class="max-w-7xl mx-auto">
            <!-- Main Footer Content -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                <!-- Brand & Description -->
                <div class="lg:col-span-1">
                    <div class="flex items-center mb-4">
                        <span
                            class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">
                            Laravel Addicts
                        </span>
                    </div>
                    <p class="text-gray-300 mb-6 leading-relaxed">
                        Elevating web development skills with premium resources, tutorials, and a thriving community
                        of passionate developers.
                    </p>
                    
                </div>

                <!-- Developer Resources -->
                <div data-aos-delay="100">
                    <h3 class="font-semibold text-lg mb-6 text-gray-100 flex items-center">
                        <span class="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        Dev Resources
                    </h3>
                    <ul class="space-y-3">
                        <li><a href="https://laravel.com/"
                                class="text-gray-400 hover:text-cyan-300 transition-colors duration-200 flex items-center group"
                                target="_blank">
                                    <img src="/public/images/laravel.svg" alt="laravel logo" class="w-7 mx-2">
                                Laravel Official
                            
                            </a></li>
                        <li><a href="https://tailwindcss.com"
                                class="text-gray-400 hover:text-cyan-300 transition-colors duration-200 flex items-center group"
                                target="_blank">
                                <img src="/public/images/tailwind.svg" alt="Tailwind Logo" class="w-7 mx-2">
                                Tailwind CSS
                            </a></li>
                        <li><a href="https://web.dev"
                                class="text-gray-400 hover:text-cyan-300 transition-colors duration-200 flex items-center group"
                                target="_blank">
                                <img src="/public/images/code.svg" alt="Code" class="w-7 mx-2">
                                Web.dev
                            </a></li>
                        <li><a href="https://vuejs.org/"
                                class="text-gray-400 hover:text-cyan-300 transition-colors duration-200 flex items-center group"
                                target="_blank">
                                <img src="/public/images/vue.svg" alt="Vue Logo" class="w-7 mx-2">
                                Vue
                            </a></li>
                        <li><a href="https://react.dev/"
                                class="text-gray-400 hover:text-cyan-300 transition-colors duration-200 flex items-center group"
                                target="_blank">
                                <img src="/public/images/react.svg" alt="React Logo" class="w-7 mx-2">
                                React
                                
                            </a></li>
                    </ul>
                </div>

                <!-- Community Links -->
                <div data-aos-delay="200">
                    <h3 class="font-semibold text-lg mb-6 text-gray-100 flex items-center">
                        <span class="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                        Community
                    </h3>
                    <ul class="space-y-3">
                        <li><a href="https://discord.com"
                                class="text-gray-400 hover:text-purple-300 transition-colors duration-200 flex items-center group">
                                <img src="/public/images/discord.svg" alt="Discord Logo" class="w-7 mx-2">
                                Discord
                            </a>
                        </li>
                        <li><a href="https://github.com"
                                class="text-gray-400 hover:text-purple-300 transition-colors duration-200 flex items-center group">
                                <img src="/public/images/github.svg" alt="Github Logo" class="w-7 mx-2">
                                GitHub
                            </a>
                        </li>
                        <li><a href="https://dev.to"
                                class="text-gray-400 hover:text-purple-300 transition-colors duration-200 flex items-center group">
                                <img src="/public/images/laptop.svg" alt="Laptop" class="w-7 mx-2">
                                Dev.to</a>
                        </li>
                        <li><a href="https://stackoverflow.com"
                                class="text-gray-400 hover:text-purple-300 transition-colors duration-200 flex items-center group">
                                <img src="/public/images/coffee.svg" alt="Coffee" class="w-7 mx-2">
                                Stack
                                Overflow
                            </a></li>
                        <li><a href="https://x.com"
                                class="text-gray-400 hover:text-purple-300 transition-colors duration-200 flex items-center group">
                                <img src="/public/images/twitter.svg" alt="Twitter/X logo" class="w-7 mx-2">
                                Twitter/X</a>
                        </li>
                    </ul>
                </div>

                <!-- Premium CTA Section -->
                <div data-aos-delay="300">
                    <div
                        class="bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                        <h3 class="font-semibold text-lg mb-3 text-white">Ready to Level Up? 🚀</h3>
                        <p class="text-gray-300 text-sm mb-4">Access premium tutorials, source code, and expert
                            guidance.</p>
                        <div class="space-y-3">
                            <button
                                class="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-medium py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                                Pro Resources Coming Soon
                            </button>

                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="pt-8 mt-8 border-t border-slate-700">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <div class="text-gray-400 text-sm mb-4 md:mb-0">
                        © 2025 LaraveAddicts. Crafted with ❤️ by developers, for developers.
                    </div>

                    <!-- Legal Links -->
                    <div class="flex space-x-6">
                        <span
                            class="text-gray-400 hover:text-cyan-300 text-sm transition-colors duration-200">
                            <router-link :to="'/privacy-policy'">
                                Privacy Policy
                            </router-link>
                            
                        </span>
                        <span
                            class="text-gray-400 hover:text-cyan-300 text-sm transition-colors duration-200">
                            <router-link :to="'/about-us'">
                                About
                            Us
                            </router-link>
                            </span>
                        <span
                            class="text-gray-400 hover:text-cyan-300 text-sm transition-colors duration-200">
                            <router-link :to="'/contact-us'">Contact Us</router-link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>