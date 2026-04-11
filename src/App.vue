<template>
  <DefaultLayout>
    <router-view />
  </DefaultLayout>
  <SpeedInsights />
  <Analytics />
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { SpeedInsights } from '@vercel/speed-insights/vue'
import { Analytics } from '@vercel/analytics/vue'
</script>
