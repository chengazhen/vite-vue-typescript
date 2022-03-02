import router from './router'
import { getData } from '@/utils/session'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const whitePath: string[] = ['/login']
router.beforeEach((to, from, next) => {
    nprogress.start()
    const isLogin = getData('userId')
    if (isLogin || whitePath.includes(to.fullPath)) {
        next()
    } else {
        next('/login')
    }
})

router.afterEach(() => {
    nprogress.done()
})