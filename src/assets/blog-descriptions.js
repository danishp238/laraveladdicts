const blogs = [

    {
        id: 1,
        title: "Best Starter For Every Laravel Beginner: A Basic Yet Powerful CRUD App",
        excerpt: "Discover all the new features in Laravel 11 and learn how to safely upgrade your application.",
        category: "Full Walkthrough",
        image: new URL(`${import.meta.env.BASE_URL}images/user-dashboard.png`, import.meta.url).href,
        slug: "basic-crud-app",
        date: "June 21, 2025"
    },
    {
        id: 2,
        title: "The Habit Tracker App",
        slug: "habit-tracker-app",
        excerpt: "Learn to create an interactive habit tracking application with smooth animations",
        image: new URL(`${import.meta.env.BASE_URL}images/habit-dashboard.png`, import.meta.url).href,
        date: "May 15, 2025",
        category: "Full Walkthrough"
    },
    {
        id: 3,
        title: "Building a Fully Functional SaaS Application",
        slug: "saas-app",
        image: new URL(`${import.meta.env.BASE_URL}images/saas-app-1.jpeg`, import.meta.url).href,
        excerpt: "Welcome, Laravel enthusiasts! Today we're kicking off an exciting journey to build a full-stack SaaS application using Vue.js, Tailwind CSS, and Laravel.",
        category: "Full Walkthrough",
        date: "July 15, 2025",
    }
]

export default blogs