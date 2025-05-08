<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '100%',
  },
  height: {
    type: String,
    default: '100%',
  },
})
</script>

<template>
  <div class="image" :style="{ backgroundImage: `url(${src})` }"></div>
</template>

<style lang="scss" scoped>
.image {
  background-size: contain;
  background-position: center;
  width: v-bind(width);
  height: v-bind(height);
  background-image: v-bind(src);
  background-repeat: no-repeat;
}
</style>
