<template>
    <div class="container text-start">
      <h1 class="text-primary fw-bold"> Nuevo Libro</h1>
      <div class="card">
        <div class="card-header fw-bold">
          Libro
        </div>
        <div class="card-body">
          <form @submit.prevent="saveLibro">
            
            <div class="row mb-3">
                <label for="titulo" class="form-label">Título :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="book" /></div>
                <input type="text" class="form-control" id="titulo" placeholder="Título del libro"
                 v-model="libro.titulo"
                 >
              </div>
            </div>

            <div class="row mb-3">
                <label for="autor" class="form-label">Autor :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="user" /></div>
                <input type="text" class="form-control" id="autor" placeholder="Autor del libro"
                 v-model="libro.autor"
                 >
              </div>
            </div>

            <div class="row mb-3">
              <label for="isbn" class="form-label">ISBN :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="barcode" /></div>
                <input type="text" class="form-control" id="isbn" placeholder="ISBN del libro"
                 v-model="libro.isbn"
                 >
              </div>
            </div>

            <div class="row mb-3">
              <label for="precio" class="form-label">Precio :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="dollar-sign" /></div>
                <input type="number" class="form-control" id="precio" placeholder="Precio del libro"
                 v-model="libro.precio"
                 >
              </div>
            </div>

            <div class="row mb-3">
              <label for="stock" class="form-label">Stock :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="boxes" /></div>
                <input type="number" class="form-control" id="stock" placeholder="Stock del libro"
                 v-model="libro.stock"
                 >
              </div>
            </div>

            <div class="row mb-3">
              <label for="categoria_id" class="form-label">Categoría :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="list" /></div>
                <input type="text" class="form-control" id="categoria_id" placeholder="Categoría del libro"
                 v-model="libro.categoria_id"
                 >
              </div>
            </div>

            <button class="btn btn-primary" type="submit">Guardar</button>
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
    name: 'NewLibro',
    data() {
        return {
            libro: {
                titulo: '',
                autor: '',
                isbn: '',
                precio: 0,
                stock: 0,
                categoria_id: 0
            }
        };
    },
    methods: {
        cancelar() {
            this.$router.push({ name: 'libros' });
        },

        async saveLibro() {
            const res = await axios.post(`http://127.0.0.1:8000/api/libros`, this.libro);
            
            if (res.status === 200) {
                this.$router.push({ name: 'libros' });
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Libro ha sido guardado',
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        }
    }
};
</script>
