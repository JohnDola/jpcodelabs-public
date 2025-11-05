<script setup lang="ts">
import { Quote, TrendingUp, Clock, Users } from 'lucide-vue-next'

const testimonials = [
    {
        id: '1',
        quote: 'Durch die E-Mail-Automation sparen wir jede Woche 5 Stunden. Das Team kann sich endlich auf kreative Arbeit konzentrieren statt auf manuelle Datenpflege.',
        metric: '5h/Woche gespart',
        color: 'orange',
        icon: Clock
    },
    {
        id: '2',
        quote: 'Angebote erstellen ging früher ewig. Jetzt dauert es 2 Minuten – und sieht auch noch professioneller aus. Unsere Abschlussrate ist um 30% gestiegen.',
        metric: '80% schneller',
        color: 'cyan',
        icon: TrendingUp
    },
    {
        id: '3',
        quote: 'Die automatisierten Follow-ups haben unsere Lead-Conversion verdoppelt. Kein Lead geht mehr verloren, weil wir vergessen haben nachzufassen.',
        metric: '2× mehr Leads',
        color: 'purple',
        icon: Users
    }
]
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

        <div class="max-w-7xl mx-auto relative z-10">

            <!-- Section Header -->
            <div class="text-center mb-16 md:mb-20">
                <!-- Badge -->
                <div
                    class="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-orange-400 bg-orange-950/50 border border-orange-800/30 rounded-full px-3 py-1 mb-6">
                    <span class="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
                    <span class="font-semibold">Erfolgsgeschichten</span>
                </div>

                <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                    Das sagen unsere Kunden
                </h2>
                <p class="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                    Echte Ergebnisse von KMUs, die ihre Prozesse automatisiert haben.
                </p>
            </div>

            <!-- Testimonials Grid -->
            <div class="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">

                <article v-for="testimonial in testimonials" :key="testimonial.id"
                    class="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:bg-white/10 hover:border-white/20 motion-safe:hover:-translate-y-1 flex flex-col">
                    <!-- Quote Icon -->
                    <div class="mb-6">
                        <div class="w-12 h-12 rounded-xl flex items-center justify-center" :class="{
                            'bg-orange-500/20': testimonial.color === 'orange',
                            'bg-cyan-500/20': testimonial.color === 'cyan',
                            'bg-purple-500/20': testimonial.color === 'purple'
                        }">
                            <Quote class="w-6 h-6" :class="{
                                'text-orange-400': testimonial.color === 'orange',
                                'text-cyan-400': testimonial.color === 'cyan',
                                'text-purple-400': testimonial.color === 'purple'
                            }" />
                        </div>
                    </div>

                    <!-- Quote Text -->
                    <p class="text-base text-white/90 mb-6 flex-grow leading-relaxed">
                        "{{ testimonial.quote }}"
                    </p>

                    <!-- Metric Badge -->
                    <div class="pt-6 border-t border-white/10">
                        <div class="inline-flex items-center gap-3 px-4 py-3 rounded-xl" :class="{
                            'bg-orange-500/20': testimonial.color === 'orange',
                            'bg-cyan-500/20': testimonial.color === 'cyan',
                            'bg-purple-500/20': testimonial.color === 'purple'
                        }">
                            <component :is="testimonial.icon" class="w-5 h-5" :class="{
                                'text-orange-400': testimonial.color === 'orange',
                                'text-cyan-400': testimonial.color === 'cyan',
                                'text-purple-400': testimonial.color === 'purple'
                            }" />
                            <span class="text-sm font-bold" :class="{
                                'text-orange-300': testimonial.color === 'orange',
                                'text-cyan-300': testimonial.color === 'cyan',
                                'text-purple-300': testimonial.color === 'purple'
                            }">
                                {{ testimonial.metric }}
                            </span>
                        </div>
                    </div>
                </article>
            </div>

            <!-- Trust Indicators -->
            <div class="grid md:grid-cols-3 gap-8 text-center">

                <div class="bg-white/5 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-6 md:p-8">
                    <div class="text-5xl md:text-6xl font-extrabold text-orange-400 mb-3">10+</div>
                    <p class="text-base font-semibold text-white mb-1">Jahre Erfahrung</p>
                    <p class="text-sm text-white/60">in Automatisierung & Entwicklung</p>
                </div>

                <div class="bg-white/5 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 md:p-8">
                    <div class="text-5xl md:text-6xl font-extrabold text-cyan-400 mb-3">50+</div>
                    <p class="text-base font-semibold text-white mb-1">Automatisierungen gebaut</p>
                    <p class="text-sm text-white/60">für zufriedene Kunden</p>
                </div>

                <div class="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 md:p-8">
                    <div class="text-5xl md:text-6xl font-extrabold text-purple-400 mb-3">100%</div>
                    <p class="text-base font-semibold text-white mb-1">Kundenzufriedenheit</p>
                    <p class="text-sm text-white/60">messbare Ergebnisse garantiert</p>
                </div>
            </div>
        </div>
    </section>
</template>
