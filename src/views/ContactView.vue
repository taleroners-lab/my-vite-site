<template>
  <div class="contact-page">
    <div class="container">
      <header class="page-header">
        <h1 class="page-title">Contact</h1>
      </header>

      <div class="contact-content">
        <p class="contact-intro">
          For inquiries about works, exhibitions, or commissions, please reach out:
        </p>

        <div class="contact-links">
          <a :href="`mailto:${siteData.email}`" class="contact-link">
            <span class="link-label">Email</span>
            <span class="link-value">{{ siteData.email }}</span>
          </a>

          <a :href="siteData.instagram" target="_blank" rel="noopener noreferrer" class="contact-link">
            <span class="link-label">Instagram</span>
            <span class="link-value">@elis_paint_</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { siteData } from '@/data/site'
</script>

<style scoped>
.contact-page {
  padding: 8rem 2rem 4rem;
}

.container {
  max-width: 600px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: 3rem;
}

.page-title {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 400;
  margin: 0;
}

.contact-content {
  text-align: center;
}

.contact-intro {
  font-size: 1.125rem;
  color: var(--color-text);
  margin: 0 0 3rem;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-link {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  padding: 1.5rem;
  border: 1px solid var(--color-border);
  transition: border-color 0.3s ease;
}

.contact-link:hover {
  border-color: var(--color-text);
}

.link-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-light);
}

.link-value {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  color: var(--color-text);
}

@media (max-width: 768px) {
  .contact-page {
    padding: 6rem 1rem 3rem;
  }
}
</style>
