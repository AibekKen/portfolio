<template>
  <div
    ref="root"
    :class="['app-showcase', `app-showcase-${variant}`]"
    @pointermove="handlePointerMove"
    @pointerleave="resetPointer"
  >
    <div class="showcase-glow" aria-hidden="true"></div>

    <div class="showcase-layer layer-laptop">
      <div class="showcase-float float-slow">
        <DeviceLaptop :screens="laptopScreens" :interval="4200" eager />
      </div>
    </div>

    <div v-if="secondaryPhoneScreens?.length" class="showcase-layer layer-phone-secondary">
      <div class="showcase-float float-delayed">
        <DevicePhone :screens="secondaryPhoneScreens" :interval="3600" :start-index="1" eager />
      </div>
    </div>

    <div class="showcase-layer layer-phone">
      <div class="showcase-float">
        <DevicePhone :screens="phoneScreens" :interval="3000" eager />
      </div>
    </div>

    <div v-if="notifications.length" class="showcase-toast-slot" aria-hidden="true">
      <Transition name="toast" mode="out-in">
        <div :key="activeNotification" class="showcase-toast">
          <span :class="['toast-icon', `toast-icon-${currentNotification.tone}`]">
            <svg v-if="currentNotification.tone === 'green'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="m5 12 5 5L20 7" />
            </svg>
            <svg v-else-if="currentNotification.tone === 'amber'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z" />
              <circle cx="12" cy="9.5" r="2.5" />
            </svg>
            <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.9 1.9 0 0 0 3.4 0" />
            </svg>
          </span>
          <span class="min-w-0">
            <span class="toast-title">{{ currentNotification.title }}</span>
            <span class="toast-text">{{ currentNotification.text }}</span>
          </span>
          <span class="toast-time">{{ nowLabel }}</span>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

type Screen = { src: string; alt: string }

export type ShowcaseNotification = {
  title: string
  text: string
  tone: 'blue' | 'green' | 'amber'
}

const props = withDefaults(defineProps<{
  variant?: 'mobile' | 'web'
  phoneScreens: Screen[]
  secondaryPhoneScreens?: Screen[]
  laptopScreens: Screen[]
  notifications?: ShowcaseNotification[]
  nowLabel?: string
}>(), {
  variant: 'mobile',
  secondaryPhoneScreens: undefined,
  notifications: () => [],
  nowLabel: 'now',
})

const root = ref<HTMLElement | null>(null)
const activeNotification = ref(0)
const currentNotification = computed(() => props.notifications[activeNotification.value % props.notifications.length])

let notificationTimer: ReturnType<typeof setInterval> | undefined
let allowParallax = false
let pointerFrame = 0

const setPointer = (x: number, y: number) => {
  root.value?.style.setProperty('--px', x.toFixed(3))
  root.value?.style.setProperty('--py', y.toFixed(3))
}

const handlePointerMove = (event: PointerEvent) => {
  if (!allowParallax || !root.value || pointerFrame) {
    return
  }

  pointerFrame = requestAnimationFrame(() => {
    pointerFrame = 0

    if (!root.value) {
      return
    }

    const bounds = root.value.getBoundingClientRect()
    setPointer(
      ((event.clientX - bounds.left) / bounds.width - 0.5) * 2,
      ((event.clientY - bounds.top) / bounds.height - 0.5) * 2,
    )
  })
}

const resetPointer = () => {
  setPointer(0, 0)
}

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  allowParallax = !prefersReducedMotion && window.matchMedia('(pointer: fine)').matches

  if (prefersReducedMotion || props.notifications.length < 2) {
    return
  }

  notificationTimer = setInterval(() => {
    if (document.hidden) {
      return
    }

    activeNotification.value = (activeNotification.value + 1) % props.notifications.length
  }, 3200)
})

onBeforeUnmount(() => {
  clearInterval(notificationTimer)
  cancelAnimationFrame(pointerFrame)
})
</script>

<style scoped>
.app-showcase {
  --px: 0;
  --py: 0;
  position: relative;
  width: 100%;
}

.app-showcase-mobile {
  aspect-ratio: 10 / 8.6;
}

