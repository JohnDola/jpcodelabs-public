<script setup lang="ts">
import { Linkedin, Award, Clock, Users } from 'lucide-vue-next'
import dola from '@/assets/team/dola3.png'
import dederer from '@/assets/team/dederer.png'

interface TeamMember {
    name: string
    role: string
    bio: string
    linkedin: string
    photo: string
    color: 'orange' | 'cyan'
}

const team: TeamMember[] = [
    {
        name: 'John Marco Dola',
        role: 'Co-Founder & Lead Architect',
        bio: 'Als Gründer und Lead-Architekt von JPCodelabs begleite ich Unternehmen dabei, ihre Prozesse durch intelligente Automatisierung zu transformieren. Mit über 10 Jahren Erfahrung in Fullstack-Entwicklung bringe ich technische Expertise und pragmatisches Denken zusammen.',
        linkedin: 'https://www.linkedin.com/in/john-dola/',
        photo: dola,
        color: 'orange'
    },
    {
        name: 'Paul Dederer',
        role: 'Co-Founder & Technology Lead',
        bio: 'Als Co-Founder von JPCodelabs verbinde ich moderne Cloud-Technologien mit praktischen Business-Anforderungen. Meine Erfahrung hilft mir, skalierbare Automatisierungslösungen zu entwickeln, die echten Mehrwert schaffen.',
        linkedin: 'https://www.linkedin.com/in/paul-dederer/',
        photo: dederer,
        color: 'cyan'
    }
]
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
                    <span class="font-semibold">Unser Team</span>
                </div>

                <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                    Die Köpfe hinter JPCodelabs
                </h2>
                <p class="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    Zwei erfahrene Entwickler mit einer Mission: KMUs durch smarte Automatisierung zum Erfolg verhelfen.
                </p>
            </div>

            <!-- Team Members Grid -->
            <div class="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">

                <article v-for="member in team" :key="member.name"
                    class="group bg-white border rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl motion-safe:hover:-translate-y-1"
                    :class="{
                        'border-orange-200/60 hover:border-orange-300': member.color === 'orange',
                        'border-cyan-200/60 hover:border-cyan-300': member.color === 'cyan'
                    }">
                    <!-- Photo Section -->
                    <div class="relative aspect-[4/3] overflow-hidden">
                        <img :src="member.photo" :alt="`Foto von ${member.name}`"
                            class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            loading="lazy" />
                        <!-- Gradient Overlay -->
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>

                        <!-- LinkedIn Badge on Photo -->
                        <a :href="member.linkedin" target="_blank" rel="noopener noreferrer"
                            class="absolute bottom-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 motion-safe:group-hover:scale-110"
                            :class="{
                                'bg-orange-500/90 hover:bg-orange-600/90': member.color === 'orange',
                                'bg-cyan-500/90 hover:bg-cyan-600/90': member.color === 'cyan'
                            }">
                            <Linkedin class="w-6 h-6 text-white" />
                        </a>
                    </div>

                    <!-- Content Section -->
                    <div class="p-6 md:p-8">
                        <!-- Name & Role -->
                        <div class="mb-4">
                            <h3 class="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                                {{ member.name }}
                            </h3>
                            <p class="text-base md:text-lg font-semibold" :class="{
                                'text-orange-600': member.color === 'orange',
                                'text-cyan-600': member.color === 'cyan'
                            }">
                                {{ member.role }}
                            </p>
                        </div>

                        <!-- Bio -->
                        <p class="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
                            {{ member.bio }}
                        </p>

                        <!-- LinkedIn Link (Desktop) -->
                        <a :href="member.linkedin" target="_blank" rel="noopener noreferrer"
                            class="inline-flex items-center gap-2 text-sm font-semibold transition-colors group/link"
                            :class="{
                                'text-orange-600 hover:text-orange-700': member.color === 'orange',
                                'text-cyan-600 hover:text-cyan-700': member.color === 'cyan'
                            }">
                            <Linkedin class="w-4 h-4 motion-safe:group-hover/link:scale-110 transition-transform" />
                            <span>LinkedIn Profil</span>
                        </a>
                    </div>
                </article>
            </div>

            <!-- Company Stats -->
            <div class="grid md:grid-cols-3 gap-6 md:gap-8">

                <!-- Stat 1 -->
                <div
                    class="bg-white border border-orange-200/60 rounded-2xl p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                    <div class="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Award class="w-7 h-7 text-orange-600" />
                    </div>
                    <div class="text-4xl md:text-5xl font-extrabold text-orange-600 mb-2">10+</div>
                    <p class="text-base font-semibold text-slate-700">Jahre Erfahrung</p>
                    <p class="text-sm text-slate-500 mt-1">in Fullstack-Entwicklung</p>
                </div>

                <!-- Stat 2 -->
                <div
                    class="bg-white border border-cyan-200/60 rounded-2xl p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                    <div class="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Users class="w-7 h-7 text-cyan-600" />
                    </div>
                    <div class="text-4xl md:text-5xl font-extrabold text-cyan-600 mb-2">100%</div>
                    <p class="text-base font-semibold text-slate-700">Pragmatisch</p>
                    <p class="text-sm text-slate-500 mt-1">Lösungen, die funktionieren</p>
                </div>

                <!-- Stat 3 -->
                <div
                    class="bg-white border border-purple-200/60 rounded-2xl p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                    <div class="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Clock class="w-7 h-7 text-purple-600" />
                    </div>
                    <div class="text-4xl md:text-5xl font-extrabold text-purple-600 mb-2">24h</div>
                    <p class="text-base font-semibold text-slate-700">Response Time</p>
                    <p class="text-sm text-slate-500 mt-1">Schnelle Kommunikation</p>
                </div>
            </div>
        </div>
    </section>
</template>
