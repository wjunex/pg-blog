import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: {
        bg: 'hello'
      }
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('@/views/blogDetails.vue')
    }
  ]
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router
