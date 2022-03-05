import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index'
import App from './App.vue'
const app = createApp(App)

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import 'normalize.css'
import './assets/css/style.css'

// import '@/routerBefore'

app.use(createPinia()).use(router).use(ElementPlus, {
    locale: zhCn,
})

app.mount('#app')
