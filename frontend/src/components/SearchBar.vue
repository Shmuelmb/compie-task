<script setup lang="ts">
import { SEARCH_TRIPS } from "@/constants"
import type { Trip } from "@/types"
import { ref } from "vue"
import { useDebounce } from "@/utils"
import CardModal from "./CardModal/CardModal.vue"
import Modal from "./Modal.vue"

const isLoading = ref(false)
const trips = ref<Trip[]>([])
const isOpen = ref(false)
const selectedTrip = ref<Trip | null>(null)
const query = ref("")

const fetchTripByQuery = async (query: string) => {
  if (!query) {
    trips.value = []
    return
  }
  try {
    isLoading.value = true
    const response = await fetch(`${SEARCH_TRIPS}?query=${query}`)
    const { data: newTrips } = await response.json()
    trips.value = newTrips
    isLoading.value = false
  } catch (err) {
    console.log(err)
  }
}
const search = useDebounce(fetchTripByQuery, 500)

const openModal = (trip: Trip) => {
  selectedTrip.value = trip
  isOpen.value = true
}
const closeResult = () => {
  query.value = ""
  trips.value = []
}
</script>
<template>
  <div class="search-bar">
    <input
      type="text"
      placeholder="Free text search"
      :disabled="isLoading"
      v-model="query"
      @input="(e) => search((e.target as HTMLInputElement).value)" />
    <div>
      <ul v-if="query" class="result">
        <button class="close-button" @click="closeResult">X</button>
        <li
          v-if="trips.length > 0"
          v-for="trip in trips"
          :key="trip.id"
          @click="openModal(trip)">
          {{ trip.trip_offering_name }}
        </li>
      </ul>
    </div>
  </div>
  <Modal v-if="isOpen" :open="isOpen" @close="isOpen = false">
    <CardModal v-if="selectedTrip" :trip="selectedTrip" />
  </Modal>
</template>

<style scoped>
.search-bar {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  position: relative;
}

.result {
  display: grid;
  overflow-y: scroll;
  max-height: 500px;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 99;
  background-color: var(--bg-color);
  border-radius: var(--border-radius);
  border: 1px solid white;
  padding: 0.75rem;
}

li {
  cursor: pointer;
  padding: 0.75rem;
  border: 1px solid white;
  border-radius: var(--border-radius);
  background-color: var(--color-bg-variant);
  margin: 0.5rem 0;
}
.close-button {
  display: flex;
  justify-content: flex-end;
}
</style>
