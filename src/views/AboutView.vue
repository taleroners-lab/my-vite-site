<template>
  <div class="about-page">
    <div class="container">
      <div class="about-content">
        <div class="about-image">
          <img :src="siteData.aboutImage" :alt="siteData.artistName" />
        </div>

        <div class="about-text">
          <h1 class="about-title">{{ siteData.artistName }}</h1>
          
          <div class="about-section">
            <p v-for="(paragraph, index) in aboutParagraphs" :key="index">
              {{ paragraph }}
            </p>
          </div>

          <div class="statement-section">
            <h2 class="statement-title">Artist Statement</h2>
            <p class="statement-text">{{ siteData.artistStatement }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { siteData } from '@/data/site'

const aboutParagraphs = computed(() => {
  return siteData.aboutText.split('\n\n').filter(p => p.trim())
})
</script>

<style scoped>
.about-page {
  padding: 8rem 2rem 4rem;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: start;
}

.about-image {
  position: sticky;
  top: 8rem;
}

.about-image img {
  width: 100%;
  height: auto;
  display: block;
}

.about-title {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 400;
  margin: 0 0 2rem;
}

.about-section {
  margin-bottom: 3rem;
}

.about-section p {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--color-text);
  margin: 0 0 1.5rem;
}

.about-section p:last-child {
  margin-bottom: 0;
}

.statement-section {
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
}

.statement-title {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0 0 1rem;
}

.statement-text {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--color-text);
  font-style: italic;
  margin: 0;
}

@media (max-width: 900px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-image {
    position: static;
    max-width: 400px;
  }
}

@media (max-width: 768px) {
  .about-page {
    padding: 6rem 1rem 3rem;
  }
}
</style>
