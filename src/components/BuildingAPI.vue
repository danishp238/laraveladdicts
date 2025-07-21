<script setup>
import { ref, computed, watch, nextTick, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import blogs from '/src/assets/blogs.js'
import Header from './Header.vue'

const route = useRoute()
const router = useRouter()
const slug = computed(() => route.params.slug)

// Find blog by slug (including related)
function findBlogBySlug(slug) {
  for (const blog of blogs) {
    if (blog.slug === slug) return blog
    const match = blog.related?.find(r => r.slug === slug)
    if (match) return match
  }
  return null
}


onMounted(() => {
  addRouterLinkListener()
})

// Optional: if you're switching between dynamic slugs
watch(() => route.params.slug, () => {
  nextTick(() => {
    addRouterLinkListener()
  })
})

function addRouterLinkListener() {
  if (!htmlNavigation.value) return

  htmlNavigation.value.querySelectorAll('[data-router-link]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const path = link.getAttribute('data-router-link')
      if (path) {
        router.push({ name: 'BlogPost', params: { slug: path } })
      }
    })
  })
}

// Reactive blog reference
const blog = computed(() => findBlogBySlug(slug.value))

const moreBlogs = computed(() =>
  blogs.filter(b => b.slug !== blog.value?.slug).slice(0, 3) // show 3 other posts
)


// for SPA navigation for raw html
const htmlNavigation = ref(null)

const relatedBlogs = computed(() => blog.value?.related || []);

function injectAdsterra(containerId, adScriptUrl) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const script = document.createElement('script');
  script.setAttribute('async', 'async');
  script.setAttribute('data-cfasync', 'false');
  script.src = adScriptUrl;
  container.innerHTML = ''; // Clean before injecting
  container.appendChild(script);
}

onMounted(() => {
  injectAdsterra('left-ad', '//pl27221802.profitableratecpm.com/43bf5710712cfd4e79e986deeddd180c/invoke.js');
  injectAdsterra('right-ad', '//pl27221802.profitableratecpm.com/43bf5710712cfd4e79e986deeddd180c/invoke.js');
});



</script>

<template>

  <Header></Header>
<div class="flex justify-center pt-20 gap-6">
  <!-- Left Ad -->
  <div id="left-ad" class="hidden lg:block w-1/6"></div>

  <!-- Blog Content -->
  <div class="w-full max-w-3xl">
    <!-- your existing blog content -->
    <img :src="blog.image" alt="Cover Image" class="mx-auto mb-4" />
    <div v-html="blog.content" ref="htmlNavigation"></div>
  </div>

  <!-- Right Ad -->
  <div id="right-ad" class="hidden lg:block w-1/6"></div>
</div>


  <div v-if="relatedBlogs.length" class="mt-20 border-t border-white/20 pt-10">
  <h2 class="text-2xl font-semibold text-white text-center mb-6">
    Must Reads for Those Who Enjoyed This Blog
  </h2>

  <div class="space-y-8 max-w-3xl mx-auto px-4">
    <div
      v-for="related in relatedBlogs"
      :key="related.slug"
      class="bg-white/10 p-4 rounded-lg shadow hover:shadow-xl transition cursor-pointer"
      @click="router.push({ name: 'BlogPost', params: { slug: related.slug } })"
    >
      <div class="flex flex-col sm:flex-row gap-4 items-center">
        <img
          :src="related.image"
          alt="Related blog image"
          class="w-full sm:w-36 h-24 object-cover rounded-lg"
        />
        <div>
          <h3 class="text-lg font-bold text-white">{{ related.title }}</h3>
          <p class="text-sm text-white/80 mt-1">{{ related.excerpt }}</p>
        </div>
      </div>
    </div>
  </div>
</div>


  <!-- Read More Section -->
<div class="mt-20 border-t border-white/20 pt-10">
  <h2 class="text-2xl font-semibold text-white text-center mb-6">More Blogs</h2>

  <div class="space-y-8 max-w-3xl mx-auto px-4">
    <div
      v-for="more in moreBlogs"
      :key="more.slug"
      class="bg-white/10 p-4 rounded-lg shadow hover:shadow-xl transition cursor-pointer"
      @click="router.push({ name: 'BlogPost', params: { slug: more.slug } })"
    >
      <div class="flex flex-col sm:flex-row gap-4 items-center">
        <img
          :src="more.image"
          alt="blog image"
          class="w-full sm:w-36 h-24 object-cover rounded-lg"
        />
        <div>
          <h3 class="text-lg font-bold text-white">{{ more.title }}</h3>
          <p class="text-sm text-white/80 mt-1">{{ more.excerpt }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>


