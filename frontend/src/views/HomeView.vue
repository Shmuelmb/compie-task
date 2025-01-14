<script lang="ts" setup>
import { getTrips } from "@/api"
import { ref, watch, onMounted } from "vue"
import CardsContainer from "@/components/CardsContainer.vue"
import { GET_TRIPS } from "@/constants"
import type { Trip } from "@/types"
import SearchBar from "@/components/SearchBar.vue"

const skip = ref(0)
const take = ref(10)
const { data, isLoading, error } = getTrips(skip, take)
const trips = ref<Trip[]>([])
const oldTrips = ref<Trip[]>([])
const fetchMoreTrips = async () => {
  if (isLoading.value) return
  isLoading.value = true
  try {
    skip.value += take.value

    const response = await fetch(
      `${GET_TRIPS}?skip=${skip.value}&take=${take.value}`
    )
    const { data: newTrips } = await response.json()
    trips.value = [...trips.value, ...newTrips]
  } finally {
    isLoading.value = false
  }
}

const handleScroll = async () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement
  if (scrollTop + clientHeight >= scrollHeight - 100) {
    await fetchMoreTrips()
  }
}

watch(data, () => {
  trips.value = data.value as Trip[]
  oldTrips.value = data.value as Trip[]
})
onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})
</script>

<template>
  <h1>Compie Task</h1>
  <SearchBar />

  <p v-if="isLoading">Loading...</p>
  <p v-else-if="error">Error: {{ error }}</p>
  <p v-if="trips">
    <CardsContainer :trips="trips" />
  </p>
</template>

<style scoped>
h1 {
  text-align: center;
  margin: 2rem;
  font-size: 2rem;
}
</style>
