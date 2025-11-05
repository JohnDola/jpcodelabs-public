import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
    meta: {
      title: 'JPCodelabs - Automatisiere dein Business',
    },
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: () => import('../pages/Impressum.vue'),
    meta: {
      title: 'Impressum - JPCodelabs',
    },
  },
  {
    path: '/datenschutz',
    name: 'Datenschutz',
    component: () => import('../pages/Datenschutz.vue'),
    meta: {
      title: 'Datenschutz - JPCodelabs',
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      return { top: 0 }
    }
  },
})

// Update document title on route change
router.beforeEach((to, _from, next) => {
  const title = to.meta.title as string
  if (title) {
    document.title = title
  }
  next()
})

export default router
