<script setup>
import { useFavoritosStore } from '@/store/favoritos';
import { storeToRefs } from 'pinia';
import {useRoute,useRouter,RouterLink} from 'vue-router';

const useFavoritos = useFavoritosStore();

const { favoritos } = storeToRefs(useFavoritos)

const{remove}=useFavoritos

</script>

<template>

    <h1>
        Favoritos
    </h1>
    <p v-if="favoritos.length === 0">Sin favoritos</p>
    <ul class="list-group" v-else>
        <li class="list-group-item" v-for="pokemon in favoritos" :key="pokemon.id">
            <div>
                {{ pokemon.name }}
            </div>
            <div>
                <router-link class="btn btn-sm btn-success" :to="`/pokemons/${pokemon.name}`">Mayor informacion</router-link>
                <button class="btn btn-sm btn-danger" @click="remove(pokemon.id)">Eliminar</button>
            </div>
        </li>
    </ul>
</template>