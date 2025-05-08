<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <main>
      <h1>{{t("welcome")}}</h1>
  </main>
</template>
