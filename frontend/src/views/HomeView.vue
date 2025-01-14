<script lang="ts" setup>
import { getUsers } from "@/api"
const { data, isLoading, error } = getUsers()
</script>

<template>
  <h1>Compie Task</h1>
  <p v-if="isLoading">Loading...</p>
  <p v-else-if="error">Error: {{ error.message }}</p>
  <p v-else>Users: <pre>{{ data }}</pre> </p>
</template>

<style scoped>
h1 {
  text-align: center;
  margin: 2rem;
  font-size: 2rem;
}
</style>
