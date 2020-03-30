import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('@/views/Registration')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('@/views/Edit'),
    props: true,
    beforeEnter: (to, from, next) => {
      if (store.getters.checUser && store.getters.checWriter) {
        next()
      } else next('/login')
    }
  },
  {
    path: '/edit',
    name: 'created',
    component: () => import('@/views/Edit'),
    beforeEnter: (to, from, next) => {
      if (store.getters.checUser && store.getters.checWriter) {
        next()
      } else next('/login')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
