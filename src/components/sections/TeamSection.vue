<script setup lang="ts">
import { Linkedin } from 'lucide-vue-next'
import Card from '../ui/Card.vue'

interface TeamMember {
    name: string
    role: string
    bio: string
    linkedin: string
    initials: string
}

const team: TeamMember[] = [
    {
        name: 'John Marco Dola',
        role: 'Co-Founder & Lead Architect',
        bio: 'Als Gründer und Lead-Architekt von JPCodelabs begleite ich Unternehmen dabei, ihre Prozesse durch intelligente Automatisierung zu transformieren. Mit über 10 Jahren Erfahrung in Fullstack-Entwicklung bringe ich technische Expertise und pragmatisches Denken zusammen.',
        linkedin: 'https://www.linkedin.com/in/john-dola/',
        initials: 'JD',
    },
    {
        name: 'Paul Dederer',
        role: 'Co-Founder & Technology Lead',
        bio: 'Als Co-Founder von JPCodelabs verbinde ich moderne Cloud-Technologien mit praktischen Business-Anforderungen. Meine Erfahrung hilft mir, skalierbare Automatisierungslösungen zu entwickeln, die echten Mehrwert schaffen.',
        linkedin: 'https://www.linkedin.com/in/paul-dederer/',
        initials: 'PD',
    },
]
</script>

<template>
    <section class="py-16 md:py-24 px-6 bg-white">
        <div class="max-w-5xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Die Köpfe hinter JPCodelabs
                </h2>
                <p class="text-lg text-slate-600 max-w-2xl mx-auto">
                    Zwei erfahrene Entwickler mit einer Mission: KMUs durch smarte Automatisierung zum Erfolg verhelfen.
                </p>
            </div>

            <!-- Team Grid -->
            <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card v-for="member in team" :key="member.name" :hover="false">
                    <div class="flex flex-col items-center text-center space-y-4">
                        <!-- Avatar -->
                        <div
                            class="w-32 h-32 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                            <span class="text-white font-bold text-4xl">{{ member.initials }}</span>
                        </div>

                        <!-- Name & Role -->
                        <div>
                            <h3 class="text-2xl font-bold text-slate-900 mb-1">
                                {{ member.name }}
                            </h3>
                            <p class="text-orange-600 font-semibold">
                                {{ member.role }}
                            </p>
                        </div>

                        <!-- Bio -->
                        <p class="text-slate-600 leading-relaxed">
                            {{ member.bio }}
                        </p>

                        <!-- LinkedIn Link -->
                        <a :href="member.linkedin" target="_blank" rel="noopener noreferrer"
                            class="inline-flex items-center gap-2 text-slate-700 hover:text-orange-600 transition-colors group">
                            <Linkedin class="w-5 h-5 group-hover:scale-110 transition-transform" />
                            <span class="font-medium">LinkedIn Profil</span>
                        </a>
                    </div>
                </Card>
            </div>

            <!-- Company Values -->
            <div class="mt-16 grid md:grid-cols-3 gap-6 text-center">
                <div class="p-6">
                    <div class="text-4xl font-bold text-orange-600 mb-2">10+</div>
                    <p class="text-slate-600 font-medium">Jahre Erfahrung</p>
                </div>
                <div class="p-6">
                    <div class="text-4xl font-bold text-orange-600 mb-2">100%</div>
                    <p class="text-slate-600 font-medium">Pragmatisch</p>
                </div>
                <div class="p-6">
                    <div class="text-4xl font-bold text-orange-600 mb-2">24h</div>
                    <p class="text-slate-600 font-medium">Response Time</p>
                </div>
            </div>
        </div>
    </section>
</template>
