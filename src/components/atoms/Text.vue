<script setup>
defineProps({
  size: {
    type: String,
    default: 'medium',
  },
  color: {
    type: String,
    default: 'black',
  },
  weight: {
    type: String,
    default: 'normal',
  },
  align: {
    type: String,
    default: 'left',
  },
  maxLines: {
    type: Number,
  },
})
</script>

<template>
  <p :class="`text-${size} text-${color} font-${weight} align-${align} max-lines`">
    <slot />
  </p>
</template>

<style lang="scss" scoped>
.text {
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

  &-bold {
    font-weight: bold;
  }

  &-normal {
    font-weight: normal;
  }
}

.align {
  &-left {
    text-align: left;
  }

  &-center {
    text-align: center;
  }

  &-right {
    text-align: right;
  }
}

.max-lines {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: v-bind(maxLines);
}
</style>
