import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/project/:id',
    name: 'Project',
    component: () => import('@/views/Project.vue'),
    meta: {
      scrollTop: 0
    },
  }
]

const scrollBehavior = (to, from, savedPosition) => {
  return savedPosition ||
    to.meta?.scrollPos
}

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior
})

export default router