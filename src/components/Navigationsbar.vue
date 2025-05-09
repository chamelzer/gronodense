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
        { id: 1, icon: 'fas fa-house', title: 'Hjem' },
        { id: 2, icon: 'fas fa-barcode', title: 'Scanner' },
        { id: 3, icon: 'fas fa-gift', title: 'Pointshop' },
        { id: 4, icon: 'fas fa-trophy', title: 'Udfordringer' },
        { id: 5, icon: 'fas fa-user', title: 'Profil' }
      ]
    }),
  };
  </script>
  