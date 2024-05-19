<template>
    <div class="container">
        <h1 class="text-start">Listado de Libros
            <button @click="newLibro" class="btn btn-success mx-2">
                <font-awesome-icon icon="plus" />
            </button>
        </h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Título</th>
                    <th scope="col">Autor</th>
                    <th scope="col">ISBN</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Categoría</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(libro, index) in libros" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ libro.titulo }}</td>
                    <td>{{ libro.autor }}</td>
                    <td>{{ libro.isbn }}</td>
                    <td>{{ libro.precio }}</td>
                    <td>{{ libro.stock }}</td>
                    <td>{{ libro.categoria_id }}</td>
                    <td>
                        <button @click="deleteLibro(libro.id)" class="btn btn-danger mx-2">
                            <font-awesome-icon icon="trash" />
                        </button>
                        <button @click="editLibro(libro.id)" class="btn btn-warning mx-2">
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
    name: 'Libros',
    data() {
        return {
            libros: []
        };
    },
    methods: {
        deleteLibro(id) {
            Swal.fire({
                title: `¿Quieres eliminar el libro con ID ${id}?`,
                showCancelButton: true,
                confirmButtonText: 'Eliminar'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios
                        .delete(`http://127.0.0.1:8000/api/libros/${id}`)
                        .then(response => {
                            if (response.data.success) {
                                Swal.fire('Eliminado!', '', 'success');
                                this.libros = response.data.libros;
                            }
                        });
                }
            });
        },
        editLibro(id) {
            this.$router.push({ name: 'EditarLibro', params: { id: id } });
        },
        newLibro() {
            this.$router.push({ name: 'NewLibro' });
        }
    },
    mounted() {
        axios
            .get("http://127.0.0.1:8000/api/libros")
            .then(response => {
                this.libros = response.data.libros;
            });
    }
};
</script>
