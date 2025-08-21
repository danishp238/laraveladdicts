<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

onMounted(() => {
  const adContainer = document.getElementById(props.id)
  if (adContainer && !adContainer.dataset.adLoaded) {
    // Set flag to prevent reloading
    adContainer.dataset.adLoaded = 'true'

    // Create config script
    const configScript = document.createElement('script')
    configScript.innerHTML = `
      atOptions = {
        'key': '805b0332d9cd78f6b74f2105755970ff',
        'format': 'iframe',
        'height': 90,
        'width': 728,
        'params': {}
      };
    `
    document.body.appendChild(configScript)

    // Create ad script
    const externalScript = document.createElement('script')
    externalScript.src = '//www.highperformanceformat.com/805b0332d9cd78f6b74f2105755970ff/invoke.js'
    document.body.appendChild(externalScript)
  }
})
</script>

<template>
  <div :id="id" class="ad-container"></div>
</template>
