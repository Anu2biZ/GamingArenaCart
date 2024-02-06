import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DepositView from '../views/DepositView.vue'
import StreamView from '../views/StreamView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta : {
        title: 'GamingOnlineStore - Store'
      }
    },
    {
      path: '/deposit',
      name: 'deposit',
      component: DepositView,
      meta : {
        title: 'GamingOnlineStore - Deposit'
      }
    },
    {
      path: '/stream',
      name: 'stream',
      component: StreamView,
      meta : {
        title: 'GamingOnlineStore - Stream'
      }
    },
  ]
})

router.beforeEach((to) => {
  document.title = `${to.meta.title}` || 'Arena Shop';
})

export default router
