import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import aos from 'aos'
import 'aos/dist/aos.css'
aos.init()
import Vue3Spline from 'vue3-spline'
createApp(App).use(Vue3Spline).mount('#app')
createApp(App).use(store).use(router).mount('#app')
