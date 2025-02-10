import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import HomeProblemas from '../views/Home de Problemas/HomeProblemas.vue'
import EscolhadePersonalizado from '../views/Home de Problemas/EscolhadePersonalizado.vue'
import GerarProblema from '@/views/GerarProblema.vue'
import ProblemsLayout from '@/layouts/ProblemsLayout.vue'
import QuizGenerator from '@/components/QuizGenerator.vue'
import QuizView from '@/views/QuizView.vue'
import { useUserStore } from '../../stores/userStore'

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
    {
      path: '/quiz',
      name: 'quizgenerator',
      component: QuizGenerator,
    },
    {
      path : '/quiz-view',
      name: 'quiz-view',
      component: QuizView,
    },
    {
      path:'/biblioteca-problemas',
      name: 'biblioteca-problemas',
      component: () => import('../views/Home de Problemas/BibliotecaProblemas.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/login/Signup.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/Login.vue')
    },
    {
      path: "/problems",
      component: ProblemsLayout,
      children: [
        { path: "generate", component: () => import("../views/GerarProgramacao.vue/Generate.vue") },
        { path: "solve", component: () => import("../views/GerarProgramacao.vue/Solve.vue") },
      ],
    }
    
  ],
})

router.beforeEach((to, _from, next) => {
  console.log(localStorage.getItem("token"));
  if ((to.path !== "/signup" && to.path !== "/login") && !localStorage.getItem("token")) {
    next("/signup");
  } else {
    next();
  }
})

export default router
