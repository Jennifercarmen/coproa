<template>
    <div class="header">
        <Navbar/>
          <p>hola</p>
    </div>
</template>
<script>
import Navbar from "./Navbar";
export default {
   components: {
    Navbar
  }
}
</script>

<style>
.header{
  background-color: white;
}
.header img{
  width: 200px;
}
</style>