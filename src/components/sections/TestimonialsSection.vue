<script setup lang="ts">
import { Quote } from 'lucide-vue-next'
import Card from '../ui/Card.vue'
import type { Testimonial } from '../../types'

const testimonials: Testimonial[] = [
    {
        id: '1',
        quote: 'Durch die E-Mail-Automation sparen wir jede Woche 5 Stunden. Das Team kann sich endlich auf kreative Arbeit konzentrieren statt auf manuelle Datenpflege.',
        metric: '5h/Woche gespart',
    },
    {
        id: '2',
        quote: 'Angebote erstellen ging früher ewig. Jetzt dauert es 2 Minuten – und sieht auch noch professioneller aus. Unsere Abschlussrate ist um 30% gestiegen.',
        metric: '80% schneller',
    },
    {
        id: '3',
        quote: 'Die automatisierten Follow-ups haben unsere Lead-Conversion verdoppelt. Kein Lead geht mehr verloren, weil wir vergessen haben nachzufassen.',
        metric: '2× mehr Leads',
    },
]
</script>

<template>
    <section class="py-16 md:py-24 px-6 bg-white">
        <div class="max-w-5xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Das sagen unsere Kunden
                </h2>
                <p class="text-lg text-slate-600 max-w-2xl mx-auto">
                    Echte Ergebnisse von KMUs, die ihre Prozesse automatisiert haben.
                </p>
            </div>

            <!-- Testimonials Grid -->
            <div class="grid md:grid-cols-3 gap-6">
                <Card v-for="testimonial in testimonials" :key="testimonial.id">
                    <div class="flex flex-col h-full">
                        <!-- Quote Icon -->
                        <div class="mb-4">
                            <Quote class="w-8 h-8 text-emerald-500" />
                        </div>

                        <!-- Quote Text -->
                        <p class="text-slate-700 mb-6 flex-grow leading-relaxed">
                            "{{ testimonial.quote }}"
                        </p>

                        <!-- Metric Badge -->
                        <div class="pt-4 border-t border-slate-100">
                            <div class="inline-flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-lg">
                                <div class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                <span class="text-sm font-bold text-emerald-700">
                                    {{ testimonial.metric }}
                                </span>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            <!-- Trust Indicators -->
            <div class="mt-12 pt-12 border-t border-slate-200">
                <div class="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                        <div class="text-4xl font-bold text-emerald-600 mb-2">10+</div>
                        <p class="text-slate-600">Jahre Erfahrung</p>
                    </div>
                    <div>
                        <div class="text-4xl font-bold text-emerald-600 mb-2">50+</div>
                        <p class="text-slate-600">Automatisierungen gebaut</p>
                    </div>
                    <div>
                        <div class="text-4xl font-bold text-emerald-600 mb-2">100%</div>
                        <p class="text-slate-600">Kundenzufriedenheit</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
