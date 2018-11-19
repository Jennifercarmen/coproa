<template>
  <div class="page">
    <Navbar></Navbar>
        <b-container class="form-data form-datosG">
          <div class="my-1" v-for="list in form.listInput" :key="list.placeholder">
              <b-row>
              <b-col sm= '12'>
                  <label class="color-label omnes-medium" for="inputLive">{{ list.label }}</label>
              </b-col>
              </b-row>
              <b-row>
              <b-col sm= '12'>
                  <b-form-file accept="image/jpeg, image/png, image/gif" placeholder="Selecciona un archivo"></b-form-file>
              </b-col>
              </b-row>
          </div>
          <div class="my-1 ">
          <br>
          <b-row ><b-col sm='12'><b-button class="float-right" variant="success">Guardar</b-button></b-col></b-row>
          </div>
        </b-container>
  </div>
</template>
<script>
  import Navbar from "./Navbar";
  export default {
    data() {
      return {
        title: 'Procedimiento en Tramite',
        selected: null,
        options: [
          { value: null, text: 'Seleccione la Falta' },
          { value: 'a', text: 'Acoso Sexual' },
          { value: 'b', text: 'Vioelencia Fisica' },
          { value: 'C', text: 'Malversacion de Fondos' },
          { value: 'd', text: 'Robos' }
        ],
        form:
        {
          listInput: [
            { label: 'Investigacion Previa', type: 'text', text: 'Ingrese el nº  de expediente' },
            { label: 'Informe Preliminar', type: 'text', text: 'Ingrese el lugar' },
            { label: 'R.D', type: 'text', text: 'Ingrese el presunto Autor' },
            { label: 'Resolutivo', type: 'text', text: 'Ingrese la I.E' },
            { label: 'Tipificacion de la Falta', type: 'text', text: 'Ingrese el nombre del agraviado'},
            { label: 'Notificacion', type: 'date', text: '' },
            { label: 'Descargos', type: 'date', text: '' },
            { label: 'Eval. Exp', type: 'date', text: '' },
            { label: 'R.D', type: 'date', text: '' },
            { label: 'Notificacion', type: 'date', text: '' },
            { label: 'Apelacion', type: 'date', text: '' }
          ]
        }

      }
    },
    components: {
      Navbar
    },
    created: function () {
      console.log(this.form.listInput)
    }
  }
</script>