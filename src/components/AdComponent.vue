<script setup>
import { computed, ref, onMounted } from "vue"

const props = defineProps({
  width: { type: String, default: "728" },
  height: { type: String, default: "90" },
  customClass: { type: String, default: "" }
})

const adClasses = computed(() => {
  return `border border-black rounded-md flex flex-col justify-between p-4 ${props.customClass}`
})

const containerRef = ref(null)

onMounted(() => {
  if (containerRef.value) {
    containerRef.value.innerHTML = ""

    // --- 1st script: inline atOptions ---
    const optionsScript = document.createElement("script")
    optionsScript.type = "text/javascript"
    optionsScript.innerHTML = `
      window.atOptions = {
        'key' : '805b0332d9cd78f6b74f2105755970ff',
        'format' : 'iframe',
        'height' : ${props.height},
        'width' : ${props.width},
        'params' : {}
      };
    `

    // --- 2nd script: external loader ---
    const invokeScript = document.createElement("script")
    invokeScript.type = "text/javascript"
    invokeScript.src = `//www.highperformanceformat.com/805b0332d9cd78f6b74f2105755970ff/invoke.js`

    containerRef.value.appendChild(optionsScript)
    containerRef.value.appendChild(invokeScript)
  }
})
</script>

<template>
  <div :class="adClasses" :style="{ width: props.width + 'px', height: props.height + 'px' }">
    <div class="flex-1 flex items-center justify-center text-gray-500 text-sm" ref="containerRef">
      Loading ad...
    </div>
   
  </div>
   <div class="text-xs text-gray-600 text-center border-t border-black pt-1">
      Advertisement
    </div>
</template>
