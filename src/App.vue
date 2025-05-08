<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/organisms/Header.vue'
</script>

<template>
  <Header />
  <main>
    <div class="container">
      <RouterView />
    </div>
  </main>
</template>
<style lang="scss" scoped>
main {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: $padding-small;
  width: 100%;
  overflow: hidden;
}

.container {
  width: 100%;
  max-width: 768px;
  max-height: 100%;
}
</style>
