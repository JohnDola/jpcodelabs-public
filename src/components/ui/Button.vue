<script setup lang="ts">
import { computed } from 'vue'

interface Props {
    variant?: 'primary' | 'secondary'
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'primary',
    type: 'button',
    disabled: false,
    loading: false,
})

const buttonClasses = computed(() => {
    const base = 'rounded-xl px-6 py-3 font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'

    if (props.variant === 'primary') {
        return `${base} bg-orange-600 text-white hover:bg-orange-700 shadow-sm hover:shadow-md`
    } else {
        return `${base} border-2 border-slate-300 text-white hover:bg-slate-100 hover:border-slate-400 hover:text-primary-500`
    }
})
</script>

<template>
    <button :type="type" :disabled="disabled || loading" :class="buttonClasses">
        <span v-if="loading" class="inline-block animate-spin mr-2">⏳</span>
        <slot />
    </button>
</template>
