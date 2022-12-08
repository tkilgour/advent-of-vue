<script setup lang="ts">
import ChristmasPresent from '../components/ChristmasPresent.vue'
import ChristmasTree from '../components/ChristmasTree.vue'
import { ref } from 'vue'

const presents = ref(['small-red-gift', 'blue-gift', 'tall-red-gift'])
const underTheTree = ref([])

const startDrag = (evt, index) => {
  console.log('DRAGGING!!!')
  evt.dataTransfer.dropEffect = 'move'
  evt.dataTransfer.effectAllowed = 'move'
  evt.dataTransfer.setData('index', index)
}

const onDrop = evt => {
  const index = evt.dataTransfer.getData('index')
  const item = presents.value.splice(index, 1)
  underTheTree.value.push(item[0])
}
</script>

<template>
  <div class="flex flex-col grow items-center w-full">
    <h1 class="my-4 text-xl font-bold">Drag the presents under the tree!</h1>
    <ChristmasTree :presents="underTheTree" class="grow flex items-center" @drop="onDrop($event, 1)" @dragover.prevent
      @dragenter.prevent />
    <div class="bg-gray-100 w-full min-h-[30vh] justify-center grow flex items-center">
      <div class="flex items-end justify-center" v-auto-animate>
        <ChristmasPresent v-for="(p, index) in presents" :key="p" :name="p" draggable="true"
          @dragstart="startDrag($event, index)" />
      </div>
    </div>
  </div>
</template>
