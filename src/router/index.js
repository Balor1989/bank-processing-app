import HomePage from "@/views/HomePage";
import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    meta: {
      layout: "main",
      auth: true,
    },
  },
  {
    path: "/help",
    name: "Help",
    component: () => import(/* webpackChunkName: "help" */ "../views/HelpPage"),
    meta: {
      layout: "main",
      auth: true,
    },
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import(/* webpackChunkName: "auth" */ "../views/AuthPage"),
    meta: {
      layout: "auth",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, _, next) => {
  const requireAuth = to.meta.auth;
  if (requireAuth && store.getters["auth/isAuth"]) {
    next();
  } else if (requireAuth && !store.getters["auth/isAuth"]) {
    next("/auth?message=needAuth");
  } else {
    next();
  }
});

export default router;
