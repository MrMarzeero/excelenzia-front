import { createRouter, createWebHistory } from 'vue-router';

// Certifique-se de que os componentes estão importados corretamente
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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
