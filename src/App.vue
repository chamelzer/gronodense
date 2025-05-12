<template>
  <main class="min-h-screen bg-white text-gray-900">
    <router-view />
    <Navigationsbar />
  </main>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Navigationsbar from '@/components/Navigationsbar.vue'

defineProps({ icon: FontAwesomeIcon });
</script>

