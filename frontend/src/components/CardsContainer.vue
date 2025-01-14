<script setup lang="ts">
import type { Trip } from "@/types"
import Card from "./Card.vue"

defineProps<{ trips: Trip[] }>()
</script>

<template>
  <div class="grid-container">
    <Card v-for="trip in trips" :key="trip.id" :trip="trip" />
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 0 auto;
  width: 80%;
}

@media (width < 768px) {
  .grid-container {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

@media (width < 480px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}
</style>
