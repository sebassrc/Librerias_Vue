<template>
    <div class="container text-start">
      <h1 class="text-primary fw-bold"> Editar Evento</h1>
      <div class="card">
        <div class="card-header fw-bold">
          Evento
        </div>
        <div class="card-body">
          <form @submit.prevent="updateEvento">
            
            <div class="row mb-3">
              <label for="evento_id" class="form-label">ID</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                <input type="text" class="form-control" id="evento_id" placeholder="ID evento" disabled 
                v-model='evento.id'
                >
              </div>
            </div>
           
            <div class="row mb-3">
                <label for="nombre" class="form-label">Nombre :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="bookmark" /></div>
                <input type="text" class="form-control" id="nombre" placeholder="Nombre del evento"
                 v-model="evento.nombre"
                 >
              </div>
            </div>

            <div class="row mb-3">
                <label for="descripcion" class="form-label">Descripción :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="align-left" /></div>
                <textarea class="form-control" id="descripcion" placeholder="Descripción del evento"
                 v-model="evento.descripcion"
                 ></textarea>
              </div>
            </div>

            <div class="row mb-3">
              <label for="fecha_evento" class="form-label">Fecha del Evento :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="calendar" /></div>
                <input type="date" class="form-control" id="fecha_evento" placeholder="Fecha del evento"
                 v-model="evento.fecha_evento"
                 >
              </div>
            </div>

            <div class="row mb-3">
              <label for="libro_id" class="form-label">Libro :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="book" /></div>
                <select class="form-select" v-model="evento.libro_id">
                  <option v-for="libro in libros" :key="libro.id" :value="libro.id">{{ libro.titulo }}</option>
                </select>
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
    name: 'EditarEvento',
    data() {
        return {
            evento: {
                id: 0,
                nombre: '',
                descripcion: '',
                fecha_evento: '',
                libro_id: 0
            },
            libros: []
        };
    },
    methods: {
        cancelar() {
            this.$router.push({ name: 'eventos' });
        },

        async updateEvento() {
            const res = await axios.put(`http://127.0.0.1:8000/api/eventos/${this.evento.id}`, this.evento);
            
            if (res.status === 200) {
                this.$router.push({ name: 'eventos' });
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Evento ha sido actualizado',
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        }
    },
    mounted() {
        this.evento.id = this.$route.params.id;
        axios.get(`http://127.0.0.1:8000/api/eventos/${this.evento.id}`)
            .then(response => {
                this.evento = response.data.evento;
            });
        axios.get("http://127.0.0.1:8000/api/libros")
            .then(response => {
                this.libros = response.data.libros;
            });
    }
};
</script>
