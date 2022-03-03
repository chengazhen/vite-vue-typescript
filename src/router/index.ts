import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
const router: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/view/layout/layoutIndex.vue'),
    children: [
      {
        path: '/home',
        meta: {
          name: '首页'
        },
        component: () => import('@/view/home/HomePage.vue')
      },
      {
        path: '/dashboard',
        component: () => import('@/view/dashboard/dashboard.vue'),
        meta: {
          name: '面板'
        },
      },
      {
        path: '/orderList',
        component: () => import('@/view/order/orderIndex.vue'),
        meta: {
          name: '订单'
        },
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
