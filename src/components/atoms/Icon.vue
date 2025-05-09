<script setup>
import { computed } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: 'medium',
  },
  color: {
    type: String,
    default: 'black',
  },
})
const classes = computed(() => {
  return {
    [`icon-${props.size}`]: true,
    [`icon-${props.color}`]: props.color !== '',
    [`pi-${props.icon}`]: props.icon !== '',
  }
})
</script>

<template>
  <i class="pi" :class="classes"></i>
</template>

<style lang="scss" scoped>
.icon {
  &-small {
    font-size: $font-small;
  }

  &-medium {
    font-size: $font-medium;
  }

  &-large {
    font-size: $font-large;
  }

  &-primary {
    color: $color-primary;
  }

  &-secondary {
    color: $color-secondary;
  }

  &-tertiary {
    color: $color-accent;
  }
}
</style>
