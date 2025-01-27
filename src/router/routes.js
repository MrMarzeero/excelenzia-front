import MainLayout from "../layouts/MainLayout.vue";
import TabListLayout from "../layouts/TablistLayout.vue";
import ProblemsLayout from "../layouts/ProblemsLayout.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      { path: "", component: () => import("../views/LandingPage.vue") },
      { path: "login", component: () => import("../views/login/LoginPage.vue") },
      { path: "sign-up", component: () => import("../views/login/SignUp.vue") },
    ],
  },
  {
    path: "/",
    component: TabListLayout,
    children: [
      {
        path: "dashboard",
        component: () => import("../views/tablist/DashboardPage.vue"),
      },
    ],
  },
  {
    path: "/problems",
    component: ProblemsLayout,
    children: [
      {
        path: "generate",
        component: () => import("../views/tablist/cp-gen/Generate.vue"),
      },
      {
        path: "solve",
        component: () => import("../views/tablist/cp-gen/Solve.vue"),
      },
    ],
  },
];

export default routes;