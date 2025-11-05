<script setup lang="ts">
import { Search, Code, CheckCircle, ArrowRight } from 'lucide-vue-next'
import Button from '../ui/Button.vue'

const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
    }
}
</script>

<template>
    <section class="py-16 md:py-24 px-6 bg-white">
        <div class="max-w-5xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    So einfach geht's
                </h2>
                <p class="text-lg text-slate-600 max-w-2xl mx-auto">
                    Von der ersten Idee bis zur fertigen Automatisierung – in nur 3 klaren Schritten.
                </p>
            </div>

            <!-- Process Steps -->
            <div class="relative">
                <!-- Connection Line -->
                <div class="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-slate-200 -z-10"></div>

                <div class="grid md:grid-cols-3 gap-8 md:gap-12">
                    <!-- Step 1 -->
                    <div class="relative">
                        <div class="flex flex-col items-center text-center">
                            <!-- Step Number -->
                            <div
                                class="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 relative z-10">
                                1
                            </div>

                            <!-- Icon -->
                            <div class="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center mb-4">
                                <Search class="w-10 h-10 text-orange-600" />
                            </div>

                            <!-- Content -->
                            <h3 class="text-xl font-bold text-slate-900 mb-3">
                                Analyse
                            </h3>
                            <p class="text-slate-600 mb-4">
                                Kostenloser Prozess-Check in 30 Minuten. Wir analysieren deinen Workflow und
                                identifizieren Automatisierungspotenziale.
                            </p>
                            <div class="inline-flex items-center gap-2 text-sm font-medium text-orange-600">
                                <CheckCircle class="w-4 h-4" />
                                <span>100% kostenlos</span>
                            </div>
                        </div>
                    </div>

                    <!-- Step 2 -->
                    <div class="relative">
                        <div class="flex flex-col items-center text-center">
                            <!-- Step Number -->
                            <div
                                class="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 relative z-10">
                                2
                            </div>

                            <!-- Icon -->
                            <div class="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center mb-4">
                                <Code class="w-10 h-10 text-orange-600" />
                            </div>

                            <!-- Content -->
                            <h3 class="text-xl font-bold text-slate-900 mb-3">
                                Umsetzung
                            </h3>
                            <p class="text-slate-600 mb-4">
                                MVP in 5–10 Tagen mit festen Meilensteinen. Du siehst den Fortschritt in Echtzeit und
                                kannst jederzeit Feedback geben.
                            </p>
                            <div class="inline-flex items-center gap-2 text-sm font-medium text-orange-600">
                                <CheckCircle class="w-4 h-4" />
                                <span>Transparente Entwicklung</span>
                            </div>
                        </div>
                    </div>

                    <!-- Step 3 -->
                    <div class="relative">
                        <div class="flex flex-col items-center text-center">
                            <!-- Step Number -->
                            <div
                                class="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 relative z-10">
                                3
                            </div>

                            <!-- Icon -->
                            <div class="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center mb-4">
                                <CheckCircle class="w-10 h-10 text-orange-600" />
                            </div>

                            <!-- Content -->
                            <h3 class="text-xl font-bold text-slate-900 mb-3">
                                Übergabe
                            </h3>
                            <p class="text-slate-600 mb-4">
                                Vollständige Dokumentation, Einweisung deines Teams und optionaler Support. Plus:
                                Erweiterungsmöglichkeiten für die Zukunft.
                            </p>
                            <div class="inline-flex items-center gap-2 text-sm font-medium text-orange-600">
                                <CheckCircle class="w-4 h-4" />
                                <span>Langfristig skalierbar</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- CTA -->
            <div class="mt-16 text-center">
                <div class="bg-slate-50 rounded-2xl p-8 max-w-2xl mx-auto">
                    <p class="text-xl font-semibold text-slate-900 mb-6">
                        Klingt gut? Dann lass uns kostenlos deinen Prozess prüfen.
                    </p>
                    <Button variant="primary" @click="scrollToContact">
                        Jetzt Prozess-Check anfragen
                        <ArrowRight class="inline-block ml-2 w-5 h-5" />
                    </Button>
                    <p class="text-sm text-slate-600 mt-4">
                        Keine Verpflichtung • Keine versteckten Kosten • 100% transparent
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
