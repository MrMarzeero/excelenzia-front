import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import HomeProblemas from '../views/HomeProblemas.vue'
import EscolhadePersonalizado from '../views/EscolhadePersonalizado.vue'
import GerarProblema from '@/views/GerarProblema.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/escolha-de-personalizado',
      name: 'escolha-de-personalizado',
      component: EscolhadePersonalizado,
    },
    {
      path: '/home-problemas',
      name: 'home-problemas',
      component: HomeProblemas,
    },
    {
      path: '/gerar-problema',
      name: 'gerar-problema',
      component: GerarProblema,
    },
  ],
})

export default router
