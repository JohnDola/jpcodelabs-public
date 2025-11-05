<script setup lang="ts">
import { Code2, Cloud, Workflow as WorkflowIcon, Sparkles } from 'lucide-vue-next'
import type { TechStackItem } from '../../types'

const techStack: TechStackItem[] = [
    { name: 'Vue.js', icon: 'code', url: 'https://vuejs.org' },
    { name: '.NET', icon: 'code', url: 'https://dotnet.microsoft.com' },
    { name: 'Node.js', icon: 'code', url: 'https://nodejs.org' },
    { name: 'n8n', icon: 'workflow', url: 'https://n8n.io' },
    { name: 'Azure', icon: 'cloud', url: 'https://azure.microsoft.com' },
    { name: 'OpenAI', icon: 'sparkles', url: 'https://openai.com' },
]

const getIcon = (iconName: string) => {
    const icons: Record<string, any> = {
        code: Code2,
        cloud: Cloud,
        workflow: WorkflowIcon,
        sparkles: Sparkles,
    }
    return icons[iconName] || Code2
}
</script>

<template>
    <section class="py-16 md:py-24 px-6 bg-slate-50">
        <div class="max-w-5xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Womit wir arbeiten
                </h2>
                <p class="text-lg text-slate-600 max-w-2xl mx-auto">
                    Moderne Technologien für zukunftssichere Automatisierungslösungen.
                </p>
            </div>

            <div class="max-w-3xl mx-auto">
                <!-- Tech Stack Grid -->
                <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div v-for="tech in techStack" :key="tech.name"
                        class="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-200 hover:border-orange-300 hover:shadow-md transition-all duration-200 group">
                        <component :is="getIcon(tech.icon)"
                            class="w-12 h-12 text-slate-600 group-hover:text-orange-600 transition-colors mb-3" />
                        <span class="text-base font-semibold text-slate-700 text-center">
                            {{ tech.name }}
                        </span>
                    </div>
                </div>

                <!-- Additional Info -->
                <div class="mt-12 text-center">
                    <div class="inline-block bg-white border-2 border-orange-200 rounded-2xl px-8 py-6 shadow-sm">
                        <p class="text-slate-700 font-medium">
                            + viele weitere Tools je nach Anforderung
                        </p>
                        <p class="text-sm text-slate-500 mt-2">
                            Wir wählen immer die beste Technologie für dein spezifisches Problem
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
