import { createRouter, createWebHistory } from "vue-router";
import HelloView from "@/components/HelloView.vue";
import AboutView from "@/components/AboutView.vue";

const routes = [
    { 
        path: '/',
        name: "default",
        component: HelloView
    },
    { 
        path: '/home',
        name: "home",
        component: HelloView
    },
    { 
        path: '/about',
        name: "about",
        component: AboutView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;