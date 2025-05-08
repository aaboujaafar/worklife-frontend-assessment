<script setup>
import Tile from '@/components/molecules/Tile.vue'

defineProps({
  items: {
    type: Array,
    required: true,
  },
  tileSize: {
    type: String,
    default: '100px',
  },
  tileGap: {
    type: String,
    default: '10px',
  },
  tilePerRow: {
    type: Number,
    default: 3,
  },
  nbOfRows: {
    type: Number,
    default: 3,
  },
})
</script>

<template>
  <div
    class="tiles-group"
    :style="{
      gridTemplateColumns: `repeat(${tilePerRow}, 1fr)`,
      gap: tileGap,
    }"
  >
    <Tile
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :imageSrc="item.imageSrc"
      :title="item.title"
      :description="item.description"
    />
  </div>
</template>

<style scoped lang="scss">
.tiles-group {
  display: grid;
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  gap: $padding-small;
  overflow-y: auto;
}
</style>
