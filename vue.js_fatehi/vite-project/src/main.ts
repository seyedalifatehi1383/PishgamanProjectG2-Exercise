// we have one app and n components
import './assets/main.css'

import { createApp } from 'vue' // 
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// vue plugin = we use them like below (.use)
app.use(createPinia())
app.use(router)

app.mount('#app')

// data binding : 