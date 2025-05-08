<script setup>
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <button class="btn" type="button">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.btn {
  background-color: $color-primary;
  color: $color-accent;
  border-radius: $border-radius;
  border: none;
  cursor: pointer;
  padding: $padding-btn;

  &:hover {
    background-color: $color-secondary;
  }

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
}
</style>
