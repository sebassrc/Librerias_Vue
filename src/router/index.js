import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Clientes from '../views/Clientes.vue';
import Libros from '../views/Libros.vue';
import Ventas from '../views/Ventas.vue';
import Proveedores from '../views/Proveedores.vue';
import Eventos from '../views/Eventos.vue';

import EditarCliente from '../components/Cliente/EditarCliente.vue';
import NewCliente from '../components/Cliente/NewCliente.vue';

import EditarLibro from '../components/Libro/EditarLibro.vue';
import NewLibro from '../components/Libro/NewLibro.vue';

import EditarVenta from '../components/Venta/EditarVenta.vue';
import NewVenta from '../components/Venta/NewVenta.vue';

import EditarProveedor from '../components/Proveedor/EditarProveedor.vue';
import NewProveedor from '../components/Proveedor/NewProveedor.vue';

import EditarEvento from '../components/Evento/EditarEvento.vue';
import NewEvento from '../components/Evento/NewEvento.vue';

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
    path: '/editar-cliente/:id',
    name: 'EditarCliente',
    component: EditarCliente
  },
  {
    path: '/add-cliente/',
    name: 'NewCliente',
    component: NewCliente
  },
  {
    path: '/libros',
    name: 'libros',
    component: Libros
  },
  {
    path: '/editar-libro/:id',
    name: 'EditarLibro',
    component: EditarLibro
  },
  {
    path: '/add-libro/',
    name: 'NewLibro',
    component: NewLibro
  },
  {
    path: '/ventas',
    name: 'ventas',
    component: Ventas
  },
  {
    path: '/editar-venta/:id',
    name: 'EditarVenta',
    component: EditarVenta
  },
  {
    path: '/add-venta/',
    name: 'NewVenta',
    component: NewVenta
  },
  {
    path: '/proveedores',
    name: 'proveedores',
    component: Proveedores
  },
  {
    path: '/editar-proveedor/:id',
    name: 'EditarProveedor',
    component: EditarProveedor
  },
  {
    path: '/add-proveedor/',
    name: 'NewProveedor',
    component: NewProveedor
  },
  {
    path: '/eventos',
    name: 'eventos',
    component: Eventos
  },
  {
    path: '/editar-evento/:id',
    name: 'EditarEvento',
    component: EditarEvento
  },
  {
    path: '/add-evento/',
    name: 'NewEvento',
    component: NewEvento
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
