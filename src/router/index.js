import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Invoices from '../views/Invoices.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/invoices', component: Invoices }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
