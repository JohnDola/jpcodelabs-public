<script setup lang="ts">
import { Workflow, FileText, Inbox, BarChart3, Calendar, Database } from 'lucide-vue-next'
import Card from '../ui/Card.vue'
import type { UseCase } from '../../types'

const useCases: UseCase[] = [
    {
        id: '1',
        title: 'LeadFlow Automator',
        description: 'Leads automatisch ins CRM übertragen, Follow-up-E-Mails versenden und Verkaufschancen tracken.',
        icon: 'workflow',
    },
    {
        id: '2',
        title: 'InvoiceBot',
        description: 'Formular ausfüllen → PDF-Angebot generieren → automatisch per E-Mail versenden.',
        icon: 'file-text',
    },
    {
        id: '3',
        title: 'SmartInbox',
        description: 'E-Mails automatisch kategorisieren und als Aufgaben in Asana oder Trello erstellen.',
        icon: 'inbox',
    },
    {
        id: '4',
        title: 'ReportSync',
        description: 'Daten aus Google Sheets sammeln und automatisch als PDF-Wochenreport versenden.',
        icon: 'bar-chart',
    },
    {
        id: '5',
        title: 'SocialAutoPilot',
        description: 'Social-Media-Posts aus Sheets automatisch planen und auf allen Kanälen veröffentlichen.',
        icon: 'calendar',
    },
    {
        id: '6',
        title: 'DataSync Pro',
        description: 'Automatische Datensynchronisation zwischen verschiedenen Systemen in Echtzeit.',
        icon: 'database',
    },
]

const getIcon = (iconName: string) => {
    const icons: Record<string, any> = {
        workflow: Workflow,
        'file-text': FileText,
        inbox: Inbox,
        'bar-chart': BarChart3,
        calendar: Calendar,
        database: Database,
    }
    return icons[iconName] || Workflow
}
</script>

<template>
    <section class="py-16 md:py-24 px-6 bg-slate-50">
        <div class="max-w-5xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Automatisierungen, die wir bauen
                </h2>
                <p class="text-lg text-slate-600 max-w-2xl mx-auto">
                    Von Lead-Management bis Reporting – hier sind einige Beispiele, wie wir KMUs helfen, Zeit zu sparen.
                </p>
            </div>

            <!-- Use Cases Grid -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <Card v-for="useCase in useCases" :key="useCase.id">
                    <div class="flex flex-col h-full">
                        <!-- Icon -->
                        <div class="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                            <component :is="getIcon(useCase.icon)" class="w-7 h-7 text-orange-600" />
                        </div>

                        <!-- Content -->
                        <h3 class="text-lg font-bold text-slate-900 mb-2">
                            {{ useCase.title }}
                        </h3>
                        <p class="text-slate-600 text-sm flex-grow">
                            {{ useCase.description }}
                        </p>

                        <!-- Tag -->
                        <div class="mt-4 pt-4 border-t border-slate-100">
                            <span class="inline-flex items-center text-xs font-medium text-orange-600">
                                <span class="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                                Sofort einsetzbar
                            </span>
                        </div>
                    </div>
                </Card>
            </div>

            <!-- Closing Statement -->
            <div class="text-center">
                <div
                    class="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl px-8 py-6 max-w-3xl mx-auto">
                    <p class="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                        Wenn du eine dieser Aufgaben manuell erledigst,
                    </p>
                    <p class="text-2xl md:text-3xl font-bold text-red-600">
                        verlierst du täglich Geld.
                    </p>
                    <p class="text-sm text-slate-600 mt-4">
                        Jede Stunde manuelle Arbeit ist eine Stunde, die du nicht in dein Geschäft investieren kannst.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
