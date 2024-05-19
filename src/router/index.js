import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Clientes from '../views/Clientes.vue';
import Libros from '../views/Libros.vue';
import Ventas from '../views/Ventas.vue';
import Proveedores from '../views/Proveedores.vue';
import Eventos from '../views/Eventos.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/clientes',
    name: 'clientes',
    component: Clientes
  },
  {
    path: '/libros',
    name: 'libros',
    component: Libros
  },
  {
    path: '/ventas',
    name: 'ventas',
    component: Ventas
  },
  {
    path: '/proveedores',
    name: 'proveedores',
    component: Proveedores
  },
  {
    path: '/eventos',
    name: 'eventos',
    component: Eventos
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
