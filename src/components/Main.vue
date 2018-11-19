<template>
  <div class="page">
    <Navbar></Navbar>
    <b-container class="form-data">
    <b-row>
      <b-col>
        <DatosGenerales/>
      </b-col>
    </b-row>
    </b-container>
  </div>
</template>
<script>
import Navbar from "./Navbar";
import DatosGenerales from './DatosGenerales';
export default {
components: {
  Navbar,
  DatosGenerales
}
}
</script>