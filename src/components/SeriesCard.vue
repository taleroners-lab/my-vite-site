<template>
  <router-link :to="`/series/${seriesItem.slug}`" class="series-card">
    <div class="card-image">
      <img :src="seriesItem.coverImage" :alt="seriesItem.title" loading="lazy" />
    </div>
    <div class="card-info">
      <h3 class="card-title">{{ seriesItem.title }}</h3>
      <p class="card-count">{{ seriesItem.works.length }} works</p>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import type { Series } from '@/data/series'

defineProps<{
  seriesItem: Series
}>()
</script>

<style scoped>
.series-card {
  display: block;
  text-decoration: none;
  color: inherit;
}

.card-image {
  aspect-ratio: 3 / 2;
  overflow: hidden;
  background: var(--color-background-secondary);
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.series-card:hover .card-image img {
  transform: scale(1.03);
}

.card-info {
  padding: 1rem 0 0;
}

.card-title {
  font-family: var(--font-serif);
  font-size: 1.125rem;
  font-weight: 400;
  margin: 0 0 0.25rem;
}

.card-count {
  font-size: 0.8125rem;
  color: var(--color-text-light);
  margin: 0;
}
</style>
