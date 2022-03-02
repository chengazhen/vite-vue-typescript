import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index'
import App from './App.vue'
const app = createApp(App)

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import 'normalize.css'
import './assets/css/style.css'

import '@/routerBefore'

app.use(createPinia()).use(router).use(ElementPlus)

app.mount('#app')
