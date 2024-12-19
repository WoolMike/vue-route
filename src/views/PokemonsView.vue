<script setup>
import {RouterLink} from 'vue-router';
import {useGetData} from '@/composables/getData';

const {data,getData,loading,error}=useGetData();


// const getData=async () => {
//     try {
//         const {data}=await axios.get("https://pokeapi.co/api/v2/pokemon");
//         pokemons.value=data.results;
//     } catch (error) {
//         console.log(error)
//     }
// };

getData("https://pokeapi.co/api/v2/pokemon");
</script>
<template>
    <h1>Pokemones</h1>
    <p v-if="loading">Cargando Informacion....</p>
    <div class="alert alert-danger" v-if="error">{{error}}</div>
    <div v-if="data">
         <ul class="list-group mb-2">
        <li  class="list-group-item" v-for="pokemon in data.results">
            <router-link :to="`/pokemons/${pokemon.name}`">{{ pokemon.name}}</router-link>
            
        </li>
    </ul>
    <button :disabled="!data.previous" class="btn btn-danger me-2" @click="getData(data.previous)" >Anterior</button>
    <button :disabled="!data.next" class="btn btn-success" @click="getData(data.next)" >Siguiente</button>
    </div>
</template>