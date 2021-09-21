import { createRouter, createWebHistory } from "@ionic/vue-router";
import Home from "../views/Home.vue";

const routes = [
  // routes go here
  {
    path: "/",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
