<template>
  <div class="series-page">
    <div class="container">
      <header class="page-header">
        <h1 class="page-title">Series</h1>
        <p class="page-subtitle">Collections of related works</p>
      </header>

      <div class="series-grid">
        <SeriesCard 
          v-for="seriesItem in series" 
          :key="seriesItem.slug" 
          :seriesItem="seriesItem"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SeriesCard from '@/components/SeriesCard.vue'
import { series } from '@/data/series'
</script>

<style scoped>
.series-page {
  padding: 8rem 2rem 4rem;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: 4rem;
}

.page-title {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 400;
  margin: 0 0 1rem;
}

.page-subtitle {
  font-size: 1rem;
  color: var(--color-text-light);
  margin: 0;
}

.series-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 3rem;
}

@media (max-width: 768px) {
  .series-page {
    padding: 6rem 1rem 3rem;
  }

  .series-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
