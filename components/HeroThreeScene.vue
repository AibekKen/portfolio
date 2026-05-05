<template>
  <div ref="container" class="hero-three-scene" aria-hidden="true"></div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import {
  BufferAttribute,
  BufferGeometry,
  Clock,
  Group,
  IcosahedronGeometry,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  TorusKnotGeometry,
  WebGLRenderer,
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

const createParticleField = () => {
  const particleCount = 180
  const positions = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount; i += 1) {
    const i3 = i * 3
    positions[i3] = (Math.random() - 0.5) * 12
    positions[i3 + 1] = (Math.random() - 0.5) * 7
    positions[i3 + 2] = (Math.random() - 0.5) * 8
  }

  const geometry = new BufferGeometry()
  geometry.setAttribute('position', new BufferAttribute(positions, 3))

  const material = new PointsMaterial({
    color: 0x0b63f6,
    size: 0.055,
    transparent: true,
    opacity: 0.7,
  })

  return new Points(geometry, material)
}

const createLineField = () => {
  const lineCount = 70
  const positions = new Float32Array(lineCount * 2 * 3)

  for (let i = 0; i < lineCount * 2; i += 1) {
    const i3 = i * 3
    positions[i3] = (Math.random() - 0.5) * 12
    positions[i3 + 1] = (Math.random() - 0.5) * 6
    positions[i3 + 2] = (Math.random() - 0.5) * 5
  }

  const geometry = new BufferGeometry()
  geometry.setAttribute('position', new BufferAttribute(positions, 3))

  const material = new LineBasicMaterial({
    color: 0x0b63f6,
    transparent: true,
    opacity: 0.18,
  })

  return new LineSegments(geometry, material)
}

const resize = () => {
  if (!container.value || !renderer || !camera) {
    return
  }

  const { width, height } = container.value.getBoundingClientRect()
  const safeHeight = Math.max(height, 320)

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
  camera = new PerspectiveCamera(45, 1, 0.1, 100)
  camera.position.set(0, 0, 7)

  try {
    renderer = new WebGLRenderer({
      alpha: true,
      antialias: true,
    })
  } catch (error) {
    console.warn('Three.js scene skipped: WebGL is not available.', error)
    return
  }
  renderer.setClearColor(0x000000, 0)
  container.value.appendChild(renderer.domElement)

  const group = new Group()
  scene.add(group)

  const knot = new Mesh(
    new TorusKnotGeometry(1.25, 0.22, 160, 18),
    new MeshBasicMaterial({
      color: 0x0b63f6,
      transparent: true,
      opacity: 0.32,
      wireframe: true,
    }),
  )
  knot.position.set(2.1, 0.1, -0.2)
  group.add(knot)

  const core = new Mesh(
    new IcosahedronGeometry(1.1, 2),
    new MeshBasicMaterial({
      color: 0x061b4e,
      transparent: true,
      opacity: 0.18,
      wireframe: true,
    }),
  )
  core.position.set(-2.4, -0.25, -0.6)
  group.add(core)

  const particles = createParticleField()
  group.add(particles)

  const lines = createLineField()
  group.add(lines)

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
    group.rotation.y += (pointer.x * 0.16 - group.rotation.y) * 0.025
    group.rotation.x += (-pointer.y * 0.08 - group.rotation.x) * 0.025

    knot.rotation.x = elapsed * 0.22
    knot.rotation.y = elapsed * 0.18
    core.rotation.x = -elapsed * 0.12
    core.rotation.y = elapsed * 0.16
    particles.rotation.y = elapsed * 0.035
    lines.rotation.y = -elapsed * 0.025

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
.hero-three-scene {
  pointer-events: auto;
}

.hero-three-scene :deep(canvas) {
  display: block;
  height: 100%;
  width: 100%;
}
</style>
