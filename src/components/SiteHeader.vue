<template>
  <header class="header">
    <div class="header-content">
      <router-link to="/" class="logo">
        {{ artistName }}
      </router-link>

      <button 
        class="menu-toggle" 
        @click="toggleMenu"
        :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
      >
        <span class="menu-toggle-line" :class="{ 'is-open': isMenuOpen }"></span>
        <span class="menu-toggle-line" :class="{ 'is-open': isMenuOpen }"></span>
      </button>

      <nav class="nav" :class="{ 'is-open': isMenuOpen }">
        <router-link 
          v-for="link in navLinks" 
          :key="link.path"
          :to="link.path"
          class="nav-link"
          @click="closeMenu"
        >
          {{ link.name }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { siteData } from '@/data/site'

const artistName = siteData.artistName
const isMenuOpen = ref(false)

const navLinks = [
  { name: 'Works', path: '/works' },
  { name: 'Series', path: '/series' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: var(--color-background);
  border-bottom: 1px solid var(--color-border);
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  color: var(--color-text);
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.logo:hover {
  opacity: 0.7;
}

.nav {
  display: flex;
  gap: 2.5rem;
}

.nav-link {
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-text);
  text-decoration: none;
  transition: opacity 0.3s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-text);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.menu-toggle-line {
  width: 24px;
  height: 1px;
  background: var(--color-text);
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.menu-toggle-line.is-open:first-child {
  transform: translateY(3.5px) rotate(45deg);
}

.menu-toggle-line.is-open:last-child {
  transform: translateY(-3.5px) rotate(-45deg);
}

@media (max-width: 768px) {
  .header-content {
    padding: 1rem 1.5rem;
  }

  .menu-toggle {
    display: flex;
  }

  .nav {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    background: var(--color-background);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }

  .nav.is-open {
    opacity: 1;
    visibility: visible;
  }

  .nav-link {
    font-size: 1rem;
  }
}
</style>
