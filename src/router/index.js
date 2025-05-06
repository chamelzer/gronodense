import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Hjem from '../views/Hjem.vue'
import Pointshop from '@/views/Pointshop.vue'
import Profil from '@/views/Profil.vue'
import Scanner from '@/views/Scanner.vue'
import Sorteringsguide from '@/views/Sorteringsguide.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/hjem',
    name: 'Hjem',
    component: Hjem,
  },
  {
    path: '/pointshop',
    name: 'Pointshop',
    component: Pointshop,
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil,
  },
  {
    path: '/scanner',
    name: 'Scanner',
    component: Scanner,
  },
  {
    path: '/sorteringsguide',
    name: 'Sorteringsguide',
    component: Sorteringsguide,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router