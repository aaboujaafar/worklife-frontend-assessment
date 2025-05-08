<script setup>
import TextField from '@/components/molecules/TextField.vue'
import Button from '@/components/atoms/Button.vue'
import { ref } from 'vue'

const searchInputValue = ref('')
</script>

<template>
  <div class="search-input">
    <TextField placeholder="Search" id="search-field" v-model="searchInputValue" />
    <Button>Search</Button>
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
