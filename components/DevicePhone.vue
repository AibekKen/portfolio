<template>
  <div class="device-phone">
    <div class="phone-body">
      <span class="phone-button phone-button-action"></span>
      <span class="phone-button phone-button-volume-up"></span>
      <span class="phone-button phone-button-volume-down"></span>
      <span class="phone-button phone-button-power"></span>

      <div class="phone-bezel">
        <div class="phone-screen">
          <div class="phone-status">
            <span class="phone-time">9:41</span>
            <span class="phone-island"></span>
            <span class="phone-icons" aria-hidden="true">
              <svg viewBox="0 0 18 12" fill="currentColor">
                <rect x="0" y="8" width="3" height="4" rx="1" />
                <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
                <rect x="10" y="3" width="3" height="9" rx="1" />
                <rect x="15" y="0" width="3" height="12" rx="1" />
              </svg>
              <svg viewBox="0 0 16 12" fill="currentColor">
                <path d="M8 2.4c2.3 0 4.4.9 6 2.4l1.3-1.4A10.6 10.6 0 0 0 8 .5C5.2.5 2.6 1.6.7 3.4L2 4.8a8.7 8.7 0 0 1 6-2.4Zm0 3.8c1.3 0 2.5.5 3.4 1.3l1.3-1.4A6.7 6.7 0 0 0 8 4.3c-1.8 0-3.5.7-4.7 1.8l1.3 1.4C5.5 6.7 6.7 6.2 8 6.2Z" />
                <circle cx="8" cy="10" r="1.7" />
              </svg>
              <span class="phone-battery"><span></span></span>
            </span>
          </div>

          <div class="phone-content">
            <img
              v-for="(screen, index) in screens"
              :key="screen.src"
              :src="screen.src"
              :alt="index === activeIndex ? screen.alt : ''"
              :aria-hidden="index !== activeIndex"
              :class="['phone-image', index === activeIndex && 'is-active']"
              :loading="eager ? 'eager' : 'lazy'"
              decoding="async"
            />
          </div>

          <span class="phone-home-indicator"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = withDefaults(defineProps<{
  screens: { src: string; alt: string }[]
  // Milliseconds between screen changes; 0 keeps the first screen
  interval?: number
  startIndex?: number
  eager?: boolean
}>(), {
  interval: 0,
  startIndex: 0,
  eager: false,
})

const activeIndex = ref(props.startIndex % props.screens.length)
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!props.interval || props.screens.length < 2 || prefersReducedMotion) {
    return
  }

  timer = setInterval(() => {
    if (document.hidden) {
      return
    }

    activeIndex.value = (activeIndex.value + 1) % props.screens.length
  }, props.interval)
})

onBeforeUnmount(() => {
  clearInterval(timer)
})
</script>

<style scoped>
.device-phone {
  container-type: inline-size;
}

.phone-body {
  position: relative;
  padding: 1.1cqw;
  border-radius: 15.5cqw;
  background: linear-gradient(145deg, #6b7280 0%, #1f2937 22%, #111827 55%, #4b5563 100%);
  box-shadow:
    inset 0 0 0 0.35cqw rgba(255, 255, 255, 0.18),
    0 3cqw 6cqw -1cqw rgba(6, 27, 78, 0.35),
    0 14cqw 22cqw -8cqw rgba(6, 27, 78, 0.55);
}

.phone-button {
  position: absolute;
  width: 1.3cqw;
  border-radius: 1cqw;
  background: linear-gradient(90deg, #374151, #6b7280);
}

.phone-button-action,
.phone-button-volume-up,
.phone-button-volume-down {
  left: -0.9cqw;
}

.phone-button-action {
  top: 21cqw;
  height: 7cqw;
}

.phone-button-volume-up {
  top: 33cqw;
  height: 12cqw;
}

.phone-button-volume-down {
  top: 48cqw;
  height: 12cqw;
}

.phone-button-power {
  right: -0.9cqw;
  top: 38cqw;
  height: 18cqw;
  background: linear-gradient(270deg, #374151, #6b7280);
}

.phone-bezel {
  padding: 2.6cqw;
  border-radius: 14.4cqw;
  background: #050507;
}

.phone-screen {
  position: relative;
  overflow: hidden;
  border-radius: 11.8cqw;
  background: #fff;
  isolation: isolate;
}

/* Soft glass reflection across the display */
.phone-screen::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  background: linear-gradient(118deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.06) 32%, rgba(255, 255, 255, 0) 33%);
}

.phone-status {
  position: relative;
  z-index: 2;
  display: flex;
  height: 12cqw;
  align-items: center;
  justify-content: space-between;
  padding: 0 7.5cqw 0 9cqw;
  background: #fff;
  color: #0b0b0f;
}

.phone-time {
  font-size: 4.2cqw;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.phone-island {
  position: absolute;
  left: 50%;
  top: 2.4cqw;
  width: 29cqw;
  height: 8.4cqw;
  transform: translateX(-50%);
  border-radius: 999px;
  background: #050507;
}

.phone-icons {
  display: flex;
  align-items: center;
  gap: 1.3cqw;
}

.phone-icons svg {
  height: 3.2cqw;
  width: auto;
}

.phone-battery {
  position: relative;
  display: block;
  width: 6.6cqw;
  height: 3.3cqw;
  padding: 0.45cqw;
  border: 0.35cqw solid rgba(11, 11, 15, 0.45);
  border-radius: 1cqw;
}

.phone-battery span {
  display: block;
  width: 78%;
  height: 100%;
  border-radius: 0.5cqw;
  background: #0b0b0f;
}

.phone-content {
  position: relative;
  aspect-ratio: 600 / 1270;
  background: #fff;
}

.phone-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  opacity: 0;
  transform: scale(1.03);
  transition: opacity 700ms ease, transform 900ms cubic-bezier(0.2, 0.7, 0.2, 1);
}

.phone-image.is-active {
  opacity: 1;
  transform: scale(1);
}

.phone-home-indicator {
  position: absolute;
  bottom: 1.6cqw;
  left: 50%;
  z-index: 2;
  width: 34cqw;
  height: 1.3cqw;
  transform: translateX(-50%);
  border-radius: 999px;
  background: rgba(11, 11, 15, 0.75);
}

@media (prefers-reduced-motion: reduce) {
  .phone-image {
    transition: none;
  }
}
</style>
