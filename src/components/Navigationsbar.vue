<template>
  <SwipeBottomNavigation :options="options" v-model="selected" />
</template>

<script>
import { SwipeBottomNavigation } from "bottom-navigation-vue";
import "bottom-navigation-vue/dist/style.css";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'; // Importér FontAwesomeIcon
import { useRouter } from 'vue-router'; // Brug Vue Router

export default {
  components: {
    SwipeBottomNavigation,
    FontAwesomeIcon, // Registrér FontAwesomeIcon som en komponent
  },
  data() {
    return {
      selected: 0, // Startværdi – vigtig at den matcher en ID
      options: [
        { id: 0, icon: 'fas fa-house', title: 'Hjem', route: '/hjem' },
        { id: 1, icon: 'fas fa-recycle', title: 'Sorter', route: '/sorteringsguide' },
        { id: 2, icon: 'fas fa-gift', title: 'Pointshop', route: '/pointshop' },
        { id: 3, icon: 'fas fa-trophy', title: 'Leaderboard', route: '/leaderboard' },
        { id: 4, icon: 'fas fa-user', title: 'Profil', route: '/profil' }
      ]
    };
  },
  methods: {
    // Metode til at håndtere navigation via router
    navigateTo(route) {
      this.$router.push(route); 
    }
  },
  watch: {
    // Watcher til at opdatere routeren ved ændring af den valgte navigation
    selected(newVal) {
      const selectedOption = this.options.find(option => option.id === newVal);
      if (selectedOption && selectedOption.route) {
        this.navigateTo(selectedOption.route); // Naviger til den valgte rute
      }
    }
  }
};
</script>

<style scoped>
/* Styling for navigationsbaren */
</style>