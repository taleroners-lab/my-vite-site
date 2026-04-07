<template>
  <div class="image-rotator">
    <Transition name="fade" mode="out-in">
      <div 
        class="image-wrapper" 
        :key="currentIndex"
      >
        <img 
          :src="currentItem.image"
          :alt="currentItem.title || altText"
          class="rotator-image"
        />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

interface WorkItem {
  image: string
  title?: string
  size?: string
}

interface Props {
  images?: string[]
  works?: WorkItem[]
  interval?: number
  altText?: string
}

const props = withDefaults(defineProps<Props>(), {
  interval: 5000,
  altText: 'Artwork'
})

const items = computed<WorkItem[]>(() => {
  if (props.works) return props.works
  if (props.images) return props.images.map(img => ({ image: img }))
  return []
})

const currentIndex = ref(0)

const currentItem = computed(() => items.value[currentIndex.value] || { image: '', title: '' })

let timer: ReturnType<typeof setInterval> | null = null

function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % items.value.length
}

function startRotation() {
  if (items.value.length > 1) {
    timer = setInterval(nextImage, props.interval)
  }
}

function stopRotation() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

onMounted(() => {
  startRotation()
})

onUnmounted(() => {
  stopRotation()
})
</script>

<style scoped>
.image-rotator {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.rotator-image {
  max-width: 100%;
  max-height: 75vh;
  width: auto;
  height: auto;
  display: block;
}

@media (max-width: 768px) {
  .rotator-image {
    max-height: 60vh;
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
