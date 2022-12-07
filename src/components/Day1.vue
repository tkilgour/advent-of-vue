<script setup>
import { ref, watch } from 'vue'
import { useDebounceFn } from "@vueuse/core";

const searchTerm = ref('')
const products = ref([])
const loading = ref(false)
const noResults = ref(false)

const findProducts = useDebounceFn(async term => {
  // reset noResults when function runs
  noResults.value = false

  // check if search bar is empty
  if (term.length) {
    try {
      loading.value = true

      const response = await fetch(`https://dummyjson.com/products/search?q=${term}`)
      const result = await response.json()
      products.value = result.products

      // if products are empty, show no results message
      noResults.value = !products.value.length

      loading.value = false
    } catch (error) {
      loading.value = false
      alert('Whoops, something went wrong!')

      // reset search term if an error occured
      searchTerm.value = ''
    }
  } else {
    products.value = []
  }
}, 300)

watch(searchTerm, newTerm => findProducts(newTerm))
</script>

<template>
  <div class="w-full h-full flex flex-col gap-5 justify-center items-center">
    <h1 class="text-4xl font-bold">Gift Search Bar</h1>
    <input type="text" class="p-2 border-2 border-gray-dark" v-model="searchTerm" placeholder="Start typing..." />
    <p v-if="noResults">No results found.</p>
    <p v-if="loading">Loading...</p>
    <ul v-else class="list-disc">
      <li v-for="product in products" :key="product.id">{{ product.title }}</li>
    </ul>
  </div>
</template>
