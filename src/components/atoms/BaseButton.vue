<script setup>
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <button class="btn" type="button" >
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: $padding-small;
  width: 100%;

  &:hover {
    background-color: $color-neutral;
    border: solid 1px $color-primary;
    color: $color-primary;
    cursor: pointer;
  }

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
}
</style>
