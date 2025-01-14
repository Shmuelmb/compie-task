<script setup lang="ts">
defineProps<{
  open: boolean
}>()

defineEmits<{
  (e: "close"): void
}>()
</script>
<template>
  <div v-if="open" class="modal-wrapper" @click.self="$emit('close')">
    <div class="modal-content">
      <button class="close-button" @click="$emit('close')">X</button>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.close-button {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.75rem 0.5rem;
}
.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  background-color: rgb(30, 30, 30);
  padding: 1rem;
  border-radius: var(--border-radius);
  display: flex;
  justify-content: center;
  max-width: 90dvw;
  max-height: 90dvh;
  overflow: auto;
}
</style>
