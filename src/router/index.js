import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/Home.vue'
import Shop from '@/views/Shop/Shop.vue'
import Ourteam from '@/views/Ourteam/Ourteam.vue'
import Categories from '@/views/Categories/Categories.vue'
import About from '@/views/About/About.vue'
import Buyersguides from '@/views/Buyersguides/Buyersguides.vue'

const routes = [
  {
    path: '/',
    name:'home',
    component: Home
  },
  {
    path: '/shop',
    name:'shop',
    component: Shop
  },
  {
    path: '/ourteam',
    name:'ourteam',
    component: Ourteam
  },
  {
    path: '/categories',
    name:'categories',
    component: Categories
  },
  {
    path: '/about',
    name:'about',
    component: About
  },
  {
    path: '/buyersguides',
    name:'buyersguides',
    component: Buyersguides
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
