<template>
  <router-link v-if="isLink" :to="`/day-${date}`"
    class="justify-self-stretch grid place-items-center text-md sm:text-2xl text-green py-2 sm:py-3 border-4 border-green transition-colors hover:bg-green hover:text-white focus:bg-green focus:text-white outline-none">
    {{ date }}
  </router-link>
  <div v-else class="text-md sm:text-2xl text-gray-300 px-4 py-3 sm:py-4">
    {{ date }}
  </div>
</template>

<script setup>
defineProps({
  isLink: {
    type: Boolean,
    default: false
  },
  date: {
    type: Number,
    required: true
  }
})
</script>