<script setup>
import Image from '@/components/atoms/Image.vue'
import { useI18n } from 'vue-i18n'
import Text from '@/components/atoms/Text.vue'

import workLifeHeaderLogo from '@/assets/images/logo.svg'

const { t } = useI18n()

</script>

<template>


  <header>
    <Image :alt="t('header.logoAlt')" :src="workLifeHeaderLogo" width="100px" />
    <Text align="center">
      Front-end Technical Test
    </Text>
  </header>
</template>

<style lang="scss" scoped>
header {
  background: $color-neutral;
  height: 50px;
  display: grid;
  grid-template-columns: 120px 1fr;
  align-items: center;
  border-radius: 0 0 $border-radius;
  box-shadow: $box-shadow;
  width: 100%;
  padding: $padding-small;
}

</style>
