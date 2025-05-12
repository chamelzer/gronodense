<template>
  <nav class="bottom-nav">
    <div
      v-for="option in options"
      :key="option.id"
      :class="['nav-item', { active: selected === option.id }]"
      @click="navigate(option)"
    >
      <i :class="option.icon"></i>
      <span>{{ option.title }}</span>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      selected: 0,
      options: [
        { id: 0, icon: 'fas fa-house', title: 'Hjem', route: '/hjem' },
        { id: 1, icon: 'fas fa-barcode', title: 'Sorter', route: '/sorteringsguide' },
        { id: 2, icon: 'fas fa-gift', title: 'Pointshop', route: '/pointshop' },
        { id: 3, icon: 'fas fa-trophy', title: 'Leaderboard', route: '/leaderboard' },
        { id: 4, icon: 'fas fa-user', title: 'Profil', route: '/profil' }
      ]
    };
  },
  methods: {
    navigate(option) {
      this.selected = option.id;
      this.$router.push(option.route);
    }
  }
};
</script>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #F7F3EC;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 0;
  border-top: 1px solid #ccc;
  z-index: 1000;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #858489;
  font-size: 0.75rem;
  flex: 1;
}

.nav-item i {
  font-size: 1.4rem;
  margin-bottom: 0.2rem;
}

.nav-item.active {
  color: #02382C;
}
</style>
