<template>
  <button
    :class="[
      baseClasses,
      variantClasses,
      sizeClasses,
      {
        'opacity-50 cursor-not-allowed': disabled,
      }
    ]"
    :disabled="disabled"
    :type="type"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  type: 'button',
})

const baseClasses = computed(() => 'inline-flex min-h-12 items-center justify-center text-center font-semibold rounded-brand transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2')

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-brand-primary hover:bg-brand-primary-dark text-white focus:ring-brand-primary'
    case 'secondary':
      return 'bg-white border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white focus:ring-brand-primary'
    case 'dark':
      return 'bg-brand-dark hover:bg-brand-dark-alt text-white focus:ring-brand-dark'
    default:
      return ''
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-4 py-2 text-sm'
    case 'md':
      return 'px-6 py-3 md:px-8 md:py-4 text-base'
    case 'lg':
      return 'px-8 py-4 md:px-10 md:py-5 text-lg'
    default:
      return ''
  }
})
</script>
