<script setup>
const modelValue = defineModel()
defineProps({
  id: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <input
    :id="id"
    :type="type"
    v-model="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :required="required"
  />
</template>

<style lang="scss" scoped>
input {
  width: 100%;
  padding: $padding-small;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  color: $color-primary;

  &:focus {
    border-color: $color-primary;
    outline-color: $color-primary;
  }

  &:disabled {
    background-color: #e9ecef;
    cursor: not-allowed;
  }
}
</style>
