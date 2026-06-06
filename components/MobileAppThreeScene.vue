<template>
  <div ref="container" class="mobile-app-three-scene" aria-hidden="true">
    <div class="fallback-scene">
      <div class="fallback-module module-orders"></div>
      <div class="fallback-module module-api"></div>
      <div class="fallback-module module-pay"></div>
      <div class="fallback-phone">
        <div class="fallback-speaker"></div>
        <div class="fallback-screen">
          <div class="screen-top">
            <div>
              <span></span>
              <strong></strong>
            </div>
            <i></i>
          </div>
          <div class="screen-chart">
            <b></b>
            <b></b>
            <b></b>
            <b></b>
          </div>
          <div class="screen-list">
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import {
  BoxGeometry,
  BufferAttribute,
  BufferGeometry,
  CanvasTexture,
  Clock,
  Color,
  Group,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Points,
  PointsMaterial,
  Scene,
  SphereGeometry,
  WebGLRenderer,
  AmbientLight,
  DirectionalLight,
} from 'three'

const container = ref<HTMLElement | null>(null)

let renderer: WebGLRenderer | null = null
let scene: Scene | null = null
let camera: PerspectiveCamera | null = null
let frameId = 0
let resizeObserver: ResizeObserver | null = null

const pointer = {
  x: 0,
  y: 0,
}

const createScreenTexture = () => {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 900
  const context = canvas.getContext('2d')

  if (!context) {
    return null
  }

  context.fillStyle = '#ffffff'
  context.fillRect(0, 0, canvas.width, canvas.height)

  context.fillStyle = '#0f172a'
  context.font = '700 34px Arial'
  context.fillText('Orders', 48, 88)

  context.fillStyle = '#0B63F6'
  context.fillRect(380, 48, 72, 72)

  context.fillStyle = '#eff6ff'
  context.fillRect(48, 132, 416, 148)
  context.fillStyle = '#0B63F6'
  context.fillRect(78, 166, 150, 18)
  context.fillStyle = '#93c5fd'
  context.fillRect(78, 206, 320, 18)
  context.fillStyle = '#22c55e'
  context.fillRect(78, 240, 220, 18)

  const cardColors = ['#dcfce7', '#fef3c7', '#ede9fe', '#dbeafe']
  for (let index = 0; index < 4; index += 1) {
    const y = 330 + index * 112
    context.fillStyle = '#ffffff'
    context.fillRect(48, y, 416, 84)
    context.fillStyle = cardColors[index]
    context.fillRect(72, y + 20, 48, 48)
    context.fillStyle = '#1e293b'
    context.fillRect(144, y + 24, 170, 16)
    context.fillStyle = '#cbd5e1'
    context.fillRect(144, y + 54, 250, 14)
  }

  context.fillStyle = '#0f172a'
  context.fillRect(48, 802, 416, 54)

  const texture = new CanvasTexture(canvas)
  texture.colorSpace = 'srgb'
  return texture
}

const createParticleField = () => {
  const particleCount = 220
  const positions = new Float32Array(particleCount * 3)

  for (let index = 0; index < particleCount; index += 1) {
    const i3 = index * 3
    positions[i3] = (Math.random() - 0.5) * 9
    positions[i3 + 1] = (Math.random() - 0.5) * 6
    positions[i3 + 2] = (Math.random() - 0.5) * 5
  }

  const geometry = new BufferGeometry()
  geometry.setAttribute('position', new BufferAttribute(positions, 3))

  return new Points(
    geometry,
    new PointsMaterial({
      color: 0x0b63f6,
      size: 0.035,
      transparent: true,
      opacity: 0.42,
    }),
  )
}

const createConnectorLines = () => {
  const positions = new Float32Array([
    -2.9, 1.45, -0.4, -1.15, 0.92, 0.05,
    2.9, 1.1, -0.4, 1.15, 0.48, 0.05,
    -3.1, -0.9, -0.4, -1.15, -0.36, 0.05,
    3.0, -1.35, -0.4, 1.15, -0.95, 0.05,
  ])

  const geometry = new BufferGeometry()
  geometry.setAttribute('position', new BufferAttribute(positions, 3))

  return new LineSegments(
    geometry,
    new LineBasicMaterial({
      color: 0x0b63f6,
      transparent: true,
      opacity: 0.28,
    }),
  )
}

