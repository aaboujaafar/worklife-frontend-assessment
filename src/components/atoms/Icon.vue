<script setup>
defineProps({
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
</script>

<template>
  <i class="pi" :class="`pi-${icon} icon-${size} icon-${color}`"></i>
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
