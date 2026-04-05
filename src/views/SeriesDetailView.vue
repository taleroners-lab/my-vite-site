<template>
  <div class="series-detail" v-if="seriesItem">
    <div class="container">
      <header class="series-header">
        <h1 class="series-title">{{ seriesItem.title }}</h1>
        <p class="series-description" v-if="seriesItem.description">
          {{ seriesItem.description }}
        </p>
      </header>

        <div class="series-images">
          <div 
            v-for="(work, index) in seriesItem.works" 
            :key="index"
            class="series-image"
          >
            <template v-if="getWork(work.slug)">
              <router-link :to="`/works/${work.slug}`">
                <Magnify :src="getWork(work.slug)?.image || ''" :alt="getWork(work.slug)?.title || ''" :zoom="2" />
              </router-link>
              <div class="work-info">
                <h3 class="work-title">{{ getWork(work.slug)?.title }}</h3>
                <p class="work-meta">{{ getWork(work.slug)?.year }} &bull; {{ getWork(work.slug)?.size }}</p>
              </div>
            </template>
          </div>
        </div>

      <router-link to="/series" class="back-link">
        &larr; Back to Series
      </router-link>
    </div>
  </div>

  <div class="not-found" v-else>
    <div class="container">
      <h1>Series not found</h1>
      <router-link to="/series" class="back-link">
        &larr; Back to Series
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getSeriesBySlug } from '@/data/series'
import { getWorkBySlug } from '@/data/works'
import Magnify from '@/components/Magnify.vue'

const route = useRoute()
const seriesItem = computed(() => getSeriesBySlug(route.params.slug as string))

function getWork(slug: string) {
  return getWorkBySlug(slug)
}
</script>

<style scoped>
.series-detail {
  padding: 8rem 2rem 4rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.series-header {
  margin-bottom: 4rem;
}

.series-title {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 400;
  margin: 0 0 1.5rem;
}

.series-description {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--color-text);
  max-width: 700px;
  margin: 0;
}

.series-images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.series-image {
  overflow: hidden;
  background: var(--color-background-secondary);
}

.series-image a {
  display: block;
}

.series-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.6s ease;
}

.work-info {
  padding: 1.25rem;
  border-top: 1px solid var(--color-border);
}

.work-title {
  font-family: var(--font-serif);
  font-size: 1.125rem;
  font-weight: 400;
  margin: 0 0 0.5rem;
}

.work-meta {
  font-size: 0.875rem;
  color: var(--color-text-light);
  margin: 0 0 0.75rem;
}

.work-desc {
  font-size: 0.9375rem;
  line-height: 1.7;
  color: var(--color-text);
  margin: 0;
}

.series-image:hover img {
  transform: scale(1.02);
}

.back-link {
  display: inline-block;
  font-size: 0.875rem;
  color: var(--color-text-light);
  text-decoration: none;
  transition: color 0.3s ease;
}

.back-link:hover {
  color: var(--color-text);
}

.not-found {
  padding: 8rem 2rem 4rem;
  text-align: center;
}

.not-found h1 {
  font-family: var(--font-serif);
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .series-detail {
    padding: 6rem 1rem 3rem;
  }

  .series-images {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
