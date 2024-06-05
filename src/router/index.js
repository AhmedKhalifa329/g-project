import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUp from "../views/SignUp.vue";
import Prodects from "../views/Prodects.vue";
import AboutUs from "@/views/AboutUs.vue";
import ComPanies from "@/views/ComPanies.vue";
import LoginViwe from "@/views/LoginViwe.vue";
import CompanyDetails from "@/views/CompanyDetails.vue";
import ListOfCompanies from "@/views/ListOfCompanies.vue";
const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/SignUp",
        name: "SignUp",
        component: SignUp,
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
    {
        path: "/ListOfCompanies",
        name: "ListOfCompanies",
        component: ListOfCompanies,
    },
    {
        path: "/CompanyDetails",
        name: "CompanyDetails",
        component: CompanyDetails,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
