<template>
  <div class="w-full h-full flex justify-center items-center">
    <ChristmasTree :size="7" />
  </div>
</template>

<script setup>
import ChristmasTree from '@/components/ChristmasTreeRecursive.vue'
import ChristmasLights from '@/components/ChristmasLights.vue'
</script>