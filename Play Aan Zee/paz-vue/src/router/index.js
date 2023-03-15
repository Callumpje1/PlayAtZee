import {createRouter, createWebHashHistory} from "vue-router";
import Home from "@/components/Home.vue";
import CabinsOverview31 from "@/components/CabinsOverview31.vue";
import CabinsOverview32 from "@/components/CabinsOverview32.vue";
import UnknownRoute from "@/components/UnknownRoute.vue";

const routes = [{
    path: "/", redirect: "/home",
}, {
    path: "/home", name: "Home", component: Home,
}, {
    path: "/cabins/overview31", name: "CabinsOverview31", component: CabinsOverview31,
}, {
    path: "/cabins/overview32", name: "CabinsOverview32", component: CabinsOverview32,
}, {
    path: "/login", name: "Login"
}, {
    path: "/sign-up", name: "Sign-up",
},
    {
        path: "/:pathMatch(.*)*",
        redirect: "/404"
    },
    {
        path: "/404",
        name: "404",
        component: UnknownRoute

    }]


export const router = createRouter({
    history: createWebHashHistory(), routes,
});

