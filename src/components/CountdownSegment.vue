<script setup>
defineProps({
  label: String,
  number: Number,
})
</script>
<template>
  <div class="segment text-center">
    <div class="pt-10 overflow-hidden relative">
      <Transition name="slide-up">
        <span :key="number" class="numbers text-green absolute top-0 left-[50%]">{{ number }}</span>
      </Transition>
    </div>

    <span class="label block pt-2">{{ label }}</span>
  </div>
</template>
<style>
.segment {
  width: 80px;
}

.numbers {
  transform: translateX(-50%);
  font-size: 32px;
}

.label {
  font-size: 16px;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 400ms ease;
}

.slide-up-enter-from {
  translate: 0 -1.5em;
}

.slide-up-leave-to {
  translate: 0 1.5em;
}
</style>