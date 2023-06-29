import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
      meta: {
        showfooter: true // 在首页显示底部导航栏
      }
    },
    {
      path: '/cute',
      name: 'cute',
      component: () => import('../views/Cute.vue'),
      meta: {
        showfooter: true // 在首页显示底部导航栏
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/Cart.vue'),
      meta: {
        showfooter: true // 在首页显示底部导航栏
      }
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('../views/My.vue'),
      meta: {
        showfooter: true // 在首页显示底部导航栏
      }
    }
  ]
})

export default router
