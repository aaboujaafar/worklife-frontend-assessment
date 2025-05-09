<script setup>
import TextField from '@/components/molecules/TextField.vue'
import Button from '@/components/molecules/Button.vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const {t} = useI18n()
const searchInputValue = ref('')

const emits = defineEmits(['searchedItems'])

const handleSearch = () => {
  if (searchInputValue.value.trim() !== '') {
    emits('searchedItems', searchInputValue.value)
  }
}
</script>

<template>
  <div class="search-input">
    <TextField :placeholder="t('search.placeholder')" id="search-field" v-model="searchInputValue" />
    <Button @click="handleSearch" icon="search">{{t("search.button.label")}}</Button>
  </div>
</template>

<style lang="scss" scoped>
.search-input {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: $padding-small;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
