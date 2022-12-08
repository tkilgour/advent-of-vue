<template>
  <div class="h-full flex flex-col justify-between">
    <header class="flex flex-col gap-4 md:flex-row items-center justify-between bg-green text-white px-6 sm:px-12 py-4">
      <router-link to="/">
        <h1 class="text-xl sm:text-3xl">Thomas Kilgour ~ Advent of Vue &rsquo;22</h1>
      </router-link>
      <div v-if="(currentRouteIndex >= 0)" class="flex items-center gap-8">
        <router-link v-if="prevDayPath" :to="prevDayPath" class="hover:border-b focus:border-b outline-none"
          aria-label="previous">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </router-link>
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="w-6 h-6 opacity-25">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        <span class="text-2xl">Day {{ currentDay }}</span>
        <router-link v-if="nextDayPath" :to="nextDayPath" class="hover:border-b focus:border-b outline-none"
          aria-label="next">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </router-link>
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="w-6 h-6 opacity-25">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </header>
    <RouterView />
    <footer class="bottom-0 w-full bg-green text-gray-dark p-3 text-center">
      Made for
      <a href="https://adventofvue.com" target="_blank" rel="noreferrer noopener"
        class="underline hover:bg-gray-dark hover:text-green">
        Advent Of Vue 2022
      </a>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { RouterView, useRouter } from 'vue-router';

const router = useRouter()

const currentDay = computed(() => {
  return router.currentRoute.value.path.split('-')[1]
})

const dayRoutes = router.getRoutes().filter(route => route.path.includes('/day-'))
const currentRouteIndex = computed(() => dayRoutes.findIndex(route => route.path == router.currentRoute.value.path))

const prevDayPath = computed(() => {
  if (currentRouteIndex.value > 0) {
    return dayRoutes[currentRouteIndex.value - 1].path
  }
})
const nextDayPath = computed(() => {
  if (dayRoutes.length > currentRouteIndex.value + 1) {
    return dayRoutes[currentRouteIndex.value + 1].path
  }
})
</script>