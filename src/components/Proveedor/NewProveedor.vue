<template>
    <div class="container text-start">
      <h1 class="text-primary fw-bold"> Nuevo Proveedor</h1>
      <div class="card">
        <div class="card-header fw-bold">
          Proveedor
        </div>
        <div class="card-body">
          <form @submit.prevent="saveProveedor">
            
            <div class="row mb-3">
                <label for="nombre" class="form-label">Nombre :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                <input type="text" class="form-control" id="nombre" placeholder="Nombre del proveedor"
                 v-model="proveedor.nombre"
                 >
              </div>
            </div>

            <div class="row mb-3">
                <label for="contacto" class="form-label">Contacto :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="user" /></div>
                <input type="text" class="form-control" id="contacto" placeholder="Persona de contacto"
                 v-model="proveedor.contacto"
                 >
              </div>
            </div>

            <div class="row mb-3">
              <label for="telefono" class="form-label">Teléfono :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="phone" /></div>
                <input type="text" class="form-control" id="telefono" placeholder="Teléfono del proveedor"
                 v-model="proveedor.telefono"
                 >
              </div>
            </div>

            <div class="row mb-3">
              <label for="direccion" class="form-label">Dirección :</label>
              <div class="input-group">
                <div class="input-group-text"> <font-awesome-icon icon="map-marker-alt" /></div>
                <input type="text" class="form-control" id="direccion" placeholder="Dirección del proveedor"
                 v-model="proveedor.direccion"
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
    name: 'NewProveedor',
    data() {
        return {
            proveedor: {
                nombre: '',
                contacto: '',
                telefono: '',
                direccion: ''
            }
        };
    },
    methods: {
        cancelar() {
            this.$router.push({ name: 'proveedores' });
        },

        async saveProveedor() {
            const res = await axios.post(`http://127.0.0.1:8000/api/proveedores`, this.proveedor);
            
            if (res.status === 200) {
                this.$router.push({ name: 'proveedores' });
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Proveedor ha sido guardado',
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        }
    }
};
</script>
