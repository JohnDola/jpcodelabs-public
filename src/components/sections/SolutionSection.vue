<script setup lang="ts">
import { Check, ArrowRight } from 'lucide-vue-next'

// TODO: Replace these placeholder images with actual photos
// Recommended: Use high-quality images showing automation, efficiency, security, and collaboration
const images = {
    speed: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop', // Dashboard/analytics
    cost: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=600&fit=crop', // Cost efficiency/savings
    security: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop', // Security/lock
    support: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop' // Team collaboration
}

const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
    }
}
</script>

<template>
    <!-- 
      CHANGE: Full-bleed immersive section with soft gradient background (hell aber nicht weiß),
      asymmetrical split layout (40% left content, 60% right image grid)
    -->
    <section
        class="relative py-20 md:py-32 px-6 md:px-8 bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100 overflow-hidden">

        <!-- Subtle multi-color radial tint (orange, cyan, purple für Konsistenz) -->
        <div class="absolute inset-0 bg-gradient-radial from-orange-50/30 via-cyan-50/20 to-purple-50/20 opacity-50"
            aria-hidden="true"></div>

        <div class="max-w-7xl mx-auto relative z-10">

            <!-- Desktop: Split layout | Mobile: Stacked -->
            <div class="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

                <!-- Left Column (≈40%): Badge, H2, Lead, Bullet List -->
                <div class="lg:col-span-2">

                    <!-- Orange accent badge -->
                    <div
                        class="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-orange-700 bg-orange-50 border border-orange-200 rounded-full px-3 py-1 mb-6">
                        <span class="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
                        <span class="font-semibold">Unsere Lösung</span>
                    </div>

                    <!-- Main headline -->
                    <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
                        Automatisierung, die funktioniert
                    </h2>

                    <!-- Lead paragraph -->
                    <p class="mt-3 text-lg text-slate-600 max-w-2xl leading-relaxed">
                        Kleine, leistungsstarke Automatisierungen für deinen Geschäftsalltag – pragmatisch und messbar.
                    </p>

                    <!-- Bullet list with icon badges -->
                    <ul class="mt-8 space-y-4">
                        <li class="flex items-center gap-3">
                            <div
                                class="h-9 w-9 rounded-xl bg-orange-100 text-orange-600 ring-1 ring-orange-500/20 flex items-center justify-center flex-shrink-0">
                                <Check class="w-5 h-5" aria-hidden="true" />
                            </div>
                            <span class="text-base font-medium text-slate-700">Keine Großprojekte</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <div
                                class="h-9 w-9 rounded-xl bg-orange-100 text-orange-600 ring-1 ring-orange-500/20 flex items-center justify-center flex-shrink-0">
                                <Check class="w-5 h-5" aria-hidden="true" />
                            </div>
                            <span class="text-base font-medium text-slate-700">Keine IT-Abteilung nötig</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <div
                                class="h-9 w-9 rounded-xl bg-orange-100 text-orange-600 ring-1 ring-orange-500/20 flex items-center justify-center flex-shrink-0">
                                <Check class="w-5 h-5" aria-hidden="true" />
                            </div>
                            <span class="text-base font-medium text-slate-700">Ergebnisse in Tagen</span>
                        </li>
                    </ul>
                </div>

                <!-- Right Column (≈60%): 2x2 Image-led Feature Grid -->
                <div class="lg:col-span-3">
                    <div class="grid sm:grid-cols-2 gap-6">

                        <!-- Feature 1: Speed (Orange accent) -->
                        <article
                            class="group rounded-2xl overflow-hidden border border-orange-200/40 bg-white/80 backdrop-blur-sm shadow-sm transition hover:shadow-md hover:border-orange-300/60">
                            <!-- Image wrapper with aspect ratio -->
                            <div class="aspect-[4/3] md:aspect-[16/10] overflow-hidden">
                                <img :src="images.speed"
                                    alt="Schnelle Umsetzung: Von der Idee zur fertigen Automatisierung"
                                    class="w-full h-full object-cover transition motion-safe:group-hover:scale-[1.03]"
                                    loading="lazy" decoding="async" />
                            </div>
                            <!-- Text content -->
                            <div class="p-5 md:p-6">
                                <h3 class="text-lg md:text-xl font-semibold text-slate-900">
                                    In 7 Tagen von Idee zu fertiger Lösung
                                </h3>
                                <p class="mt-2 text-sm md:text-base text-slate-600 leading-relaxed">
                                    Klare Meilensteine. Sichtbare Ergebnisse – ohne monatelange Projekte.
                                </p>
                            </div>
                        </article>

                        <!-- Feature 2: Cost Efficiency (Cyan accent für KI) -->
                        <article
                            class="group rounded-2xl overflow-hidden border border-cyan-200/40 bg-white/80 backdrop-blur-sm shadow-sm transition hover:shadow-md hover:border-cyan-300/60">
                            <div class="aspect-[4/3] md:aspect-[16/10] overflow-hidden">
                                <img :src="images.cost"
                                    alt="Kosteneffizienz: Maßgeschneiderte Lösungen zu fairen Preisen"
                                    class="w-full h-full object-cover transition motion-safe:group-hover:scale-[1.03]"
                                    loading="lazy" decoding="async" />
                            </div>
                            <div class="p-5 md:p-6">
                                <h3 class="text-lg md:text-xl font-semibold text-slate-900">
                                    Individuell, aber kosteneffizient
                                </h3>
                                <p class="mt-2 text-sm md:text-base text-slate-600 leading-relaxed">
                                    No-Code & KI senken Kosten drastisch – ohne Kompromisse bei der Qualität.
                                </p>
                            </div>
                        </article>

                        <!-- Feature 3: Security (Purple accent für Custom Code) -->
                        <article
                            class="group rounded-2xl overflow-hidden border border-purple-200/40 bg-white/80 backdrop-blur-sm shadow-sm transition hover:shadow-md hover:border-purple-300/60">
                            <div class="aspect-[4/3] md:aspect-[16/10] overflow-hidden">
                                <img :src="images.security"
                                    alt="Datenschutz: DSGVO-konforme und transparente Automatisierungen"
                                    class="w-full h-full object-cover transition motion-safe:group-hover:scale-[1.03]"
                                    loading="lazy" decoding="async" />
                            </div>
                            <div class="p-5 md:p-6">
                                <h3 class="text-lg md:text-xl font-semibold text-slate-900">
                                    DSGVO-konform & transparent
                                </h3>
                                <p class="mt-2 text-sm md:text-base text-slate-600 leading-relaxed">
                                    Datenschutzkonform dokumentiert. Du behältst die volle Kontrolle.
                                </p>
                            </div>
                        </article>

                        <!-- Feature 4: Support (Orange accent) -->
                        <article
                            class="group rounded-2xl overflow-hidden border border-orange-200/40 bg-white/80 backdrop-blur-sm shadow-sm transition hover:shadow-md hover:border-orange-300/60">
                            <div class="aspect-[4/3] md:aspect-[16/10] overflow-hidden">
                                <img :src="images.support" alt="Direkter Support: Persönlicher Kontakt zum Entwickler"
                                    class="w-full h-full object-cover transition motion-safe:group-hover:scale-[1.03]"
                                    loading="lazy" decoding="async" />
                            </div>
                            <div class="p-5 md:p-6">
                                <h3 class="text-lg md:text-xl font-semibold text-slate-900">
                                    Direkter Draht zum Entwickler
                                </h3>
                                <p class="mt-2 text-sm md:text-base text-slate-600 leading-relaxed">
                                    Kein Agentur-Blabla. Du sprichst direkt mit dem Entwickler deiner Lösung.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

            <!-- 
              CHANGE: Subtle inline CTA row (replaces large beige box)
              Left: Value statement | Right: Link-style CTA
            -->
            <div
                class="mt-16 pt-12 border-t border-slate-200/60 flex flex-col md:flex-row items-center justify-between gap-6">
                <!-- Left: Value statement -->
                <p class="text-lg md:text-xl font-semibold text-slate-700 text-center md:text-left">
                    Spare 5+ Stunden pro Woche – konzentriere dich aufs Wachstum.
                </p>

                <!-- Right: Link-style CTA -->
                <button @click="scrollToContact"
                    class="group flex items-center gap-2 text-base md:text-lg font-semibold text-orange-600 hover:text-orange-700 transition-colors duration-300">
                    <span>Jetzt Potenzial prüfen</span>
                    <ArrowRight
                        class="w-5 h-5 motion-safe:group-hover:translate-x-1 motion-reduce:transform-none transition-transform duration-300"
                        aria-hidden="true" />
                </button>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Custom radial gradient for subtle background tint */
.bg-gradient-radial {
    background-image: radial-gradient(circle at 30% 20%, var(--tw-gradient-stops));
}
</style>
