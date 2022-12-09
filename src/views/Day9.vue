<template>
  <div class="w-full h-full p-4 flex justify-center items-center">
    <div class="flex flex-col items-center max-w-md">
      <div>
        <img src="/assets/tree.svg" alt="Christmas tree" />
      </div>
      <div class="mt-2 flex justify-center items-center">
        <img v-for="present in renderedPresents" :key="present.id" :src="present.src" :alt="`Present ${present.id}`"
          data-qa="present" />
      </div>
      <button class="bg-gray-800 text-white text-xl rounded-lg mt-8 px-4 py-3" @click="toggleSort">Toggle sort</button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import presents from '../assets/presents.json'

const sorted = ref(false)
const toggleSort = () => sorted.value = !sorted.value

const sortedPresents = computed(() => {
  return [...presents].sort((a, b) => a.dimensions.height * a.dimensions.width - b.dimensions.height * b.dimensions.width)
})

const renderedPresents = computed(() => {
  return sorted.value ? sortedPresents.value : presents
})
</script>