<template>
  <router-link :to="`/works/${work.slug}`" class="work-card">
    <div class="card-image">
      <img :src="work.image" :alt="work.title" loading="lazy" />
    </div>
    <div class="card-info">
      <h3 class="card-title">{{ work.title }}</h3>
      <p class="card-meta">{{ work.year }}</p>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import type { Work } from '@/data/works'

defineProps<{
  work: Work
}>()
</script>

<style scoped>
.work-card {
  display: block;
  text-decoration: none;
  color: inherit;
}

.card-image {
  overflow: hidden;
  background: var(--color-background-secondary);
}

.card-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.6s ease;
}

.work-card:hover .card-image img {
  transform: scale(1.03);
}

.card-info {
  padding: 1rem 0 0;
}

.card-title {
  font-family: var(--font-serif);
  font-size: 1rem;
  font-weight: 400;
  margin: 0 0 0.25rem;
}

.card-meta {
  font-size: 0.8125rem;
  color: var(--color-text-light);
  margin: 0;
}
</style>
