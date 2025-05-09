<script setup>

import Icon from '@/components/atoms/Icon.vue'
import BaseButton from '@/components/atoms/BaseButton.vue'
import Loader from '@/components/molecules/Loader.vue'

defineProps({
  icon: {
    type: String,
    default: '',
  },
  buttonLabel: {
    type: String,
    default: '',
  },
  loading: {
    type: Boolean,
    default: false,
  }
})
</script>

<template>
  <div class="button-group">
    <BaseButton>
      <slot />
      <Icon v-if="icon !== ''" :icon="icon" size="small"/>
      <Loader v-if="loading"  />
    </BaseButton>
  </div>
</template>

<style scoped lang="scss">
</style>
