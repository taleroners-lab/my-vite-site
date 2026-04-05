<template>
  <div class="layout">
    <SiteHeader v-if="!isHomePage" />
    <main class="main-content" :class="{ 'home-page': isHomePage }">
      <slot />
    </main>
    <footer v-if="!isHomePage" class="footer">
      <p>&copy; {{ currentYear }} {{ artistName }}</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SiteHeader from '@/components/SiteHeader.vue'
import { siteData } from '@/data/site'

const route = useRoute()
const artistName = siteData.artistName
const currentYear = computed(() => new Date().getFullYear())
const isHomePage = computed(() => route.path === '/')
</script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}

.main-content.home-page {
  padding: 0;
}

.footer {
  padding: 2rem;
  text-align: center;
  font-size: 0.875rem;
  color: var(--color-text-light);
  border-top: 1px solid var(--color-border);
}
</style>
