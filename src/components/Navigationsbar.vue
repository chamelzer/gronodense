<template>
    <SwipeBottomNavigation :options="options" v-model="selected" />
  </template>
  
  <script>
  import { SwipeBottomNavigation } from "bottom-navigation-vue";
  import "bottom-navigation-vue/dist/style.css";
  
  export default {
    components: { SwipeBottomNavigation },
    data: () => ({
      selected: 1,
      options: [
        { id: 1, icon: 'fa-solid fa-bolt', title: 'Hjem' },
        { id: 2, icon: 'fa-solid fa-magnifying-glass', title: 'Scanner' },
        { id: 3, icon: 'fa-solid fa-plus', title: 'Pointshop' },
        { id: 4, icon: 'fas fa-bell', title: 'Udfordringer' },
        { id: 5, icon: 'fa-solid fa-gear', title: 'Profil' }
      ]
    }),
  };
  </script>
  