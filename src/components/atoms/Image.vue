<script setup>
  const props = defineProps({
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },

  })
</script>

<template>
  <img :src="src" :alt="alt" :width="width" :height="height" />
</template>

<style scoped>

</style>
