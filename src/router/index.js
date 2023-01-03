import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import("../views/home/Index.vue"),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import("../views/auth/Index.vue"),
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import("../views/dashboard/Index.vue"),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;