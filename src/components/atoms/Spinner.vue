<script setup>

  defineProps({
    color: {
      type: String,
      default: 'primary',
    },
  })
</script>

<template>

  <div class="spinner" :class="`spinner-${color}`"></div>

</template>

<style scoped lang="scss">

.spinner {
  width: 60px;
  height: 60px;
  border: 5px solid rgba($color-primary, 0.1);
  border-radius: 50%;
  border-top-color: $color-primary;
  animation: spin 1s ease-in-out infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.spinner{
  &-primary {
    border-top-color: $color-primary;
  }

  &-secondary {
    border-top-color: $color-secondary;
  }

  &-tertiary {
    border-top-color: $color-accent;
  }
}

</style>
