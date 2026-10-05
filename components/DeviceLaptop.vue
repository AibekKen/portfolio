<template>
  <div class="device-laptop">
    <div class="laptop-lid">
      <span class="laptop-camera"></span>
      <div class="laptop-screen">
        <template v-for="(screen, index) in screens" :key="screen.src">
          <img
            v-if="index === activeIndex || showAllScreens"
            :src="screen.src"
            :alt="index === activeIndex ? screen.alt : ''"
            :aria-hidden="index !== activeIndex"
            :class="['laptop-image', index === activeIndex && 'is-active']"
            :loading="eager ? 'eager' : 'lazy'"
            decoding="async"
          />
        </template>
      </div>
    </div>
    <div class="laptop-base">
      <span class="laptop-notch"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = withDefaults(defineProps<{
  screens: { src: string; alt: string }[]
  interval?: number
  eager?: boolean
}>(), {
  interval: 0,
  eager: false,
})

const activeIndex = ref(0)
// Other screens are mounted only after the page has loaded, so they don't compete with the first paint
const showAllScreens = ref(false)
let timer: ReturnType<typeof setInterval> | undefined
let isUnmounted = false

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!props.interval || props.screens.length < 2 || prefersReducedMotion) {
    return
  }

  afterPageLoad(() => {
    if (isUnmounted) {
      return
    }

    showAllScreens.value = true

    timer = setInterval(() => {
      if (document.hidden) {
        return
      }

      activeIndex.value = (activeIndex.value + 1) % props.screens.length
    }, props.interval)
  })
})

onBeforeUnmount(() => {
  isUnmounted = true
  clearInterval(timer)
})
</script>

<style scoped>
.device-laptop {
  container-type: inline-size;
}

.laptop-lid {
  position: relative;
  margin: 0 7cqw;
  padding: 2.2cqw 1.6cqw 2.6cqw;
  border-radius: 2.6cqw 2.6cqw 0.8cqw 0.8cqw;
  background: #0b0b0f;
  box-shadow:
    0 0 0 0.3cqw #3f444c,
    0 4cqw 10cqw -3cqw rgba(6, 27, 78, 0.45);
}

.laptop-camera {
  position: absolute;
  left: 50%;
  top: 0.75cqw;
  width: 0.8cqw;
  height: 0.8cqw;
  transform: translateX(-50%);
  border-radius: 999px;
  background: #1f2937;
  box-shadow: inset 0 0 0 0.15cqw #374151;
}

.laptop-screen {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 9.4;
  border-radius: 0.6cqw;
  background: #fff;
  isolation: isolate;
}

.laptop-screen::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background: linear-gradient(120deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.04) 38%, rgba(255, 255, 255, 0) 39%);
}

.laptop-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top left;
  opacity: 0;
  transition: opacity 800ms ease;
}

.laptop-image.is-active {
  opacity: 1;
}

.laptop-base {
  position: relative;
  height: 2.6cqw;
  border-radius: 0.4cqw 0.4cqw 3cqw 3cqw;
  background: linear-gradient(180deg, #e5e7eb 0%, #c4c9d1 45%, #8b929c 100%);
  box-shadow: 0 2.4cqw 4cqw -1.6cqw rgba(6, 27, 78, 0.5);
}

.laptop-notch {
  position: absolute;
  left: 50%;
  top: 0;
  width: 15cqw;
  height: 0.9cqw;
  transform: translateX(-50%);
  border-radius: 0 0 1cqw 1cqw;
  background: linear-gradient(180deg, #9aa1ab, #b8bec7);
}

@media (prefers-reduced-motion: reduce) {
  .laptop-image {
    transition: none;
  }
}
</style>
