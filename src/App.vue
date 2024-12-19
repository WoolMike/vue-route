<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">
      <img src="@/assets/logo.svg"alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
      PokemonAPI
    </router-link>
    <div>
      <router-link to="/" class="btn btn-outline-primary">Home</router-link>
      <router-link to="/pokemons" class="btn btn-outline-primary">Pokemons</router-link>
    </div>
  </div>
</nav>
<div class="container text-center">
  <RouterView />

</div>
</template>

