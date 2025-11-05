<script setup lang="ts">
import { ArrowRight, Sparkles } from 'lucide-vue-next'
import Button from '../ui/Button.vue'

const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
    }
}
</script>

<template>
    <section class="relative py-20 md:py-32 px-6 overflow-hidden min-h-screen flex items-center">
        <div class="max-w-5xl z-20 mx-auto text-center">
            <!-- Tagline -->
            <div class="mb-5 animate-fade-in">
                <span class="text-orange-400 font-semibold text-sm md:text-base tracking-wide uppercase">
                    Automatisierung für Unternehmer
                </span>
            </div>

            <!-- Main Headline -->
            <h1
                class="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1] tracking-tight mb-12 drop-shadow-2xl animate-fade-in-up">
                Hol dir <span class="text-orange-400 inline-block animate-pulse-subtle relative">20 Stunden<span
                        class="absolute -top-2 -right-2 text-xl opacity-90">✨</span></span><br>
                pro Monat zurück
            </h1>

            <!-- Subheadline -->
            <p
                class="text-lg md:text-xl text-white/95 leading-relaxed mb-14 max-w-3xl mx-auto drop-shadow-lg font-normal animate-fade-in-up animation-delay-200">
                Wir automatisieren deine Routineaufgaben mit <span class="font-semibold text-orange-300">No-Code</span>,
                <span class="font-semibold text-cyan-300">KI</span> und <span
                    class="font-semibold text-purple-300">Custom Code</span>.
                <span class="block mt-4 text-white font-medium">In 7 Tagen einsatzbereit. Mehr Zeit für dein
                    Kerngeschäft.</span>
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up animation-delay-400">
                <!-- Primary CTA -->
                <button
                    class="group relative px-10 py-4 text-base md:text-lg font-bold bg-orange-600 text-white rounded-xl shadow-2xl hover:bg-orange-700 hover:shadow-orange-500/50 hover:scale-[1.02] transition-all duration-300 hover:-translate-y-0.5"
                    @click="scrollToContact">
                    Jetzt Potenzial prüfen
                    <ArrowRight
                        class="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <!-- Secondary CTA -->
                <button
                    class="group px-8 py-4 text-base md:text-lg font-medium bg-transparent text-white border-2 border-white/30 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                    @click="scrollToContact">
                    <Sparkles class="inline-block mr-2 w-5 h-5 opacity-80" />
                    Kostenlose Analyse
                </button>
            </div>

            <!-- Social Proof (Moved closer to CTAs) -->
            <div class="mb-10 text-white/85 text-sm md:text-base animate-fade-in animation-delay-600">
                <div class="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                    <span class="font-bold text-orange-400">50+ Prozesse automatisiert</span>
                    <span class="hidden sm:inline text-white/30">•</span>
                    <span class="font-semibold">Ø 15 Stunden/Woche eingespart</span>
                </div>
            </div>

            <!-- Trust Indicators -->
            <div
                class="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-white/80 text-sm animate-fade-in animation-delay-800">
                <div class="flex items-center gap-2">
                    <span class="text-orange-400 text-base">✓</span>
                    <span class="font-medium">Kostenlose Analyse</span>
                </div>
                <div class="flex items-center gap-2">
                    <span class="text-orange-400 text-base">✓</span>
                    <span class="font-medium">DSGVO-konform</span>
                </div>
                <div class="flex items-center gap-2">
                    <span class="text-orange-400 text-base">✓</span>
                    <span class="font-medium">In 7 Tagen live</span>
                </div>
            </div>
        </div>

        <!-- Hero Background Image with Overlay -->
        <div class="absolute inset-0 hero-bg-image"></div>
        <div class="absolute inset-0 hero-bg-overlay"></div>
    </section>
</template>
