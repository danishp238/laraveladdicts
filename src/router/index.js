import { createRouter, createWebHistory, createWebHashHistory } from "vue-router"
import Main from "../components/Main.vue"
import BuildingAPI from "../components/BuildingAPI.vue"
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import AboutUs from "../views/AboutUs.vue"
import ContactUs from "../views/ContactUs.vue"
import PrivacyPolicy from "../views/PrivacyPolicy.vue"
import Resources from "../views/Resources.vue"

NProgress.configure({ showSpinner: false })

const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior(to, from, savedPosition) {
    // Always scroll to top on route change
    return { top: 0 }
  },
    routes: [
        {
            path: '/',
            name: 'home',
            component: Main
        },

        {
          path: '/about-us',
          name: 'about-us',
          component: AboutUs
        },

        {
          path: '/contact-us',
          name: 'contact-us',
          component: ContactUs
        },

        {
          path: '/privacy-policy',
          name: 'privacy-policy',
          component: PrivacyPolicy
        },

        {
          path: '/resources',
          name: 'resources',
          component: Resources
        },

        {
            path: '/building-api',
            name: 'buildingAPI',
            component: BuildingAPI
        },

         { path: '/blog/:slug', name: 'BlogPost', component: BuildingAPI }
    ]
})

// Show progress on route change start
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

// Hide progress when route is done
router.afterEach(() => {
  NProgress.done()
})

export default router