import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Stvori from '../views/stvor/Stvori.vue'
import Stvorovi from '../views/stvor/Stvorovi.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/stvor',
    name: 'Stvori',
    component: Stvori
  },
  {
    path: '/stvor/:id',
    name: 'Stvorovi',
    component: Stvorovi,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
