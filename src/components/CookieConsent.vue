<template>
  <div v-if="!accepted" id="cookieContent"
    class="z-50 fixed bottom-4 right-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300 p-6 border border-amber-200">
    <h2 class="text-2xl font-bold text-amber-800 text-center mb-3">Welcome! 👋</h2>
    <p class="text-amber-600 text-lg text-center mb-6">
      We use cookies 🍪 to improve your experience. See our
      <RouterLink to="/privacy-policy" class="text-amber-500 hover:text-amber-600">Privacy Policy</RouterLink>.
    </p>
    <div class="flex flex-col sm:flex-row gap-3">
      <button @click="acceptCookies"
        class="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-4 rounded-lg">
        Yum, Accept All!
      </button>
      <button @click="rejectCookies"
        class="flex-1 border border-amber-300 text-amber-700 hover:bg-amber-200 font-semibold py-3 px-4 rounded-lg">
        No Thanks
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const accepted = ref(true)

onMounted(() => {
  const pref = localStorage.getItem('cookieConsent')
  if (!pref) accepted.value = false
})

function acceptCookies() {
  localStorage.setItem('cookieConsent', 'accepted')
  accepted.value = true
}
function rejectCookies() {
  localStorage.setItem('cookieConsent', 'rejected')
  accepted.value = true
}
</script>
