<template>
  <div class="w-full flex justify-center items-center p-10">
    <div>
      <div class="shadow-md relative bg-white p-5 rounded-lg border-gray-100 border-[1px]">
        <CountdownHeader />
        <main class="flex justify-center">
          <CountdownSegment label="days" :number="Math.floor(deltaInSecs / (60 * 60 * 24))" />
          <CountdownSegment label="hours" :number="Math.floor((deltaInSecs % (60 * 60 * 24)) / (60 * 60))" />
          <CountdownSegment label="minutes" :number="Math.floor((deltaInSecs % (60 * 60)) / 60)" />
          <CountdownSegment label="seconds" :number="Math.floor((deltaInSecs % (60)))" />
        </main>
      </div>
      <h4 class="mt-10 text-gray-400 text-center text-sm">
        This challenge brought to you by <a href="https://vueschool.io/" class="underline">Vue School</a>
      </h4>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import CountdownHeader from '@/components/CountdownHeader.vue'
import CountdownSegment from '@/components/CountdownSegment.vue'
import { useNow } from '@vueuse/core'
const now = useNow()
const christmas = new Date('12/25/2022 00:00:00')

const deltaInSecs = computed(() => {
  return Math.round((christmas.getTime() - now.value.getTime()) / (1000))
})

</script>


<style>
div {
  display: block;
}

body {
  @apply bg-gray-100;
}
</style>