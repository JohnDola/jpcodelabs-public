<script setup lang="ts">
import { CheckCircle, ArrowRight } from 'lucide-vue-next'

const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
    }
}

// Process step images
const images = {
    analyse: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop', // Team meeting/analysis
    umsetzung: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop', // Coding/development
    uebergabe: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop' // Handshake/delivery
}
</script>

<template>
    <!-- Dark section for alternating pattern -->
    <section
        class="relative py-20 md:py-32 px-6 md:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">

        <!-- Subtle pattern overlay -->
        <div class="absolute inset-0 opacity-[.02] md:opacity-5 motion-reduce:opacity-0" aria-hidden="true">
            <div class="absolute inset-0"
                style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;">
            </div>
        </div>

        <div class="max-w-6xl mx-auto relative z-10">

            <!-- Section Header -->
            <div class="text-center mb-16 md:mb-20">
                <!-- Badge -->
                <div
                    class="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-orange-400 bg-orange-950/50 border border-orange-800/30 rounded-full px-3 py-1 mb-6">
                    <span class="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
                    <span class="font-semibold">Unser Prozess</span>
                </div>

                <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                    So einfach geht's
                </h2>
                <p class="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                    Von der ersten Idee bis zur fertigen Automatisierung – in nur 3 klaren Schritten.
                </p>
            </div>

            <!-- Process Steps with Images -->
            <div class="grid md:grid-cols-3 gap-8 md:gap-10 mb-16">

                <!-- Step 1: Analyse -->
                <article class="group relative">
                    <!-- Step number badge -->
                    <div class="absolute -top-4 left-6 z-10">
                        <div
                            class="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl flex items-center justify-center text-xl font-bold shadow-lg">
                            1
                        </div>
                    </div>

                    <div
                        class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-orange-500/30 motion-safe:hover:-translate-y-1">
                        <!-- Image -->
                        <div class="aspect-[16/10] overflow-hidden">
                            <img :src="images.analyse" alt="Team-Meeting zur Prozessanalyse"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy" decoding="async" />
                        </div>

                        <!-- Content -->
                        <div class="p-6 md:p-8">
                            <h3 class="text-xl md:text-2xl font-bold text-white mb-3">
                                Analyse
                            </h3>
                            <p class="text-base text-white/70 leading-relaxed mb-4">
                                Kostenloser Prozess-Check in 30 Minuten. Wir identifizieren Automatisierungspotenziale
                                und zeigen dir konkrete Einsparmöglichkeiten.
                            </p>
                            <div class="inline-flex items-center gap-2 text-sm font-semibold text-orange-400">
                                <CheckCircle class="w-4 h-4" />
                                <span>100% kostenlos</span>
                            </div>
                        </div>
                    </div>
                </article>

                <!-- Step 2: Umsetzung -->
                <article class="group relative">
                    <!-- Step number badge -->
                    <div class="absolute -top-4 left-6 z-10">
                        <div
                            class="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-xl flex items-center justify-center text-xl font-bold shadow-lg">
                            2
                        </div>
                    </div>

                    <div
                        class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-cyan-500/30 motion-safe:hover:-translate-y-1">
                        <!-- Image -->
                        <div class="aspect-[16/10] overflow-hidden">
                            <img :src="images.umsetzung" alt="Entwicklung und Programmierung der Automatisierung"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy" decoding="async" />
                        </div>

                        <!-- Content -->
                        <div class="p-6 md:p-8">
                            <h3 class="text-xl md:text-2xl font-bold text-white mb-3">
                                Umsetzung
                            </h3>
                            <p class="text-base text-white/70 leading-relaxed mb-4">
                                MVP in 5–10 Tagen mit festen Meilensteinen. Du siehst den Fortschritt in Echtzeit und
                                gibst kontinuierlich Feedback.
                            </p>
                            <div class="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400">
                                <CheckCircle class="w-4 h-4" />
                                <span>Transparente Entwicklung</span>
                            </div>
                        </div>
                    </div>
                </article>

                <!-- Step 3: Übergabe -->
                <article class="group relative">
                    <!-- Step number badge -->
                    <div class="absolute -top-4 left-6 z-10">
                        <div
                            class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl flex items-center justify-center text-xl font-bold shadow-lg">
                            3
                        </div>
                    </div>

                    <div
                        class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-purple-500/30 motion-safe:hover:-translate-y-1">
                        <!-- Image -->
                        <div class="aspect-[16/10] overflow-hidden">
                            <img :src="images.uebergabe" alt="Übergabe und Dokumentation der fertigen Lösung"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy" decoding="async" />
                        </div>

                        <!-- Content -->
                        <div class="p-6 md:p-8">
                            <h3 class="text-xl md:text-2xl font-bold text-white mb-3">
                                Übergabe
                            </h3>
                            <p class="text-base text-white/70 leading-relaxed mb-4">
                                Vollständige Dokumentation, Team-Einweisung und optionaler Support. Plus:
                                Erweiterungsmöglichkeiten für zukünftiges Wachstum.
                            </p>
                            <div class="inline-flex items-center gap-2 text-sm font-semibold text-purple-400">
                                <CheckCircle class="w-4 h-4" />
                                <span>Langfristig skalierbar</span>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            <!-- CTA Box -->
            <div class="text-center">
                <div
                    class="inline-flex flex-col items-center gap-4 bg-gradient-to-r from-orange-600/20 to-orange-500/10 border border-orange-500/30 rounded-2xl px-8 md:px-12 py-8 hover:from-orange-600/25 hover:to-orange-500/15 hover:border-orange-500/40 transition-all duration-300">
                    <p class="text-xl md:text-2xl font-bold text-white tracking-tight">
                        Klingt gut? Lass uns kostenlos deinen Prozess prüfen.
                    </p>

                    <button @click="scrollToContact"
                        class="group flex items-center gap-2 px-8 py-4 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/50">
                        <span>Jetzt Prozess-Check anfragen</span>
                        <ArrowRight
                            class="w-5 h-5 motion-safe:group-hover:translate-x-1 transition-transform duration-300" />
                    </button>

                    <p class="text-sm text-white/60">
                        Keine Verpflichtung · Keine versteckten Kosten · 100% transparent
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
