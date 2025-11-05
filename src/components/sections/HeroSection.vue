<script setup lang="ts">
import { ArrowRight, Play } from 'lucide-vue-next'
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
            <div class="mb-6">
                <span class="text-orange-600  font-bold text-lg tracking-wider uppercase">
                    <span class="text-white font-thin">Automate. </span>
                    <span class="font-semibold text-primary-600">Innovate. </span>
                    <span class="font-black text-primary-500">Accelerate. </span>
                </span>
            </div>

            <!-- Main Headline -->
            <h1
                class="text-5xl  md:text-6xl md:leading-tight lg:text-7xl lg:leading-tight font-extralight text-white leading-tight mb-6 drop-shadow-lg">
                Automatisiere dein Business<br>
                ohne <span class="text-orange-600 font-bold">Stress</span><br>
                ohne <span class="text-orange-600 font-bold">Entwicklerteam</span>
            </h1>

            <!-- Subheadline -->
            <div
                class="text-xl md:text-2xl md:leading-relaxed text-white leading-relaxed mb-12 max-w-3xl mx-auto drop-shadow-md">
                Wir verwandeln deine manuellen Prozesse in smarte Abläufe mit
                <span
                    class="inline-block bg-slate-800/40 px-3 py-1 transform -skew-x-6 rounded-md border border-orange-400/50">No-Code</span>,
                <span
                    class="inline-block bg-slate-800/40 px-3 py-1 transform -skew-x-6 rounded-md border border-cyan-400/50">KI</span>
                &
                <span
                    class="inline-block bg-slate-800/40 px-3 py-1 transform -skew-x-6 rounded-md border border-purple-400/50">Custom
                    Code</span>.
                <p
                    class="inline-block bg-gradient-to-r from-slate-800/40 to-slate-900/40 px-4 py-2 transform mt-6 -skew-x-3 rounded-md border border-cyan-300/50 font-semibold text-secondary-emerald-100">
                    Mehr Fokus. Weniger Klicks. Spürbar mehr Zeit.
                </p>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-8 justify-center mb-12">
                <Button variant="primary" class="px-8 py-4 text-lg" @click="scrollToContact">
                    Prozess-Check anfragen
                    <ArrowRight class="inline-block ml-2 w-6 h-6" />
                </Button>
                <Button variant="secondary" class="px-8 py-4 text-lg ">
                    <Play class="inline-block mr-2 w-6 h-6" />
                    2-Minuten-Demo ansehen
                </Button>
            </div>

            <!-- Trust Indicators -->
            <div class="flex flex-wrap justify-center items-center gap-8  text-white ">
                <div class="flex items-center gap-2 ">
                    <span class="font-bold text-orange-600 text-xl">✓</span>
                    <span class="font-medium">Kostenlose Analyse</span>
                </div>
                <div class="flex items-center gap-2">
                    <span class="text-orange-600 font-bold text-xl">✓</span>
                    <span class="font-medium">DSGVO-konform</span>
                </div>
                <div class="flex items-center gap-2">
                    <span class="text-orange-600 font-bold text-xl">✓</span>
                    <span class="font-medium">In 7 Tagen live</span>
                </div>
            </div>
        </div>

        <!-- Hero Background Image with Overlay -->
        <div class="absolute inset-0 hero-bg-image"></div>
        <div class="absolute inset-0 hero-bg-overlay"></div>
    </section>
</template>
