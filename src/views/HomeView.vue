<script setup>
import { onMounted, ref } from 'vue'
import SearchInput from '@/components/organisms/SearchInput.vue'
import TileGroup from '@/components/organisms/TileGroup.vue'
import { getNCollections } from '@/services/collections.js'
import Loader from '@/components/molecules/Loader.vue'
import Button from '@/components/molecules/Button.vue'
import { useI18n } from 'vue-i18n'
import { searchWithQuery } from '@/services/search.js'
import Text from '@/components/atoms/Text.vue'

const tiles = ref([])
const resultPage = ref(1)
const loading = ref(true)
const searchTerm = ref("")

const { t } = useI18n()

onMounted(() => {
  loadTiles()
    .then(() => {
      loading.value = false
    })
    .catch(() => {
      loading.value = false
    })
})

const loadTiles = async () => {
  try {
    let data
    if(searchTerm.value !== "") {
      data = await searchWithQuery(searchTerm.value, resultPage.value)
    }else{
      data = await getNCollections(20, resultPage.value)
    }

    const collectionsTiles = data.artObjects.map((artObject) => ({
      id: artObject.id,
      title: artObject.longTitle,
      imageUrl: artObject.webImage.url,
    }))
    console.log('collectionsTiles', data)
    tiles.value.push(...collectionsTiles)
    resultPage.value += 1
  } catch (error) {
    console.error('Error fetching more collections:', error)
  }
}

const handleSearchClick = async (searchQuery) => {

  try {
    searchTerm.value = searchQuery
    loading.value = true
    resultPage.value = 1
    tiles.value = []
    const data = await searchWithQuery(searchTerm.value, resultPage.value)
    tiles.value = data.artObjects.map((artObject) => ({
      id: artObject.id,
      title: artObject.longTitle,
      imageUrl: artObject.webImage.url,
    }))
  } catch (error) {
    console.error('Error handling search click:', error)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="container">
    <SearchInput @searchedItems="handleSearchClick($event)" />
    <Loader v-if="loading" :label="t('home.loadingTiles')" />
    <Text v-else-if="tiles.length === 0" align="center" class="w-full text-center">
      {{ t('home.noTiles') }}
    </Text>
    <TileGroup :items="tiles" :tilePerRow="5" tileGap="10px" />
    <Button class="w-full" @click="loadTiles" icon="plus">{{ t("home.loadMore") }}</Button>
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
.w-full {
  width: 100%;
}
</style>
