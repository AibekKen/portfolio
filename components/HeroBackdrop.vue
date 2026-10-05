<template>
  <div class="hero-backdrop" aria-hidden="true">
    <div class="backdrop-dots"></div>
    <div class="backdrop-orb orb-blue"></div>
    <div class="backdrop-orb orb-sky"></div>
    <div class="backdrop-ring ring-large"></div>
    <div class="backdrop-ring ring-small"></div>
  </div>
</template>

<style scoped>
.hero-backdrop {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.backdrop-dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(11, 99, 246, 0.22) 1px, transparent 1.6px);
  background-size: 24px 24px;
  mask-image: radial-gradient(ellipse 70% 75% at 72% 45%, #000 15%, transparent 72%);
  -webkit-mask-image: radial-gradient(ellipse 70% 75% at 72% 45%, #000 15%, transparent 72%);
}

.backdrop-orb {
  position: absolute;
  border-radius: 999px;
  filter: blur(60px);
  animation: orb-drift 18s ease-in-out infinite;
}

.orb-blue {
  right: 8%;
  top: 12%;
  width: 34vw;
  max-width: 520px;
  aspect-ratio: 1;
  background: rgba(11, 99, 246, 0.16);
}

.orb-sky {
  right: 32%;
  bottom: -10%;
  width: 26vw;
  max-width: 380px;
  aspect-ratio: 1;
  background: rgba(56, 189, 248, 0.16);
  animation-delay: -9s;
}

.backdrop-ring {
  position: absolute;
  border: 1px dashed rgba(11, 99, 246, 0.18);
  border-radius: 999px;
  animation: ring-spin 80s linear infinite;
}

.ring-large {
  right: -6%;
  top: -18%;
  width: 46vw;
  max-width: 720px;
  aspect-ratio: 1;
}

.ring-small {
  left: -8%;
  bottom: -22%;
  width: 28vw;
  max-width: 420px;
  aspect-ratio: 1;
  border-color: rgba(6, 27, 78, 0.1);
  animation-direction: reverse;
  animation-duration: 110s;
}

@keyframes orb-drift {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: translate3d(-4%, 6%, 0) scale(1.08);
  }
}

@keyframes ring-spin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .backdrop-orb,
  .backdrop-ring {
    animation: none;
  }
}
</style>
