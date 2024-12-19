<script setup>

import axios from 'axios';
import {ref} from 'vue';
import {useRoute,useRouter} from 'vue-router';
import {useGetData} from '@/composables/getData';

const route=useRoute()
const router=useRouter()
const {data,getData,loading,error}=useGetData();


const poke=ref({})

const back=() => { 
    router.push('/pokemons')
 }

// const getData = async () => {
//     try {
//        const {data} =  await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
//        console.log(data);
//        poke.value=data;
//     } catch (error) {
//         console.log(error);
//         poke.value=null;
//     }
// }

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);


</script>

<template>
    <p v-if="loading">Cargando Informacion</p>
    <div class="alert alert-danger" v-if="error">{{error}}</div>
    <div v-if="data">
        <img :src="data.sprites?.front_default" alt=""/>
        <h1>Poke name: {{ $route.params.name }}</h1>
        
    </div>
   <button @click="back">Volver</button>
</template>