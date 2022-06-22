<template>
  <!--
    Basic router navigation
    Update navigation by adding two router links for Home and About
   -->
  <div id="app">
    <div class="navBar">
    <div id="logo"><img class="logo" alt="wave logo" src="./assets/logo_wave.png"></div>
    <div id="nav">
      <router-link to="/home">Home</router-link>
      <router-link to="/angebot">Angebot</router-link>
      <router-link to="/about">Über uns</router-link>
    </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
/* Import all components */
export default {
  components: {
  }
}
</script>

<style lang="scss">
//Import of global-style
@import 'styles/global';
</style>
