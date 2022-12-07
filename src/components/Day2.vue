<template>
  <main class="w-full h-full flex justify-center items-center">
    <div class="w-72 h-72 flex flex-col items-stretch justify-end gap-4">
      <TextBubble isSetup v-if="!loading">
        {{ setup }}
      </TextBubble>
      <TextBubble v-if="(showDelivery && !loading)">
        {{ delivery }}
      </TextBubble>
      <button class="bg-green w-full h-10 rounded-lg" @click="handleClick">
        <span v-if="loading">Loading...</span>
        <span v-else-if="showDelivery">Another!</span>
        <span v-else>Tell Me!</span>
      </button>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import TextBubble from './TextBubble.vue';

const loading = ref(false)
const setup = ref('')
const delivery = ref('')
const showDelivery = ref(false)

const fetchJoke = async () => {
  try {
    loading.value = true
    const response = await fetch('https://v2.jokeapi.dev/joke/christmas')
    const data = await response.json()
    setup.value = data.setup
    delivery.value = data.delivery
    loading.value = false
  } catch (error) {
    alert('Whoops, something went wrong!')
    loading.value = false
  }
}

const handleClick = () => {
  if (showDelivery.value) {
    fetchJoke()
    showDelivery.value = false
  } else {
    showDelivery.value = true
  }
}

fetchJoke()
</script>
