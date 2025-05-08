<script setup>
import { ref } from 'vue'
import SearchInput from '@/components/organisms/SearchInput.vue'
import TileGroup from '@/components/organisms/TileGroup.vue'
import Button from '@/components/atoms/Button.vue'


const tiles = ref([
  {
    id: 1,
    imageSrc: 'https://via.placeholder.com/150',
    title: 'Tile 1',
    description: 'Description for Tile 1'
  },
  {
    id: 2,
    imageSrc: 'https://via.placeholder.com/150',
    title: 'Tile 2',
    description: 'Description for Tile 2'
  },
  {
    id: 3,
    imageSrc: 'https://via.placeholder.com/150',
    title: 'Tile 3',
    description: 'Description for Tile 3'
  },
  {
    id: 4,
    imageSrc: 'https://via.placeholder.com/150',
    title: 'Tile 4',
    description: 'Description for Tile 4'
  },
  {
    id: 5,
    imageSrc: 'https://via.placeholder.com/150',
    title: 'Tile 5',
    description: 'Description for Tile 5'
  },
  {
    id: 6,
    imageSrc: 'https://via.placeholder.com/150',
    title: 'Tile 6',
    description: 'Description for Tile 6'
  },
  {
    id: 7,
    imageSrc: 'https://via.placeholder.com/150',
    title: 'Tile 7',
    description: 'Description for Tile 7'
  },
  {
    id: 8,
    imageSrc: 'https://via.placeholder.com/150',
    title: 'Tile 8',
    description: 'Description for Tile 8'
  },
  {
    id: 9,
    imageSrc: 'https://via.placeholder.com/150',
    title: 'Tile 9',
    description: 'Description for Tile 9'
  },
  {
    id: 10,
    imageSrc: 'https://via.placeholder.com/150',
    title: 'Tile 10',
    description: 'Description for Tile 10'
  },
  {
    id: 11,
    imageSrc: 'https://via.placeholder.com/150',
    title: 'Tile 11',
    description: 'Description for Tile 11'
  },
  {
    id: 12,
    imageSrc: 'https://via.placeholder.com/150',
    title: 'Tile 9',
    description: 'Description for Tile 9'
  },
  {
    id: 13,
    imageSrc: 'https://via.placeholder.com/150',
    title: 'Tile 10',
    description: 'Description for Tile 10'
  },
  {
    id: 14,
    imageSrc: 'https://via.placeholder.com/150',
    title: 'Tile 11',
    description: 'Description for Tile 11'
  },
  {
    id: 15,
    imageSrc: 'https://via.placeholder.com/150',
    title: 'Tile 9',
    description: 'Description for Tile 9'
  },
  {
    id: 16,
    imageSrc: 'https://via.placeholder.com/150',
    title: 'Tile 10',
    description: 'Description for Tile 10'
  },
  {
    id: 17,
    imageSrc: 'https://via.placeholder.com/150',
    title: 'Tile 11',
    description: 'Description for Tile 11'
  },
  {
    id: 18,
    imageSrc: 'https://via.placeholder.com/150',
    title: 'Tile 11',
    description: 'Description for Tile 11'
  },
  {
    id: 19,
    imageSrc: 'https://via.placeholder.com/150',
    title: 'Tile 11',
    description: 'Description for Tile 11'
  },
  {
    id: 20,
    imageSrc: 'https://via.placeholder.com/150',
    title: 'Tile 11',
    description: 'Description for Tile 11'
  }

])

</script>

<template>
  <div class="container">
    <SearchInput />
    <TileGroup :items="tiles" :tilePerRow="4" :nb-of-rows="5" tileGap="10px" />
    <Button>Load more</Button>
  </div>
</template>

<style lang="scss" scoped>
.container {
  overflow: hidden;
  max-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-gap: $padding-small;

}
</style>
