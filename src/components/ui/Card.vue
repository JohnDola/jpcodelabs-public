<script setup lang="ts">
interface Props {
    hover?: boolean
}

withDefaults(defineProps<Props>(), {
    hover: true,
})
</script>

<template>
    <div :class="[
        'rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-200',
        hover && 'hover:shadow-md',
    ]">
        <slot />
    </div>
</template>
