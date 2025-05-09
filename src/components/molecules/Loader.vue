<script setup>

import Spinner from '@/components/atoms/Spinner.vue'
import Text from '@/components/atoms/Text.vue'

defineProps({
  label: {
    type: String,
    default: 'Loading...',
  },
  color: {
    type: String,
    default: 'primary',
  }
})

</script>

<template>
  <div class="loader">
    <Spinner :color="color" />
    <Text>
      {{ label }}
    </Text>
  </div>

</template>

<style scoped lang="scss">

.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: $padding-small;
  width: 100%;
  height: 100%;
}

</style>
