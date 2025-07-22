<script setup>
import { ref, computed, watch, nextTick, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import blogs from '/src/assets/blogs.js'
import Header from './Header.vue'

const route = useRoute()
const router = useRouter()
const slug = computed(() => route.params.slug)

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

watch(() => route.params.slug, () => {
  nextTick(() => {
    addRouterLinkListener()
  })
})

const htmlNavigation = ref(null)

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

const blog = computed(() => findBlogBySlug(slug.value))
const moreBlogs = computed(() => blogs.filter(b => b.slug !== blog.value?.slug).slice(0, 3))
const relatedBlogs = computed(() => blog.value?.related || [])
</script>

<template>
  <Header />

  <!-- TOP AD -->
  <div class="mb-4 w-full flex justify-center">
    <iframe src="//pl27221802.profitableratecpm.com/43bf5710712cfd4e79e986deeddd180c/invoke.js"
      style="width:728px;height:90px;border:none;overflow:hidden;" scrolling="no"></iframe>
  </div>

  <div class="flex justify-center pt-8 gap-6">
    <!-- LEFT AD -->
    <div class="hidden lg:block w-1/6">
      <iframe src="//pl27221802.profitableratecpm.com/43bf5710712cfd4e79e986deeddd180c/invoke.js"
        style="width:160px;height:600px;border:none;overflow:hidden;" scrolling="no">
        <div id="container-43bf5710712cfd4e79e986deeddd180c"></div>
      </iframe>
    </div>

    <!-- BLOG CONTENT -->
    <div class="w-full max-w-3xl">
      <img :src="blog.image" alt="Cover Image" class="mx-auto mb-4" />

      <!-- UNDER IMAGE AD -->
      <div class="mb-6 flex justify-center">
        <iframe src="//pl27221791.profitableratecpm.com/c9/f8/59/c9f859d113e0cbda5050b028559acb45.js"
          style="width:728px;height:90px;border:none;overflow:hidden;" scrolling="no"></iframe>
      </div>

      <!-- Blog Content -->
      <div v-html="blog.content" ref="htmlNavigation"></div>

      <!-- MIDWAY AD -->
      <div class="my-8 flex justify-center">
        <iframe src="//pl27221791.profitableratecpm.com/c9/f8/59/c9f859d113e0cbda5050b028559acb45.js"
          style="width:728px;height:90px;border:none;overflow:hidden;" scrolling="no"></iframe>
      </div>

      <!-- RELATED BLOGS -->
      <div v-if="relatedBlogs.length" class="mt-20 border-t border-white/20 pt-10">
        <h2 class="text-2xl font-semibold text-white text-center mb-6">Must Reads for Those Who Enjoyed This Blog</h2>
        <div class="space-y-8 max-w-3xl mx-auto px-4">
          <div v-for="related in relatedBlogs" :key="related.slug"
            class="bg-white/10 p-4 rounded-lg shadow hover:shadow-xl transition cursor-pointer"
            @click="router.push({ name: 'BlogPost', params: { slug: related.slug } })">
            <div class="flex flex-col sm:flex-row gap-4 items-center">
              <img :src="related.image" alt="Related blog image" class="w-full sm:w-36 h-24 object-cover rounded-lg" />
              <div>
                <h3 class="text-lg font-bold text-white">{{ related.title }}</h3>
                <p class="text-sm text-white/80 mt-1">{{ related.excerpt }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- END AD -->
      <div class="mt-10 flex justify-center">
        <iframe src="//www.highperformanceformat.com/805b0332d9cd78f6b74f2105755970ff/invoke.html"
          style="width:728px;height:90px;border:none;overflow:hidden;" scrolling="no"></iframe>
      </div>
    </div>

    <!-- RIGHT AD -->
    <div class="hidden lg:block w-1/6">
      <iframe src="//www.highperformanceformat.com/805b0332d9cd78f6b74f2105755970ff/invoke.html"
        style="width:160px;height:600px;border:none;overflow:hidden;" scrolling="no"></iframe>
    </div>
  </div>

  <!-- MORE BLOGS -->
  <div class="mt-20 border-t border-white/20 pt-10">
    <h2 class="text-2xl font-semibold text-white text-center mb-6">More Blogs</h2>
    <div class="space-y-8 max-w-3xl mx-auto px-4">
      <div v-for="more in moreBlogs" :key="more.slug"
        class="bg-white/10 p-4 rounded-lg shadow hover:shadow-xl transition cursor-pointer"
        @click="router.push({ name: 'BlogPost', params: { slug: more.slug } })">
        <div class="flex flex-col sm:flex-row gap-4 items-center">
          <img :src="more.image" alt="blog image" class="w-full sm:w-36 h-24 object-cover rounded-lg" />
          <div>
            <h3 class="text-lg font-bold text-white">{{ more.title }}</h3>
            <p class="text-sm text-white/80 mt-1">{{ more.excerpt }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
iframe {
  max-width: 100%;
}
</style>
