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
      },

    ]
  },
  {
    path: '/components',
    component: () => import('@/view/layout/layoutIndex.vue'),
    meta: {
      name: '组件'
    },
    children: [{
      path: 'back-to-top',
      component: () => import('@/view/components/back-to-top/back-to-top.vue'),
      meta: {
        name: '返回顶部'
      }
    }, {
      path: 'mixin',
      component: () => import('@/view/components/mixin/mixin.vue'),
      meta: {
        name: '小组件'
      },
    }, {
      path: 'count-to',
      component: () => import('@/view/components/count-to/count-to.vue'),
      meta: {
        name: 'count-to'
      },
    }]
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
