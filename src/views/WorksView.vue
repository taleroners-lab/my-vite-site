<template>
  <div class="works-page">
    <div class="container">
      <header class="page-header">
        <h1 class="page-title">Works</h1>
        <p class="page-subtitle">Selected paintings and artworks</p>
      </header>

      <div class="works-grid">
        <WorkCard 
          v-for="work in works" 
          :key="work.slug" 
          :work="work"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WorkCard from '@/components/WorkCard.vue'
import { getWorksForGallery } from '@/data/works'

const works = getWorksForGallery()
</script>

<style scoped>
.works-page {
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

.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .works-page {
    padding: 6rem 1rem 3rem;
  }

  .works-grid {
    gap: 1.5rem;
  }
}
</style>
