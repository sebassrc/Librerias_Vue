<template>
    <div class="container">
        <h1 class="text-start">Listado de Ventas
            <button @click="newVenta" class="btn btn-success mx-2">
                <font-awesome-icon icon="plus" />
            </button>
        </h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Libro</th>
                    <th scope="col">Cliente</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Fecha de Venta</th>
                    <th scope="col">Total</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(venta, index) in ventas" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ venta.libro_id }}</td>
                    <td>{{ venta.cliente_id }}</td>
                    <td>{{ venta.cantidad }}</td>
                    <td>{{ venta.fecha_venta }}</td>
                    <td>{{ venta.total }}</td>
                    <td>
                        <button @click="deleteVenta(venta.id)" class="btn btn-danger mx-2">
                            <font-awesome-icon icon="trash" />
                        </button>
                        <button @click="editVenta(venta.id)" class="btn btn-warning mx-2">
                            <font-awesome-icon icon="pencil" />
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'Ventas',
    data() {
        return {
            ventas: []
        };
    },
    methods: {
        deleteVenta(id) {
            Swal.fire({
                title: `¿Quieres eliminar la venta con ID ${id}?`,
                showCancelButton: true,
                confirmButtonText: 'Eliminar'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios
                        .delete(`http://127.0.0.1:8000/api/ventas/${id}`)
                        .then(response => {
                            if (response.data.success) {
                                Swal.fire('Eliminado!', '', 'success');
                                this.ventas = response.data.ventas;
                            }
                        });
                }
            });
        },
        editVenta(id) {
            this.$router.push({ name: 'EditarVenta', params: { id: id } });
        },
        newVenta() {
            this.$router.push({ name: 'NewVenta' });
        }
    },
    mounted() {
        axios
            .get("http://127.0.0.1:8000/api/ventas")
            .then(response => {
                this.ventas = response.data.ventas;
            });
    }
};
</script>
