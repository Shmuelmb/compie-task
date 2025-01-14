<script setup lang="ts">
import Modal from "./Modal.vue"
import type { Trip } from "@/types"
import { ref } from "vue"
import CardModal from "./CardModal/CardModal.vue"

defineProps<{ trip: Trip }>()
const isOpen = ref(false)

const openModal = () => {
  isOpen.value = true
}
</script>

<template>
  <div class="grid-item" @click="openModal">
    <h3 class="title">{{ trip.trip_offering_name }}</h3>
    <img :src="trip.image" :alt="trip.trip_offering_name" />
  </div>

  <Modal v-if="isOpen" :open="isOpen" @close="isOpen = false">
    <CardModal :trip="trip" />
  </Modal>
</template>

<style scoped>
.grid-item {
  cursor: pointer;
  position: relative;
  border-radius: var(--border-radius);
  overflow: hidden;
}
.title {
  opacity: 0;
  position: absolute;
  top: 0%;
  color: white;
  font-size: 1.5rem;
  text-align: center;
  width: 100%;
  padding: 0.5rem;
  z-index: 1;
  transition: opacity 0.3s ease;
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

/* Hover effect */
.grid-item:hover img {
  transform: scale(1.05);
  filter: brightness(50%);
}
.grid-item:hover .title {
  opacity: 1;
}
</style>
