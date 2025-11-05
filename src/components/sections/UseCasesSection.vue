<script setup lang="ts">
import { Workflow, FileText, Inbox, BarChart3, Calendar, Database, ArrowRight } from 'lucide-vue-next'

// Use case images
const images = {
    leadflow: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop', // CRM/Dashboard
    invoice: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=600&h=400&fit=crop', // Invoice/Document
    inbox: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop', // Email
    report: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop', // Analytics
    social: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop', // Social Media
    datasync: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop' // Data/Sync
}

const useCases = [
    {
        id: '1',
        title: 'LeadFlow Automator',
        description: 'Leads automatisch ins CRM, Follow-ups per E-Mail, Verkaufschancen tracken.',
        icon: Workflow,
        image: images.leadflow,
        color: 'orange'
    },
    {
        id: '2',
        title: 'InvoiceBot',
        description: 'Formular → PDF-Angebot → automatischer E-Mail-Versand.',
        icon: FileText,
        image: images.invoice,
        color: 'cyan'
    },
    {
        id: '3',
        title: 'SmartInbox',
        description: 'E-Mails kategorisieren und als Aufgaben in Asana/Trello erstellen.',
        icon: Inbox,
        image: images.inbox,
        color: 'purple'
    },
    {
        id: '4',
        title: 'ReportSync',
        description: 'Google Sheets → automatischer PDF-Wochenreport per E-Mail.',
        icon: BarChart3,
        image: images.report,
        color: 'orange'
    },
    {
        id: '5',
        title: 'SocialAutoPilot',
        description: 'Posts aus Sheets automatisch planen und auf allen Kanälen veröffentlichen.',
        icon: Calendar,
        image: images.social,
        color: 'cyan'
    },
    {
        id: '6',
        title: 'DataSync Pro',
        description: 'Echtzeit-Datensynchronisation zwischen verschiedenen Systemen.',
        icon: Database,
        image: images.datasync,
        color: 'purple'
    }
]

const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
    }
}
</script>

<template>
    <!-- Light section for alternating pattern -->
    <section
        class="relative py-20 md:py-32 px-6 md:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">

        <div class="max-w-7xl mx-auto relative z-10">

            <!-- Section Header -->
            <div class="text-center mb-16 md:mb-20">
                <!-- Badge -->
                <div
                    class="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-orange-700 bg-orange-50 border border-orange-200 rounded-full px-3 py-1 mb-6">
                    <span class="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
                    <span class="font-semibold">Use Cases</span>
                </div>

                <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                    Automatisierungen, die wir bauen
                </h2>
                <p class="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    Von Lead-Management bis Reporting – konkrete Beispiele, wie wir KMUs helfen, Zeit zu sparen.
                </p>
            </div>

            <!-- Use Cases Grid with Images -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">

                <article v-for="useCase in useCases" :key="useCase.id"
                    class="group bg-white border rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg motion-safe:hover:-translate-y-1"
                    :class="{
                        'border-orange-200/60 hover:border-orange-300': useCase.color === 'orange',
                        'border-cyan-200/60 hover:border-cyan-300': useCase.color === 'cyan',
                        'border-purple-200/60 hover:border-purple-300': useCase.color === 'purple'
                    }">
                    <!-- Image -->
                    <div class="aspect-[3/2] overflow-hidden relative">
                        <img :src="useCase.image" :alt="`${useCase.title} Automatisierung`"
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy" decoding="async" />
                        <!-- Icon overlay -->
                        <div class="absolute top-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm shadow-lg"
                            :class="{
                                'bg-orange-500/90': useCase.color === 'orange',
                                'bg-cyan-500/90': useCase.color === 'cyan',
                                'bg-purple-500/90': useCase.color === 'purple'
                            }">
                            <component :is="useCase.icon" class="w-6 h-6 text-white" />
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="p-5 md:p-6">
                        <h3 class="text-lg md:text-xl font-bold text-slate-900 mb-2">
                            {{ useCase.title }}
                        </h3>
                        <p class="text-sm md:text-base text-slate-600 leading-relaxed">
                            {{ useCase.description }}
                        </p>

                        <!-- Tag -->
                        <div class="mt-4 pt-4 border-t border-slate-100">
                            <span class="inline-flex items-center text-xs font-semibold" :class="{
                                'text-orange-600': useCase.color === 'orange',
                                'text-cyan-600': useCase.color === 'cyan',
                                'text-purple-600': useCase.color === 'purple'
                            }">
                                <span class="w-2 h-2 rounded-full mr-2" :class="{
                                    'bg-orange-500': useCase.color === 'orange',
                                    'bg-cyan-500': useCase.color === 'cyan',
                                    'bg-purple-500': useCase.color === 'purple'
                                }"></span>
                                Sofort einsetzbar
                            </span>
                        </div>
                    </div>
                </article>
            </div>

            <!-- Closing Statement with CTA -->
            <div class="text-center">
                <div
                    class="inline-flex flex-col items-center gap-6 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl px-8 md:px-12 py-8 md:py-10 max-w-3xl">
                    <div>
                        <p class="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                            Wenn du eine dieser Aufgaben manuell erledigst,
                        </p>
                        <p class="text-2xl md:text-3xl font-extrabold text-red-600 mb-3">
                            verlierst du täglich Geld.
                        </p>
                        <p class="text-sm md:text-base text-slate-600">
                            Jede Stunde manuelle Arbeit ist eine Stunde, die du nicht in dein Geschäft investieren
                            kannst.
                        </p>
                    </div>

                    <button @click="scrollToContact"
                        class="group flex items-center gap-2 px-8 py-4 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/50">
                        <span>Automatisierung starten</span>
                        <ArrowRight
                            class="w-5 h-5 motion-safe:group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
