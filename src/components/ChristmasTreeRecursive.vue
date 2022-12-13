<template>
  <div>
    <ChristmasTree v-if="size > 1" :size="size - 1">
      <template #lights>
        <slot name="lights"></slot>
      </template>
    </ChristmasTree>

    <div class="flex flex-row justify-center">
      <!-- Create the tree sections -->
      <div v-for="i in size" class="relative rounded-full bg-green w-16 h-16 -m-2 flex justify-center items-center">
        <slot name="lights"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChristmasTree from './ChristmasTreeRecursive.vue'

withDefaults(
  defineProps<{
    size: number
  }>(),
  {
    size: 1,
  }
)
</script>