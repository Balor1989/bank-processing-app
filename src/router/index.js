import HomePage from "@/views/HomePage";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    meta: {
      layout: "main",
    },
  },
  {
    path: "/help",
    name: "Help",
    component: () => import(/* webpackChunkName: "help" */ "../views/HelpPage"),
    meta: {
      layout: "main",
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

export default router;