const addFloatingModule = (group: Group, x: number, y: number, color: number, width = 0.72) => {
  const module = new Mesh(
    new BoxGeometry(width, 0.46, 0.08),
    new MeshStandardMaterial({
      color,
      roughness: 0.5,
      metalness: 0.05,
    }),
  )
  module.position.set(x, y, -0.25)
  group.add(module)

  const dot = new Mesh(
    new SphereGeometry(0.07, 18, 18),
    new MeshBasicMaterial({ color: 0xffffff }),
  )
  dot.position.set(x - width * 0.32, y + 0.01, -0.18)
  group.add(dot)
}

const resize = () => {
  if (!container.value || !renderer || !camera) {
    return
  }

  const { width, height } = container.value.getBoundingClientRect()
  const safeHeight = Math.max(height, 420)

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(width, safeHeight, false)
  camera.aspect = width / safeHeight
  camera.updateProjectionMatrix()
}

const handlePointerMove = (event: PointerEvent) => {
  if (!container.value) {
    return
  }

  const bounds = container.value.getBoundingClientRect()
  pointer.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2
  pointer.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2
}

onMounted(() => {
  if (!container.value) {
    return
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  scene = new Scene()
  scene.background = new Color(0xf8fafc)
  camera = new PerspectiveCamera(35, 1, 0.1, 100)
  camera.position.set(0, 0.08, 7.3)

  try {
    renderer = new WebGLRenderer({
      antialias: true,
      alpha: false,
    })
  } catch (error) {
    console.warn('Three.js mobile scene skipped: WebGL is not available.', error)
    return
  }

  container.value.appendChild(renderer.domElement)

  const ambient = new AmbientLight(0xffffff, 1.85)
  scene.add(ambient)

  const light = new DirectionalLight(0xffffff, 2.5)
  light.position.set(3, 5, 4)
  scene.add(light)

  const group = new Group()
  scene.add(group)

  const phone = new Mesh(
    new BoxGeometry(1.7, 3.55, 0.22),
    new MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.38,
      metalness: 0.18,
    }),
  )
  phone.position.set(0, 0, 0)
  group.add(phone)

  const screenTexture = createScreenTexture()
  const screen = new Mesh(
    new PlaneGeometry(1.47, 3.18),
    new MeshBasicMaterial({
      map: screenTexture || undefined,
      color: screenTexture ? 0xffffff : 0xf8fafc,
    }),
  )
  screen.position.set(0, 0, 0.116)
  group.add(screen)

  const cameraDot = new Mesh(
    new SphereGeometry(0.055, 24, 24),
    new MeshBasicMaterial({ color: 0x020617 }),
  )
  cameraDot.position.set(0, 1.59, 0.13)
  group.add(cameraDot)

  addFloatingModule(group, -2.35, 1.18, 0x22c55e, 0.88)
  addFloatingModule(group, 2.35, 0.78, 0xf59e0b, 0.82)
  addFloatingModule(group, -2.45, -0.98, 0x8b5cf6, 0.9)
  addFloatingModule(group, 2.36, -1.3, 0x0b63f6, 0.94)

  const connectors = createConnectorLines()
  group.add(connectors)

  const particles = createParticleField()
  scene.add(particles)

  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(container.value)
  container.value.addEventListener('pointermove', handlePointerMove)
  resize()

  const clock = new Clock()

  const render = () => {
    if (!renderer || !scene || !camera) {
      return
    }

    const elapsed = clock.getElapsedTime()
    group.rotation.y += (pointer.x * 0.18 - group.rotation.y) * 0.025
    group.rotation.x += (-pointer.y * 0.08 - group.rotation.x) * 0.025
    group.position.y = Math.sin(elapsed * 0.9) * 0.045
    connectors.material.opacity = 0.2 + Math.sin(elapsed * 1.4) * 0.06
    particles.rotation.y = elapsed * 0.025
    particles.rotation.x = Math.sin(elapsed * 0.35) * 0.04

    renderer.render(scene, camera)

    if (!prefersReducedMotion) {
      frameId = window.requestAnimationFrame(render)
    }
  }

  render()
})

