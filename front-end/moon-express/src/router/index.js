import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import About from '@/views/About.vue';
import Login from '@/views/Login.vue';

import NotFound from '@/views/NotFound.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component : About
  },
  {
    path: '/auth/login',
    name : 'Login',
    component : Login
  },
  {
    path: '/:notFound(.*)',
    component : NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
