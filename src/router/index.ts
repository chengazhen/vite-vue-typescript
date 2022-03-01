import { createRouter, createWebHistory } from 'vue-router'

const router = [
  {
    path: '/',
    redirect: '/home'
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
