// src/assets/blogs.js
import StarterCrud from "../components/Blogs/StarterCrud.vue"
import HabitTracker from "../components/Blogs/HabitTracker.vue"
import HabitDebugging from "../components/Blogs/HabitDebugging.vue"
import HabitFun from "../components/Blogs/HabitFun.vue"
import SaasApp from "../components/Blogs/SaasApp.vue"
import LoginSystem from "../components/Blogs/LoginSystem.vue"
import LoginSystemFrontend from "../components/Blogs/LoginSystemFrontend.vue"

const blogs = [
  {
    id: 1,
    title: "Best Starter For Every Laravel Beginner: A Basic Yet Powerful CRUD App",
    slug: "basic-crud-app",
    image: `${import.meta.env.BASE_URL}images/user-dashboard.png`,
    component: StarterCrud
  },
  {
    id: 2,
    title: "The Habit Tracker App",
    slug: "habit-tracker-app",
    image: `${import.meta.env.BASE_URL}images/habit-dashboard.png`,
    component: HabitTracker,
    related: [
      {
        title: "Habit Tracker Fun Facts 👌",
        excerpt: "Did you know it takes 18 to 254 days to form a habit? The science behind behavior change is full of surprising...",
        slug: "habit-tracker-app-fun-facts",
        image: `${import.meta.env.BASE_URL}images/habit-fun-fa.jpeg`,
        component: HabitFun
      },

      {
        title: "Debugging Your Habits 😁",
        slug: 'habit-tracker-app-debugging',
        image: `${import.meta.env.BASE_URL}images/habit-debug.jpg`,
        component: HabitDebugging
      }
    ],
  },

  {
    id: 3,
    title: "Building a Fully Functional SaaS Application",
    slug: "saas-app",
    image: `${import.meta.env.BASE_URL}images/saas-app-1.jpeg`,
    component: SaasApp,
    related: [
      {
        title: "Building Auth System For Your SaaS App",
        slug: 'saas-app-building-auth-system',
        image: `${import.meta.env.BASE_URL}images/login-system.jpeg`,
        component: LoginSystem
      },

      {
        title: "🎨 Building a Stunning Vue.js Authentication Interface with Laravel Backend",
        slug: "building-stunning-auth-system",
        image: `${import.meta.env.BASE_URL}images/auth-system-frontend.png`,
        component: LoginSystemFrontend
      }
    ],
  }
]

export default blogs
