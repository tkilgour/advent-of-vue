<template>
  <p :class="isSetup ? 'self-start bg-teal-800' : 'self-end bg-red-800'" class="w-48 px-4 py-2 text-white rounded-lg">
    <slot />
  </p>
</template>

<script setup>
defineProps({
  isSetup: {
    type: Boolean,
    default: false
  }
})
</script>