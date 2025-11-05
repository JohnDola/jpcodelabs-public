<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { CheckCircle, XCircle, Info, AlertTriangle, X } from 'lucide-vue-next'
import type { ToastNotification } from '../../types'

interface Props {
    notification: ToastNotification
}

const props = defineProps<Props>()
const emit = defineEmits<{
    close: []
}>()

const isVisible = ref(false)

const iconComponent = {
    success: CheckCircle,
    error: XCircle,
    info: Info,
    warning: AlertTriangle,
}

const colorClasses = {
    success: 'bg-orange-50 border-orange-200 text-orange-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
}

const iconColorClasses = {
    success: 'text-orange-600',
    error: 'text-red-600',
    info: 'text-blue-600',
    warning: 'text-yellow-600',
}

onMounted(() => {
    isVisible.value = true

    const duration = props.notification.duration || 5000
    setTimeout(() => {
        close()
    }, duration)
})

const close = () => {
    isVisible.value = false
    setTimeout(() => {
        emit('close')
    }, 300)
}
</script>

<template>
    <div :class="[
        'fixed bottom-4 right-4 max-w-md w-full p-4 rounded-xl border-2 shadow-lg transition-all duration-300 z-50',
        colorClasses[notification.type],
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0',
    ]">
        <div class="flex items-start gap-3">
            <component :is="iconComponent[notification.type]"
                :class="['w-5 h-5 flex-shrink-0 mt-0.5', iconColorClasses[notification.type]]" />
            <p class="flex-1 text-sm font-medium">{{ notification.message }}</p>
            <button @click="close" class="flex-shrink-0 hover:opacity-70 transition-opacity" aria-label="Schließen">
                <X class="w-5 h-5" />
            </button>
        </div>
    </div>
</template>
