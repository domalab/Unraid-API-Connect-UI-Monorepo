<script setup lang="ts">
import { cn } from '@/lib/utils';
import { computed } from 'vue';
import { buttonVariants, type ButtonVariants } from './button.variants';

export interface ButtonProps {
  variant?: ButtonVariants['variant'];
  size?: ButtonVariants['size'];
  class?: string;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
});

const buttonClass = computed(() => {
  return cn(buttonVariants({ variant: props.variant, size: props.size }), props.class);
});
</script>

<template>
  <button :class="buttonClass">
    <slot />
  </button>
</template>
