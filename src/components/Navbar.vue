
<template>
  <div class="">
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-brand href="#">Ugel Paita</b-navbar-brand>
      <b-dropdown id="ddown-left" text="Proceso COPROA" variant="primary" class="m-2">
        <NavList></NavList>
      </b-dropdown>
      <b-dropdown id="ddown-left" text="Proceso SERVIR" variant="primary" class="m-2">
        <NavList></NavList>
      </b-dropdown>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="#" disabled>REPORTES</b-nav-item>
          <b-nav-item href="#" disabled>CERRAR SESION</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
  import NavList from "./NavList";
  export default {
    components: {
      NavList
    }
  }
</script>