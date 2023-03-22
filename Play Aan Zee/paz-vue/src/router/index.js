import {createRouter, createWebHashHistory} from "vue-router";
import Home from "@/components/Home.vue";
import UnknownRoute from "@/components/UnknownRoute.vue";
import Overview32 from "@/components/cabins/Overview32.vue";
import Overview31 from "@/components/cabins/Overview31.vue";
import Overview33 from "@/components/cabins/Overview33.vue";
import Detail32 from "@/components/cabins/Detail32.vue";

const routes = [{
    path: "/", redirect: "/home",
}, {
    path: "/home", name: "Home", component: Home,
}, {
    path: "/cabins/overview31", name: "Overview31", component: Overview31
}, {
    path: "/cabins/overview32", name: "Overview32", component: Overview32

}, {
    path: '/cabins/overview33',
    name: 'Overview33',
    component: Overview33,
    children: [
        {
            path: ':id',
            name: 'Detail32',
            component: Detail32,
            props: true
        },
    ],
}, {
    path: "/login", name: "Login"
}, {
    path: "/sign-up", name: "Sign-up"

}, {path: '/:pathMatch(.*)*', component: UnknownRoute}]


export const
    router = createRouter({
    history: createWebHashHistory(), routes,
});

