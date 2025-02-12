import { createRouter, createWebHistory } from 'vue-router';

import DashboardPage from '@/views/DashboardPage.vue';
import GerarProblema from '@/views/GerarProblema.vue';
import LandingPage from '@/views/LandingPage.vue';

const routes = [
  {
    path: '/',
    name: 'landing-page',
    component: LandingPage,
  },
  {
    path: '/dashboard-page',
    name: 'dashboard-page',
    component: DashboardPage,
  },
  {
    path: '/gerar-problema',
    name: 'gerar-problema',
    component: GerarProblema,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
