<script setup lang="ts">
import { Code2, Database, Cloud, Cpu, Workflow as WorkflowIcon, Sparkles } from 'lucide-vue-next'
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
        database: Database,
        cloud: Cloud,
        cpu: Cpu,
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
                    Über JPCodelabs
                </h2>
            </div>

            <div class="grid md:grid-cols-2 gap-12 items-center">
                <!-- Left: Text Content -->
                <div class="space-y-6">
                    <p class="text-lg text-slate-700 leading-relaxed">
                        Wir sind <span class="font-semibold text-emerald-600">Fullstack-Entwickler mit Leidenschaft für
                            Automatisierung</span>. Seit über 10 Jahren entwickeln wir Software für Unternehmen jeder
                        Größe.
                    </p>
                    <p class="text-lg text-slate-700 leading-relaxed">
                        Unsere Mission: KMUs helfen, ihre Prozesse zu automatisieren – ohne dass sie ein eigenes
                        Entwicklerteam brauchen oder Monate auf Ergebnisse warten müssen.
                    </p>
                    <p class="text-lg text-slate-700 leading-relaxed">
                        Unser Ziel: <span class="font-semibold text-slate-900">Greifbare Ergebnisse, nicht nur
                            Code.</span>
                    </p>

                    <!-- Key Points -->
                    <div class="space-y-3 pt-4">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span class="text-emerald-600 text-sm font-bold">✓</span>
                            </div>
                            <p class="text-slate-700">Pragmatisch statt perfektionistisch – wir liefern schnell</p>
                        </div>
                        <div class="flex items-start gap-3">
                            <div
                                class="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span class="text-emerald-600 text-sm font-bold">✓</span>
                            </div>
                            <p class="text-slate-700">Transparent in Kommunikation und Preisgestaltung</p>
                        </div>
                        <div class="flex items-start gap-3">
                            <div
                                class="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span class="text-emerald-600 text-sm font-bold">✓</span>
                            </div>
                            <p class="text-slate-700">Fokus auf ROI – jede Automatisierung muss sich rechnen</p>
                        </div>
                    </div>
                </div>

                <!-- Right: Tech Stack -->
                <div>
                    <div class="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                        <h3 class="text-xl font-bold text-slate-900 mb-6 text-center">
                            Unsere Werkzeuge
                        </h3>

                        <!-- Tech Stack Grid -->
                        <div class="grid grid-cols-3 gap-4">
                            <div v-for="tech in techStack" :key="tech.name"
                                class="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-xl hover:bg-emerald-50 transition-colors duration-200 group">
                                <component :is="getIcon(tech.icon)"
                                    class="w-8 h-8 text-slate-600 group-hover:text-emerald-600 transition-colors mb-2" />
                                <span class="text-sm font-medium text-slate-700 text-center">
                                    {{ tech.name }}
                                </span>
                            </div>
                        </div>

                        <!-- Additional Info -->
                        <div class="mt-6 pt-6 border-t border-slate-200 text-center">
                            <p class="text-sm text-slate-600">
                                + viele weitere Tools je nach Anforderung
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
