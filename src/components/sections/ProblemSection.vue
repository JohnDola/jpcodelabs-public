<script setup lang="ts">
import Card from '../ui/Card.vue'
import TimeIcon from '@/assets/illustrations/undraw_time-management_4ss6.svg'
import MailboxIcon from '@/assets/illustrations/undraw_mailbox_e7nc.svg'
import MultitaskingIcon from '@/assets/illustrations/undraw_multitasking_5lw1.svg'
</script>

<template>
    <section class="py-16 md:py-24 px-6 bg-white">
        <div class="max-w-5xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Kommt dir das bekannt vor?
                </h2>
                <p class="text-lg text-slate-600 max-w-2xl mx-auto">
                    Viele KMUs verschwenden täglich wertvolle Zeit mit manuellen Aufgaben, die längst automatisiert sein
                    könnten.
                </p>
            </div>

            <!-- Pain Points Grid -->
            <div class="grid md:grid-cols-3 gap-6 mb-12">
                <!-- Pain Point 1 -->
                <Card>
                    <div class="flex flex-col items-center text-center space-y-4">
                        <div class="w-32 h-32 flex items-center justify-center mb-2">
                            <img :src="TimeIcon" alt="Time Management" class="w-full h-full object-contain" />
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900">
                            Zeitverschwendung
                        </h3>
                        <p class="text-slate-600">
                            Du verschwendest Stunden mit manueller Dateneingabe, Copy-Paste zwischen Tools und
                            repetitiven Aufgaben?
                        </p>
                    </div>
                </Card>

                <!-- Pain Point 2 -->
                <Card>
                    <div class="flex flex-col items-center text-center space-y-4">
                        <div class="w-32 h-32 flex items-center justify-center mb-2">
                            <img :src="MultitaskingIcon" alt="Manual Processes" class="w-full h-full object-contain" />
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900">
                            Manuelle Prozesse
                        </h3>
                        <p class="text-slate-600">
                            Angebote und Rechnungen werden immer noch per Hand erstellt, formatiert und versendet?
                        </p>
                    </div>
                </Card>

                <!-- Pain Point 3 -->
                <Card>
                    <div class="flex flex-col items-center text-center space-y-4">
                        <div class="w-32 h-32 flex items-center justify-center mb-2">
                            <img :src="MailboxIcon" alt="Email Chaos" class="w-full h-full object-contain" />
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900">
                            E-Mail-Chaos
                        </h3>
                        <p class="text-slate-600">
                            Dein Team kämpft mit E-Mails statt Automatisierungen? Wichtige Anfragen gehen unter?
                        </p>
                    </div>
                </Card>
            </div>

            <!-- Closing Statement -->
            <div class="text-center">
                <div class="inline-block bg-orange-50 border-2 border-orange-200 rounded-2xl px-8 py-6">
                    <p class="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                        Das lässt sich automatisieren.
                    </p>
                    <p class="text-lg text-orange-700 font-medium">
                        In Tagen, nicht in Monaten.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
