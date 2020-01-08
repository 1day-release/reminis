import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import AddToDo from '../views/AddToDo.vue'
import Setting from '../views/Setting.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'AddToDo',
    component: AddToDo
  },
  {
    path: '/reminis',
    name: 'Reminis',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Reminis.vue')
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Setting
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