.app-showcase-web {
  aspect-ratio: 10 / 7.6;
}

.showcase-glow {
  position: absolute;
  inset: 8% 6%;
  border-radius: 999px;
  background:
    radial-gradient(closest-side at 35% 55%, rgba(11, 99, 246, 0.32), transparent),
    radial-gradient(closest-side at 72% 35%, rgba(56, 189, 248, 0.26), transparent);
  filter: blur(28px);
  animation: glow-pulse 7s ease-in-out infinite;
}

.showcase-layer {
  position: absolute;
  transition: transform 400ms cubic-bezier(0.2, 0.7, 0.2, 1);
}

.layer-laptop {
  transform: translate3d(calc(var(--px) * -8px), calc(var(--py) * -6px), 0);
}

.layer-phone-secondary {
  transform: translate3d(calc(var(--px) * 10px), calc(var(--py) * 8px), 0);
}

.layer-phone {
  transform: translate3d(calc(var(--px) * 18px), calc(var(--py) * 12px), 0);
}

/* Mobile-first composition: two phones in front of the admin panel */
.app-showcase-mobile .layer-laptop {
  right: 0;
  top: 0;
  width: 74%;
}

.app-showcase-mobile .layer-phone {
  left: 3%;
  bottom: 0;
  z-index: 20;
  width: 31%;
}

.app-showcase-mobile .layer-phone-secondary {
  left: 37%;
  bottom: 2%;
  z-index: 10;
  width: 26%;
}

.app-showcase-mobile .showcase-toast-slot {
  right: 0;
  bottom: 16%;
}

/* Web-first composition: big admin panel with the mobile app beside it */
.app-showcase-web .layer-laptop {
  left: 0;
  top: 4%;
  width: 86%;
}

.app-showcase-web .layer-phone {
  right: 0;
  bottom: 0;
  z-index: 20;
  width: 26%;
}

.app-showcase-web .showcase-toast-slot {
  left: 2%;
  bottom: 4%;
}

.showcase-float {
  animation: device-float 6s ease-in-out infinite;
}

.float-slow {
  animation-duration: 8s;
  animation-delay: -2s;
}

.float-delayed {
  animation-delay: -3s;
}

.showcase-toast-slot {
  position: absolute;
  z-index: 30;
  width: min(66%, 330px);
}

.showcase-toast {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.86);
  box-shadow: 0 18px 40px -16px rgba(6, 27, 78, 0.45);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.toast-icon {
  display: flex;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}

.toast-icon svg {
  width: 18px;
  height: 18px;
}

.toast-icon-blue {
  background: #e0ecff;
  color: #0b63f6;
}

.toast-icon-green {
  background: #dcfce7;
  color: #16a34a;
}

.toast-icon-amber {
  background: #fef3c7;
  color: #d97706;
}

.toast-title {
  display: block;
  overflow: hidden;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.3;
  color: #0f172a;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.toast-text {
  display: block;
  overflow: hidden;
  font-size: 12px;
  line-height: 1.35;
  color: #475569;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.toast-time {
  align-self: flex-start;
  margin-left: auto;
  font-size: 11px;
  color: #94a3b8;
  white-space: nowrap;
}

.toast-enter-active,
.toast-leave-active {
  transition: opacity 350ms ease, transform 450ms cubic-bezier(0.2, 0.7, 0.2, 1);
}

.toast-enter-from {
  opacity: 0;
  transform: translateY(14px) scale(0.96);
}

.toast-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.98);
}

@keyframes device-float {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-12px);
  }
}

@keyframes glow-pulse {
  0%,
  100% {
    opacity: 0.85;
    transform: scale(1);
  }

  50% {
    opacity: 1;
    transform: scale(1.06);
  }
}

@media (max-width: 640px) {
  .showcase-toast {
    gap: 8px;
    padding: 8px 10px;
    border-radius: 12px;
  }

  .toast-icon {
    width: 28px;
    height: 28px;
    border-radius: 9px;
  }

  .toast-icon svg {
    width: 15px;
    height: 15px;
  }

  .toast-time {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .showcase-float,
  .showcase-glow {
    animation: none;
  }

  .showcase-layer {
    transition: none;
  }
}
</style>
