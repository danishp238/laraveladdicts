import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';
import router from './router'

// Initialize AOS
AOS.init();
const app = createApp(App)

app.use(router)

app.mount('#app')

