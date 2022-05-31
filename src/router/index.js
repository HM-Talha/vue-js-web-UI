import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/Login.vue";
import HomeView from "../views/HomeView.vue";
import LocationView from "../views/LocationView.vue";
import AdminPanel from "../views/AdminPanel.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/location",
      name: "location",
      component: LocationView,
    },
    {
      path: "/adminpanel",
      name: "admin panel",
      component: AdminPanel,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;