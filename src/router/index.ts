import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const router: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/view/layout/layoutIndex.vue'),
    children: [
      {
        path: '/home',
        component: () => import('@/view/home/HomePage.vue')
      },
      {
        path: '/dashboard',
        component: () => import('@/view/home/HomePage.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/view/login/loginIndex.vue')
  }
]

export default createRouter({
  routes: router,
  history: createWebHistory()
})
