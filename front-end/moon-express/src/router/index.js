import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';

// Auth
import Login from '@/views/Login.vue';
import Signup from '@/views/SignUp.vue';

// Research 
import Research from '@/views/Research.vue';

import NotFound from '@/views/NotFound.vue';

// routes ajouter ou deja la ? 
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth/login',
    name : 'Login',
    component : Login
  },
  {
    path: '/auth/signup',
    name : 'Signup',
    component: Signup
  },
  {
    path: '/research',
    name : 'Research',
    component: Research
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
