<script setup>
import Image from '@/components/atoms/Image.vue'
import Text from '@/components/atoms/Text.vue'

defineProps({
  id: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    default: 'https://placehold.co/100',
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="tile">
    <Image class="hover-target" :src="imageSrc" alt="Tile Image" />
    <div class="tile-info">
      <Text color="secondary" size="small" :max-lines="2">
        {{ title }}
      </Text>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tile {
  position: relative;
  aspect-ratio: 1;

  .tile-info {
    position: absolute;
    bottom: 0; // ajuster selon besoin
    width: 100%;
    height: 50%;
    left: 0;
    display: none;
    background-color: rgba($color-primary, 0.8);
    border: 1px solid gray;
    padding: $padding-small;
    z-index: 10;
  }

  .tile-info:hover,
  .hover-target:hover + .tile-info {
    display: block;
  }
}
</style>
