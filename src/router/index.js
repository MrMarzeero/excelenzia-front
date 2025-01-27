import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { useUserStore } from "../stores/userStore";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  const userStore = useUserStore();

  if (to.path === "/" && userStore.isAuthenticated) {
    next("/dashboard");
  } else {
    next();
  }
});

export default router;