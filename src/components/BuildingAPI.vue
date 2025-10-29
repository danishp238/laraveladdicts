<script setup>
import { ref, computed, watch, nextTick, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import blogs from '/src/assets/blogs.js'
import Header from './Header.vue'
import Footer from './Footer.vue'

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
  <Header></Header>

    <div class="w-1/2 mx-auto pt-32">
      <h1 class="text-3xl text-center md:text-3xl font-bold">{{ blog.title }}</h1>
    </div>

    <!-- BLOG CONTENT -->
    <div class="w-1/2 mx-auto pt-32">
      <img :src="blog.image" alt="Cover Image" class="mx-auto mb-4" />
      </div>

      <!-- Blog Content -->
      <!-- <div v-html="blog.content" ref="htmlNavigation"></div> -->
      <div class="w-1/2 mx-auto pt-6">
        <component v-if="blog.component" :is="blog.component" />
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
  <Footer></Footer>
</template>