onBeforeUnmount(() => {
  if (frameId) {
    window.cancelAnimationFrame(frameId)
  }

  if (container.value) {
    container.value.removeEventListener('pointermove', handlePointerMove)
  }

  resizeObserver?.disconnect()
  renderer?.dispose()
  renderer?.domElement.remove()
  renderer = null
  scene = null
  camera = null
})
</script>

<style scoped>
.mobile-app-three-scene {
  min-height: 460px;
  overflow: hidden;
  position: relative;
}

.mobile-app-three-scene :deep(canvas) {
  display: block;
  height: 100%;
  inset: 0;
  position: absolute;
  width: 100%;
  z-index: 2;
}

.fallback-scene {
  background:
    radial-gradient(circle at 30% 20%, rgba(11, 99, 246, 0.13), transparent 28%),
    radial-gradient(circle at 75% 72%, rgba(34, 197, 94, 0.16), transparent 24%),
    #f8fafc;
  height: 100%;
  inset: 0;
  min-height: inherit;
  position: absolute;
  width: 100%;
}

.fallback-phone {
  background: #0f172a;
  border: 1px solid rgba(15, 23, 42, 0.16);
  border-radius: 34px;
  box-shadow: 0 34px 90px rgba(15, 23, 42, 0.18);
  height: 370px;
  left: 50%;
  padding: 14px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-4deg);
  width: 190px;
}

.fallback-speaker {
  background: #93c5fd;
  border-radius: 999px;
  height: 5px;
  margin: 0 auto 10px;
  width: 48px;
}

.fallback-screen {
  background: #fff;
  border-radius: 26px;
  height: 318px;
  padding: 18px;
}

.screen-top {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.screen-top span,
.screen-top strong,
.screen-list p {
  border-radius: 999px;
  display: block;
}

.screen-top span {
  background: #e2e8f0;
  height: 10px;
  width: 58px;
}

.screen-top strong {
  background: #0f172a;
  height: 18px;
  margin-top: 8px;
  width: 96px;
}

.screen-top i {
  background: #0b63f6;
  border-radius: 14px;
  display: block;
  height: 38px;
  width: 38px;
}

.screen-chart {
  align-items: end;
  background: #f8fafc;
  border-radius: 16px;
  display: flex;
  gap: 8px;
  height: 88px;
  margin-top: 24px;
  padding: 12px;
}

.screen-chart b {
  border-radius: 10px;
  flex: 1;
}

.screen-chart b:nth-child(1) {
  background: #bfdbfe;
  height: 34px;
}

.screen-chart b:nth-child(2) {
  background: #bbf7d0;
  height: 54px;
}

.screen-chart b:nth-child(3) {
  background: #fde68a;
  height: 44px;
}

.screen-chart b:nth-child(4) {
  background: #ddd6fe;
  height: 64px;
}

.screen-list {
  margin-top: 18px;
}

.screen-list p {
  background: #e2e8f0;
  height: 34px;
  margin: 0 0 10px;
}

.screen-list p:nth-child(2) {
  background: #dbeafe;
  width: 88%;
}

.screen-list p:nth-child(3) {
  background: #dcfce7;
  width: 72%;
}

.fallback-module {
  border-radius: 16px;
  box-shadow: 0 20px 55px rgba(15, 23, 42, 0.12);
  height: 58px;
  position: absolute;
  width: 112px;
}

.module-orders {
  background: #22c55e;
  left: 9%;
  top: 22%;
}

.module-api {
  background: #0b63f6;
  right: 9%;
  top: 30%;
}

.module-pay {
  background: #f59e0b;
  bottom: 22%;
  right: 17%;
}

@media (min-width: 768px) {
  .mobile-app-three-scene {
    min-height: 560px;
  }
}
</style>
