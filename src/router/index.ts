import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw
} from 'vue-router'
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
        }
      },
      {
        path: '/orderList',
        component: () => import('@/view/order/orderIndex.vue'),
        meta: {
          name: '订单'
        }
      }
    ]
  },
  {
    path: '/components',
    component: () => import('@/view/layout/layoutIndex.vue'),
    meta: {
      name: '组件'
    },
    children: [
      {
        path: 'back-to-top',
        component: () =>
          import('@/view/components/back-to-top/back-to-top.vue'),
        meta: {
          name: '返回顶部'
        }
      },
      {
        path: 'pan-thumb',
        component: () => import('@/view/components/pan-thumb/pan-thumb.vue'),
        meta: {
          name: '小组件'
        }
      },
      {
        path: 'count-to',
        component: () => import('@/view/components/count-to/count-to.vue'),
        meta: {
          name: 'count-to'
        }
      },
      {
        path: 'tinymce',
        component: () => import('@/view/tinymce/tinymceIndex.vue'),
        meta: {
          name: 'count-to'
        }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/view/login/loginIndex.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/view/error-page/404.vue')
  }
]

export default createRouter({
  routes: router,
  history: createWebHashHistory()
})
