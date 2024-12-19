import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",

  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // unicamente se carga el componente si se visita esa vista
      component: () => import('../views/AboutView.vue'),
    },
    {
      path:'/pokemons',
      name:'pokemons',
      // component:PokemonsView,
      component: ()=>import('../views/PokemonsView.vue'),
      // mejor optimizacion de los recursos, siempre poner que se cargue si es vicitada la vista
    },
    {
      path:'/pokemons/:name',
      name:'poke',
      // component:PokemonsView,
      component: ()=>import('../views/PokeView.vue'),
      // mejor optimizacion de los recursos, siempre poner que se cargue si es vicitada la vista
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue'),
  },
  ],
});

export default router
