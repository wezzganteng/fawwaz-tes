import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Card.vue'
import Tambah from '../views/Tambah.vue'
const routes = [

    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/tambah',
        name: 'Tambah',
        component: Tambah,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
    });

export default router