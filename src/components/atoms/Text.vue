<script setup>

 import { computed } from 'vue'

 const props = defineProps({
  text: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'medium'
  },
  color: {
    type: String,
    default: 'black'
  },
  weight: {
    type: String,
    default: 'normal'
  }
 })


</script>

<template>

  <p :class="`text-${size} text-${color} font-${weight}`">
    {{ text }}
  </p>

</template>

<style lang="scss" scoped>

</style>
