import MainLayout from "../layouts/MainLayout.vue";
import TabListLayout from "../layouts/TabListLayout.vue";
import ProblemsLayout from "../layouts/ProblemsLayout.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      { path: "", component: () => import("../views/LandingPage.vue") },
      { path: "about-us", component: () => import("../views/AboutUs.vue") },
      { path: "contact", component: () => import("../views/Contact.vue") },
      { path: "guide", component: () => import("../views/Guide.vue") },
      { path: "login", component: () => import("../views/login/Login.vue") },
      { path: "sign-up", component: () => import("../views/login/SignUp.vue") },
    ],
  },
  {
    path: "/",
    component: TabListLayout,
    children: [
      {
        path: "dashboard",
        component: () => import("../views/tablist/Dashboard.vue"),
      },
      {
        path: "problems",
        component: () => import("../views/tablist/Problems.vue"),
      },
      {
        path: "contests",
        component: () => import("../views/tablist/Contests.vue"),
      },
    ],
  },
  {
    path: "/problems",
    component: ProblemsLayout,
    children: [
      {
        path: "generate",
        component: () => import("../views/tablist/problems/Generate.vue"),
      },
      {
        path: "solve",
        component: () => import("../views/tablist/problems/Solve.vue"),
      },
      {
        path: "testcases",
        component: () => import("../views/tablist/problems/Testcases.vue"),
      },
    ],
  },
];

export default routes;