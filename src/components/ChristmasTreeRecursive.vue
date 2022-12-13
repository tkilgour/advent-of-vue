<template>
  <div>
    <ChristmasTree v-if="size > 1" :size="size - 1">
      <template #lights>
        <slot name="lights"></slot>
        <slot v-if="!($slots.even || $slots.odd)" name="ornaments"></slot>
      </template>
      <template #even>
        <slot name="even"></slot>
      </template>
      <template #odd>
        <slot name="odd"></slot>
      </template>
    </ChristmasTree>

    <div class="flex flex-row justify-center">
      <!-- Create the tree sections -->
      <div v-for="i in size" class="relative rounded-full bg-green w-16 h-16 -m-2 flex justify-center items-center">
        <slot name="lights"></slot>
        <slot v-if="!($slots.even || $slots.odd)" name="ornaments"></slot>
        <slot v-if="(i % 2)" name="even"></slot>
        <slot v-else name="odd"></slot>
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