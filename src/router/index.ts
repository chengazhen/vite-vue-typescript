import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const router: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    component: () => import('@/view/login/loginIndex.vue')
  },
  {
    path: '/home',
    component: () => import('@/view/home/HomePage.vue')
  }
]

export default createRouter({
  routes: router,
  history: createWebHistory()
})
