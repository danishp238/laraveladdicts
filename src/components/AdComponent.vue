<script setup>
import { computed } from "vue"

const props = defineProps({
  width: {
    type: String,
    default: "full", // e.g. "full", "1/2", "96", "sm", "md"
  },
  height: {
    type: String,
    default: "64", // tailwind height like h-64, h-96, etc.
  },
  customClass: {
    type: String,
    default: "",
  }
})

// Build Tailwind classes dynamically
const adClasses = computed(() => {
  let w = props.width === "full" ? "w-full" : `w-${props.width}`
  let h = `h-${props.height}`
  return `${w} ${h} border border-black rounded-md flex flex-col justify-between p-4 ${props.customClass}`
})
</script>

<template>
  <div :class="adClasses">
    <!-- Ad content goes here -->
    <div class="flex-1 flex items-center justify-center text-gray-500 text-sm">
      Your Ad Here
    </div>

    <!-- Footer label -->
    
  </div>
  <div class="text-xs text-gray-600 text-center border-t border-black pt-1">
      Advertisement
    </div>
</template>
