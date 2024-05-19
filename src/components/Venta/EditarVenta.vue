<template>
    <div class="container text-start">
      <h1 class="text-primary fw-bold"> Editar Venta</h1>
      <div class="card">
        <div class="card-header fw-bold">
          Venta
        </div>
        <div class="card-body">
          <form @submit.prevent="updateVenta">
            
            <div class="row mb-3">
              <label for="venta_id" class="form-label">ID</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                <input type="text" class="form-control" id="venta_id" placeholder="ID venta" disabled 
                v-model='venta.id'
                >
              </div>
            </div>
           
            <div class="row mb-3">
                <label for="libro_id" class="form-label">Libro :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="book" /></div>
                <select class="form-select" v-model="venta.libro_id">
                  <option v-for="libro in libros" :key="libro.id" :value="libro.id">{{ libro.titulo }}</option>
                </select>
              </div>
            </div>

            <div class="row mb-3">
                <label for="cliente_id" class="form-label">Cliente :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="user" /></div>
                <select class="form-select" v-model="venta.cliente_id">
                  <option v-for="cliente in clientes" :key="cliente.id" :value="cliente.id">{{ cliente.nombre }} {{ cliente.apellido }}</option>
                </select>
              </div>
            </div>

            <div class="row mb-3">
              <label for="cantidad" class="form-label">Cantidad :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="sort-numeric-up" /></div>
                <input type="number" class="form-control" id="cantidad" placeholder="Cantidad vendida"
                 v-model="venta.cantidad"
                 >
              </div>
            </div>

            <div class="row mb-3">
              <label for="fecha_venta" class="form-label">Fecha de Venta :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="calendar" /></div>
                <input type="date" class="form-control" id="fecha_venta" placeholder="Fecha de la venta"
                 v-model="venta.fecha_venta"
                 >
              </div>
            </div>

            <div class="row mb-3">
              <label for="total" class="form-label">Total :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="dollar-sign" /></div>
                <input type="number" class="form-control" id="total" placeholder="Total de la venta"
                 v-model="venta.total"
                 >
              </div>
            </div>

            <button class="btn btn-primary" type="submit">Actualizar</button>
            <button class="btn btn-secondary mx-2" @click="cancelar">Cancelar</button>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'EditarVenta',
    data() {
        return {
            venta: {
                id: 0,
                libro_id: 0,
                cliente_id: 0,
                cantidad: 0,
                fecha_venta: '',
                total: 0
            },
            libros: [],
            clientes: []
        };
    },
    methods: {
        cancelar() {
            this.$router.push({ name: 'ventas' });
        },

        async updateVenta() {
            const res = await axios.put(`http://127.0.0.1:8000/api/ventas/${this.venta.id}`, this.venta);
            
            if (res.status === 200) {
                this.$router.push({ name: 'ventas' });
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Venta ha sido actualizada',
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        }
    },
    mounted() {
        this.venta.id = this.$route.params.id;
        axios.get(`http://127.0.0.1:8000/api/ventas/${this.venta.id}`)
            .then(response => {
                this.venta = response.data.venta;
            });
        axios.get("http://127.0.0.1:8000/api/libros")
            .then(response => {
                this.libros = response.data.libros;
            });
        axios.get("http://127.0.0.1:8000/api/clientes")
            .then(response => {
                this.clientes = response.data.clientes;
            });
    }
};
</script>
