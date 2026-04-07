<template>
  <div class="home">
    <aside class="sidebar">
      <div class="sidebar-content">
        <h1 class="artist-name">{{ siteData.artistName }}</h1>
        <nav class="sidebar-nav">
          <router-link to="/works" class="nav-link">Works</router-link>
          <router-link to="/series" class="nav-link">Series</router-link>
          <router-link to="/about" class="nav-link">About</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </nav>
      </div>
    </aside>
    
    <main class="artwork-display">
      <div class="artwork-wrapper">
        <Transition name="fade" mode="out-in">
          <router-link :key="randomWork.slug" :to="`/works/${randomWork.slug}`">
            <img 
              :src="randomWork.image" 
              :alt="randomWork.title"
              class="artwork-image"
            />
          </router-link>
        </Transition>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { siteData } from '@/data/site'
import { getWorksForGallery } from '@/data/works'
import { ref, onMounted, onUnmounted } from 'vue'

const works = getWorksForGallery()
const currentIndex = ref(0)

function getRandomIndex(): number {
  if (works.length <= 1) return 0
  let newIndex: number
  do {
    newIndex = Math.floor(Math.random() * works.length)
  } while (newIndex === currentIndex.value)
  return newIndex
}

const randomWork = ref(works[getRandomIndex()])
currentIndex.value = works.findIndex(w => w.slug === randomWork.value.slug)

let intervalId: ReturnType<typeof setInterval>

onMounted(() => {
  intervalId = setInterval(() => {
    currentIndex.value = getRandomIndex()
    randomWork.value = works[currentIndex.value]
  }, 5000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
}

.sidebar {
  width: 200px;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.sidebar-content {
  position: sticky;
  top: 3rem;
}

.artist-name {
  font-family: var(--font-serif);
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  margin: 0 0 3rem 0;
  color: var(--color-text);
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.nav-link {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-text-light);
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--color-text);
}

.artwork-display {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
}

.artwork-wrapper {
  max-width: 100%;
  max-height: calc(100vh - 6rem);
  display: flex;
  align-items: center;
  justify-content: center;
}

.artwork-image {
  max-width: 100%;
  max-height: calc(100vh - 6rem);
  width: auto;
  height: auto;
  display: block;
}

.artwork-wrapper a {
  display: block;
}

.artwork-wrapper a:hover .artwork-image {
  opacity: 0.85;
}

@media (max-width: 768px) {
  .home {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    padding: 1.5rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  .sidebar-content {
    position: static;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .artist-name {
    margin: 0;
    font-size: 0.875rem;
  }
  
  .sidebar-nav {
    flex-direction: row;
    gap: 1.5rem;
  }
  
  .nav-link {
    font-size: 0.625rem;
  }
  
  .artwork-display {
    padding: 1rem;
    min-height: calc(100vh - 80px);
  }
  
  .artwork-image {
    max-height: calc(100vh - 120px);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.8s cubic-bezier(0.4, 0, 0.2, 1), transform 1.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from {
  opacity: 0;
  transform: scale(1.02);
}

.fade-leave-to {
  opacity: 0;
  transform: scale(0.98);
}
</style>
