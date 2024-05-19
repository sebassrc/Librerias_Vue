<template>
    <div class="container">
        <h1 class="text-start">Listado de Eventos
            <button @click="newEvento" class="btn btn-success mx-2">
                <font-awesome-icon icon="plus" />
            </button>
        </h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Fecha de Evento</th>
                    <th scope="col">Libro</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(evento, index) in eventos" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ evento.nombre }}</td>
                    <td>{{ evento.descripcion }}</td>
                    <td>{{ evento.fecha_evento }}</td>
                    <td>{{ evento.libro_id }}</td>
                    <td>
                        <button @click="deleteEvento(evento.id)" class="btn btn-danger mx-2">
                            <font-awesome-icon icon="trash" />
                        </button>
                        <button @click="editEvento(evento.id)" class="btn btn-warning mx-2">
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
    name: 'Eventos',
    data() {
        return {
            eventos: []
        };
    },
    methods: {
        deleteEvento(id) {
            Swal.fire({
                title: `¿Quieres eliminar el evento con ID ${id}?`,
                showCancelButton: true,
                confirmButtonText: 'Eliminar'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios
                        .delete(`http://127.0.0.1:8000/api/eventos/${id}`)
                        .then(response => {
                            if (response.data.success) {
                                Swal.fire('Eliminado!', '', 'success');
                                this.eventos = response.data.eventos;
                            }
                        });
                }
            });
        },
        editEvento(id) {
            this.$router.push({ name: 'EditarEvento', params: { id: id } });
        },
        newEvento() {
            this.$router.push({ name: 'NewEvento' });
        }
    },
    mounted() {
        axios
            .get("http://127.0.0.1:8000/api/eventos")
            .then(response => {
                this.eventos = response.data.eventos;
            });
    }
};
</script>
