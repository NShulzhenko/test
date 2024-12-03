<template>
  <header>
    <Header />
  </header>
  <main class="mt-5 p-3">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from "@/components/Header.vue";
</script>

<style scoped>

</style>
