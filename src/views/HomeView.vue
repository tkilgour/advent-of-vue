<template>
  <div class="w-full flex flex-col gap-4 justify-center items-center p-10">
    <h1 class="text-2xl text-white bg-green px-8 py-4">My Collection of <em>Advent of
        Vue</em>
      Attempts
    </h1>

    <div class="grid grid-cols-7 place-items-center gap-2">
      <CalendarDay v-for="n in 24" :key="n" :class="{ 'col-start-5': n === 1 }" :date="n" :isLink="routeExists(n)" />
    </div>
  </div>
</template>

<script setup>
import CalendarDay from '../components/CalendarDay.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const routeExists = (date) => {
  return router.getRoutes().some(route => route.path === `/day-${date}`)
}
</script>