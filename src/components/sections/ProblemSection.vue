<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

// TODO: Replace these placeholder images with actual photos
// Recommended: Use images from Unsplash or project assets
const images = {
    timeWaste: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop', // Clock/time management
    manualWork: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop', // Documents/paperwork
    emailChaos: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=600&fit=crop' // Email/inbox
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
      CHANGE: Full viewport height (min-h-screen), centered content,
      dark gradient matching hero for seamless transition
    -->
    <section
        class="relative min-h-screen flex items-center justify-center py-20 md:py-24 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">

        <!-- Subtle pattern overlay (respects motion preferences) -->
        <div class="absolute inset-0 opacity-[.02] md:opacity-5 motion-reduce:opacity-0" aria-hidden="true">
            <div class="absolute inset-0"
                style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;">
            </div>
        </div>

        <!-- Container matching hero width -->
        <div class="max-w-6xl mx-auto relative z-10 w-full">

            <!-- Row 1: Headline + Subline (centered) -->
            <div class="text-center mb-16 md:mb-20">
                <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                    Kommt dir das bekannt vor?
                </h2>
                <p class="text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                    Viele KMUs verlieren täglich Zeit mit Aufgaben, die längst automatisch laufen könnten.
                </p>
            </div>

            <!-- Row 2: Image-led Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-16 md:mb-20">

                <!-- Card 1: Zeitverschwendung -->
                <div
                    class="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/20 motion-safe:hover:-translate-y-1 motion-reduce:transform-none">
                    <!-- Image Container (4:3 aspect ratio) -->
                    <div class="aspect-[4/3] overflow-hidden relative">
                        <img :src="images.timeWaste" alt="Person working with multiple screens showing time management"
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <!-- Subtle overlay on hover -->
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                    </div>

                    <!-- Text Content -->
                    <div class="p-6 space-y-3">
                        <h3 class="text-lg md:text-xl font-semibold text-white">
                            Zeitverschwendung
                        </h3>
                        <p class="text-sm md:text-base text-white/70 leading-relaxed">
                            Stunden mit Dateneingabe und Copy-Paste zwischen Tools?
                        </p>
                    </div>
                </div>

                <!-- Card 2: Manuelle Prozesse -->
                <div
                    class="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/20 motion-safe:hover:-translate-y-1 motion-reduce:transform-none">
                    <!-- Image Container (4:3 aspect ratio) -->
                    <div class="aspect-[4/3] overflow-hidden relative">
                        <img :src="images.manualWork"
                            alt="Stack of documents and paperwork representing manual processes"
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <!-- Subtle overlay on hover -->
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                    </div>

                    <!-- Text Content -->
                    <div class="p-6 space-y-3">
                        <h3 class="text-lg md:text-xl font-semibold text-white">
                            Manuelle Prozesse
                        </h3>
                        <p class="text-sm md:text-base text-white/70 leading-relaxed">
                            Angebote und Rechnungen werden noch per Hand erstellt und versendet?
                        </p>
                    </div>
                </div>

                <!-- Card 3: E-Mail-Chaos -->
                <div
                    class="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/20 motion-safe:hover:-translate-y-1 motion-reduce:transform-none">
                    <!-- Image Container (4:3 aspect ratio) -->
                    <div class="aspect-[4/3] overflow-hidden relative">
                        <img :src="images.emailChaos" alt="Overflowing email inbox showing communication chaos"
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <!-- Subtle overlay on hover -->
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                    </div>

                    <!-- Text Content -->
                    <div class="p-6 space-y-3">
                        <h3 class="text-lg md:text-xl font-semibold text-white">
                            E-Mail-Chaos
                        </h3>
                        <p class="text-sm md:text-base text-white/70 leading-relaxed">
                            Wichtige Anfragen gehen unter, während das Team E-Mails sortiert?
                        </p>
                    </div>
                </div>
            </div>

            <!-- Inline CTA Row (replaces bottom pill box) -->
            <div
                class="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 pt-8 border-t border-white/10">
                <!-- Left: Statement -->
                <p class="text-lg md:text-xl font-bold text-white tracking-tight text-center md:text-left">
                    Das lässt sich automatisieren – in Tagen, nicht in Monaten.
                </p>

                <!-- Right: Link-styled CTA -->
                <button @click="scrollToContact"
                    class="group flex items-center gap-2 text-base md:text-lg font-semibold text-orange-400 hover:text-orange-300 transition-colors duration-300">
                    <span>Jetzt Potenzial prüfen</span>
                    <ArrowRight
                        class="w-5 h-5 motion-safe:group-hover:translate-x-1 motion-reduce:transform-none transition-transform duration-300"
                        aria-hidden="true" />
                </button>
            </div>
        </div>
    </section>
</template>
