<template>
  <div class="magnify-wrapper">
    <div 
      class="magnify-container" 
      ref="containerRef" 
      @mousemove="handleMove" 
      @mouseleave="handleLeave"
      @dblclick="openFullscreen"
      @touchend="handleTouch"
    >
      <img :src="src" :alt="alt" class="magnify-image" :class="{ 'is-hidden': isActive && !isMobile }" ref="imageRef" />
      <div v-if="isActive && !isMobile" class="magnify-result" :style="resultStyle"></div>
    </div>
    <div v-if="isFullscreen" class="fullscreen-zoom" @click="closeFullscreen">
      <img :src="src" :alt="alt" class="fullscreen-image" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{
  src: string
  alt?: string
  zoom?: number
}>(), {
  alt: '',
  zoom: 2
})

const containerRef = ref<HTMLElement | null>(null)
const imageRef = ref<HTMLImageElement | null>(null)
const isActive = ref(false)
const isFullscreen = ref(false)
const isMobile = ref(false)
const mouseX = ref(0)
const mouseY = ref(0)
let lastTapTime = 0

function closeFullscreen() {
  isFullscreen.value = false
}

function openFullscreen() {
  isFullscreen.value = true
}

function updatePosition(clientX: number, clientY: number) {
  if (!containerRef.value) return
  
  const rect = containerRef.value.getBoundingClientRect()
  mouseX.value = ((clientX - rect.left) / rect.width) * 100
  mouseY.value = ((clientY - rect.top) / rect.height) * 100
  isActive.value = true
}

function handleMove(event: MouseEvent) {
  if (isMobile.value) return
  updatePosition(event.clientX, event.clientY)
}

function handleLeave() {
  if (!isMobile.value) {
    isActive.value = false
  }
}

function handleTouch(event: TouchEvent) {
  const currentTime = Date.now()
  const timeDiff = currentTime - lastTapTime
  
  // Detect double tap (within 300ms)
  if (timeDiff < 300 && timeDiff > 0) {
    openFullscreen()
    event.preventDefault()
  }
  lastTapTime = currentTime
}

function checkIsMobile() {
  isMobile.value = window.matchMedia('(hover: none) and (pointer: coarse)').matches
}

const resultStyle = computed(() => ({
  backgroundImage: `url(${props.src})`,
  backgroundPosition: `${mouseX.value}% ${mouseY.value}%`,
  backgroundSize: `${props.zoom * 100}%`
}))

onMounted(() => {
  checkIsMobile()
  window.addEventListener('resize', checkIsMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkIsMobile)
})
</script>

<style scoped>
.magnify-wrapper {
  position: relative;
}

.magnify-container {
  position: relative;
  overflow: hidden;
  cursor: zoom-in;
}

.magnify-image {
  width: 100%;
  height: auto;
  display: block;
  transition: opacity 0.2s ease;
}

.magnify-image.is-hidden {
  opacity: 0;
}

.magnify-result {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  pointer-events: none;
}

.fullscreen-zoom {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: zoom-out;
  padding: 2rem;
  box-sizing: border-box;
}

.fullscreen-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* Mobile: hide magnify result, use double-tap for fullscreen */
@media (hover: none) and (pointer: coarse) {
  .magnify-container {
    cursor: pointer;
  }
  
  .magnify-result {
    display: none;
  }
}
</style>
