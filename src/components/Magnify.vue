<template>
  <div 
    class="magnify-wrapper"
    @click="toggleZoom"
  >
    <div 
      class="magnify-container" 
      ref="containerRef" 
      @mousemove="handleMove" 
      @mouseleave="handleLeave"
      @touchmove.prevent="handleTouchMove"
      @touchend="handleLeave"
    >
      <img :src="src" :alt="alt" class="magnify-image" :style="imageStyle" ref="imageRef" />
      <div v-if="isActive" class="magnify-result" :style="resultStyle"></div>
    </div>
    <div v-if="isFullscreen" class="fullscreen-zoom" @click.stop="toggleZoom">
      <img :src="src" :alt="alt" class="fullscreen-image" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

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
const mouseX = ref(0)
const mouseY = ref(0)

function toggleZoom() {
  isFullscreen.value = !isFullscreen.value
}

function updatePosition(clientX: number, clientY: number) {
  if (!containerRef.value) return
  
  const rect = containerRef.value.getBoundingClientRect()
  mouseX.value = ((clientX - rect.left) / rect.width) * 100
  mouseY.value = ((clientY - rect.top) / rect.height) * 100
  isActive.value = true
}

function handleMove(event: MouseEvent) {
  updatePosition(event.clientX, event.clientY)
}

function handleTouchMove(event: TouchEvent) {
  if (event.touches.length > 0) {
    updatePosition(event.touches[0].clientX, event.touches[0].clientY)
  }
}

function handleLeave() {
  isActive.value = false
}

const imageStyle = computed(() => ({
  cursor: 'zoom-in'
}))

const resultStyle = computed(() => ({
  backgroundImage: `url(${props.src})`,
  backgroundPosition: `${mouseX.value}% ${mouseY.value}%`,
  backgroundSize: `${props.zoom * 100}%`
}))
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
  transition: transform 0.3s ease;
}

.magnify-container:hover .magnify-image {
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
</style>