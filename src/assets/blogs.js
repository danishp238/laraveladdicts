// src/assets/blogs.js
import starterCrud from "./blogs/starter-crud.html?raw"
import HabitTracker from "./blogs/habit-tracker/habit-tracker.html?raw"
import HabitDebugging from "./blogs/habit-tracker/debugging.html?raw"
import HabitFun from "./blogs/habit-tracker/fun-facts.html?raw"
import SaasApp_1 from "./blogs/saas-app/saasapp-1.html?raw"
import LoginSystem from "./blogs/saas-app/login-system.html?raw"

const blogs = [
  {
    id: 1,
    title: "Best Starter For Every Laravel Beginner: A Basic Yet Powerful CRUD App",
    slug: "basic-crud-app",
    image: `${import.meta.env.BASE_URL}images/user-dashboard.png`,
    content: starterCrud
  },
  {
    id: 2,
    title: "The Habit Tracker App",
    slug: "habit-tracker-app",
    image: `${import.meta.env.BASE_URL}images/habit-dashboard.png`,
    content: HabitTracker,
    related: [
      {
        title: "Habit Tracker Fun Facts 👌",
        excerpt: "Did you know it takes 18 to 254 days to form a habit? The science behind behavior change is full of surprising...",
        slug: "habit-tracker-app-fun-facts",
        image: `${import.meta.env.BASE_URL}images/habit-fun-fa.jpeg`,
        content: HabitFun
      },

      {
        title: "Debugging Your Habits 😁",
        slug: 'habit-tracker-app-debugging',
        image: `${import.meta.env.BASE_URL}images/habit-debug.jpg`,
        content: HabitDebugging
      }
    ],
  },

  {
    id: 3,
    title: "Building a Fully Functional SaaS Application",
    slug: "saas-app",
    image: `${import.meta.env.BASE_URL}images/saas-app-1.jpeg`,
    content: SaasApp_1,
    related: [
      {
        title: "Building Auth System For Your SaaS App",
        slug: 'saas-app-building-auth-system',
        image: `${import.meta.env.BASE_URL}images/login-system.jpeg`,
        content: LoginSystem
      }
    ],
  }
]

export default blogs
