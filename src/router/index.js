import Vue from 'vue'
import VueRouter from 'vue-router'
import FormProfile from '../views/FormProfile.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'FormProfile',
    component: FormProfile
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/confidentialite',
    name: 'Confidentialite',
    component: () => import('../views/Confidentialite.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
