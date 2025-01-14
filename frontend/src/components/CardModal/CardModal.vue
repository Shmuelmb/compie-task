<script setup lang="ts">
import type { Trip } from "@/types"
defineProps<{ trip: Trip }>()
function formatUnixTimestampToDate(timestamp: number) {
  const date = new Date(timestamp * 1000)
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  const year = date.getFullYear()

  return `${month}/${day}/${year}`
}
const notDisplayed = [
  "id",
  "image",
  "createdAt",
  "updatedAt",
  "trip_offering_description",
  "trip_offering_name",
]
const replaceKeys = {
  from_date: "Form",
  to_date: "To",
  city_name: "City",
  country_ISO_code: "Country",
  from_age: "Minimal age",
  to_age: "Maximal age",
}
</script>

<template>
  <div class="card-modal-wrapper">
    <img :src="trip.image" :alt="trip.trip_offering_name" />
    <h2>{{ trip.trip_offering_name }}</h2>
    <p>{{ trip.trip_offering_description }}</p>
    <ul class="details">
      <li v-for="key in Object.keys(trip)" :key="key">
        <template v-if="!notDisplayed.includes(key)">
          <h3>{{ replaceKeys[key as keyof typeof replaceKeys] }}:</h3>
          <p v-if="key === 'country_ISO_code'">
            {{ trip["country_ISO_code"].join(", ") }}
          </p>
          <p v-else-if="key === 'from_date' || key === 'to_date'">
            {{ formatUnixTimestampToDate(Number(trip[key])) }}
          </p>

          <p v-else>{{ trip[key as keyof Trip] }}</p>
        </template>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.card-modal-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
}
h2 {
  font-size: 1.5rem;
}
img {
  margin-top: 1rem;
  width: 100%;
  height: 100%;
}
.details {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
li {
  display: flex;
  justify-content: space-between;
}
</style>
