<template>
  <div class="form-datosG">
    <p  class="omnes-bold title"> {{ title }} </p>
    <b-container fluid>
      <div class="my-1" v-for="list in form.listInput" :key="list.placeholder">
        <b-row>
          <b-col sm= '12'>
            <label class="color-label omnes-medium" for="inputLive">{{ list.label }}</label>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm= '12'>
            <b-form-input :type="list.type" :placeholder="list.text"></b-form-input>
          </b-col>
        </b-row>
      </div>
      <div class="my-1">
        <b-row><b-col sm='12'><label class="color-label omnes-medium" for="inputLive">Falta</label></b-col></b-row>
        <b-row><b-col sm='12'><b-form-select v-model="selected" :options="options" class="mb-3" size="sm" /></b-col></b-row>
      </div>
      <div class="my-1">
        <b-row><b-col sm='12'><b-form-file accept="image/jpeg, image/png, image/gif" placeholder="Selecciona un archivo"></b-form-file></b-col></b-row>
      </div>
      <div class="my-1 ">
        <br>
        <b-row ><b-col sm='12'><b-button class="float-right" variant="success">Guardar</b-button></b-col></b-row>
      </div>
    </b-container>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        title: 'Datos Generales',
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
            { label: 'Nº  de expediente', type: 'text', text: 'Ingrese el nº  de expediente' },
            { label: 'Lugar', type: 'text', text: 'Ingrese el lugar' },
            { label: 'Presunto Autor', type: 'text', text: 'Ingrese el presunto Autor' },
            { label: 'I.E', type: 'text', text: 'Ingrese la I.E' },
            { label: 'Agraviado', type: 'text', text: 'Ingrese el nombre del agraviado'},
            { label: 'Fecha de ocurrencia:', type: 'date', text: '' },
            { label: 'Ingreso de Expediente:', type: 'date', text: '' }
          ]
        }

      }
    },
    created: function () {
      console.log(this.form.listInput)
    }
  }
</script>