<script setup lang="ts">
import Card from '../ui/Card.vue'
import SpeedIcon from '@/assets/illustrations/undraw_to-the-stars_tz9v.svg'
import CostIcon from '@/assets/illustrations/undraw_savings_uwjn.svg'
import SecurityIcon from '@/assets/illustrations/undraw_security-on_3ykb.svg'
import SupportIcon from '@/assets/illustrations/undraw_active-support_v6g0.svg'
</script>

<template>
    <section class="py-16 md:py-24 px-6 bg-slate-50">
        <div class="max-w-5xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Unsere Lösung: Automatisierung, die funktioniert
                </h2>
                <p class="text-lg text-slate-700 max-w-3xl mx-auto">
                    Wir bauen kleine, leistungsstarke Automatisierungen für deinen Geschäftsalltag:
                    <span class="font-semibold text-orange-600">Keine Großprojekte. Kein IT-Chaos. Einfach klare
                        Ergebnisse.</span>
                </p>
            </div>

            <!-- Benefits Grid -->
            <div class="grid md:grid-cols-2 gap-6">
                <!-- Benefit 1 -->
                <Card>
                    <div class="flex gap-4">
                        <div class="flex-shrink-0">
                            <div class="w-20 h-20 flex items-center justify-center">
                                <img :src="SpeedIcon" alt="Speed" class="w-full h-full object-contain" />
                            </div>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-slate-900 mb-2">
                                In 7 Tagen von Idee zu fertiger Lösung
                            </h3>
                            <p class="text-slate-600">
                                Schnelle Umsetzung mit klaren Meilensteinen. Du siehst sofort Ergebnisse, keine
                                monatelangen Projekte.
                            </p>
                        </div>
                    </div>
                </Card>

                <!-- Benefit 2 -->
                <Card>
                    <div class="flex gap-4">
                        <div class="flex-shrink-0">
                            <div class="w-20 h-20 flex items-center justify-center">
                                <img :src="CostIcon" alt="Cost Efficiency" class="w-full h-full object-contain" />
                            </div>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-slate-900 mb-2">
                                Individuell, aber kosteneffizient
                            </h3>
                            <p class="text-slate-600">
                                Durch No-Code & KI bauen wir maßgeschneiderte Lösungen zu einem Bruchteil der Kosten
                                einer klassischen Entwicklung.
                            </p>
                        </div>
                    </div>
                </Card>

                <!-- Benefit 3 -->
                <Card>
                    <div class="flex gap-4">
                        <div class="flex-shrink-0">
                            <div class="w-20 h-20 flex items-center justify-center">
                                <img :src="SecurityIcon" alt="Security" class="w-full h-full object-contain" />
                            </div>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-slate-900 mb-2">
                                DSGVO-konform & transparent
                            </h3>
                            <p class="text-slate-600">
                                Alle Automatisierungen sind datenschutzkonform dokumentiert. Du behältst die volle
                                Kontrolle über deine Daten.
                            </p>
                        </div>
                    </div>
                </Card>

                <!-- Benefit 4 -->
                <Card>
                    <div class="flex gap-4">
                        <div class="flex-shrink-0">
                            <div class="w-20 h-20 flex items-center justify-center">
                                <img :src="SupportIcon" alt="Support" class="w-full h-full object-contain" />
                            </div>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-slate-900 mb-2">
                                Direkter Draht zum Entwickler
                            </h3>
                            <p class="text-slate-600">
                                Kein Agentur-Blabla, keine Projektmanager-Kette. Du sprichst direkt mit dem Entwickler,
                                der deine Lösung baut.
                            </p>
                        </div>
                    </div>
                </Card>
            </div>

            <!-- Value Proposition -->
            <div class="mt-12 text-center">
                <div class="inline-block bg-white border-2 border-orange-200 rounded-2xl px-8 py-6 shadow-sm">
                    <p class="text-lg text-slate-700 mb-2">
                        <span class="font-bold text-orange-600">Spare 5+ Stunden pro Woche</span> und konzentriere
                        dich auf das, was wirklich zählt:
                    </p>
                    <p class="text-xl font-bold text-slate-900">
                        Dein Geschäft wachsen lassen.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
