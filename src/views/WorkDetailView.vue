<template>
  <div class="work-detail" v-if="work">
    <div class="container">
      <div class="work-content">
        <div class="work-image">
          <Magnify :src="work.image" :alt="work.title" :zoom="2" />
        </div>
        
        <div class="work-info">
          <h1 class="work-title">{{ work.title }}</h1>
          
          <div class="work-meta">
            <div class="meta-item">
              <span class="meta-label">Year</span>
              <span class="meta-value">{{ work.year }}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Size</span>
              <span class="meta-value">{{ work.size }}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Medium</span>
              <span class="meta-value">{{ work.medium }}</span>
            </div>
            <div class="meta-item" v-if="work.status">
              <span class="meta-label">Status</span>
              <span class="meta-value" :class="work.status">
                {{ work.status === 'available' ? 'Available' : 'Sold' }}
              </span>
            </div>
          </div>

          <p class="work-description" v-if="work.description">
            {{ work.description }}
          </p>

          <router-link to="/works" class="back-link">
            &larr; Back to Works
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <div class="not-found" v-else>
    <div class="container">
      <h1>Work not found</h1>
      <router-link to="/works" class="back-link">
        &larr; Back to Works
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getWorkBySlug } from '@/data/works'
import Magnify from '@/components/Magnify.vue'

const route = useRoute()
const work = computed(() => getWorkBySlug(route.params.slug as string))
</script>

<style scoped>
.work-detail {
  padding: 8rem 2rem 4rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.work-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.work-image {
  position: sticky;
  top: 8rem;
}

.work-image img {
  width: 100%;
  height: auto;
  display: block;
}

.work-info {
  padding-top: 1rem;
}

.work-title {
  font-family: var(--font-serif);
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 400;
  margin: 0 0 2rem;
}

.work-meta {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--color-border);
}

.meta-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.meta-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-light);
}

.meta-value {
  font-size: 1rem;
  color: var(--color-text);
}

.meta-value.available {
  color: var(--color-accent);
}

.meta-value.sold {
  color: var(--color-text-light);
  text-decoration: none;
}

.work-description {
  font-size: 1.25rem;
  line-height: 1.9;
  color: var(--color-text);
  margin: 0 0 3rem;
}

.back-link {
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

@media (max-width: 900px) {
  .work-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .work-image {
    position: static;
  }

  .work-meta {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .work-detail {
    padding: 6rem 1rem 3rem;
  }
}
</style>
