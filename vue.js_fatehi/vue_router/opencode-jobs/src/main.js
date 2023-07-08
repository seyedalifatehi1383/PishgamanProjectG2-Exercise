import { createApp } from 'vue'
import App from './App.vue'
// no need /index.js after ./router because it borrows the index by default
import router from './router'

createApp(App).use(router).mount('#app')
