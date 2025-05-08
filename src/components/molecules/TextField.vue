<script setup>
import Text from '@/components/atoms/Text.vue'
import Input from '@/components/atoms/Input.vue'
import Icon from '@/components/atoms/Icon.vue'

const modelValue = defineModel()
defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: '',
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
  helpText: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="input-wrapper">
    <label v-if="label" :for="id" class="input-label">{{ label }}</label>
    <div class="input-container">
      <Input v-model="modelValue" :id="id" :placeholder="placeholder" />
      <Icon v-if="icon" :icon="icon" />
    </div>
    <Text v-if="helpText" class="help-text">{{ helpText }}</Text>
  </div>
</template>

<style lang="scss" scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-label {
  font-size: 1rem;
  color: #333;
}
</style>
