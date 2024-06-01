import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SingUp from "../views/SingUp.vue";
import Prodects from "../views/Prodects.vue";
import AboutUs from "@/views/AboutUs.vue";
import ComPanies from "@/views/ComPanies.vue";
import LoginViwe from "@/views/LoginViwe.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/SingUp",
    name: "SingUp",
    component: SingUp,
  },

  {
    path: "/prodects",
    name: "prodects",
    component: Prodects,
  },
  {
    path: "/about",
    name: "about",
    component: AboutUs,
  },
  {
    path: "/companies",
    name: "companies",
    component: ComPanies,
  },
  {
    path: "/loginViwe",
    name: "loginViwe",
    component: LoginViwe,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
