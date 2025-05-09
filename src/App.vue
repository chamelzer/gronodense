<template>
  <main class="min-h-screen bg-white text-gray-900">
    <router-view />
    <Navigationsbar />
  </main>
</template>

<script setup>
import Navigationsbar from '@/components/Navigationsbar.vue'
</script>