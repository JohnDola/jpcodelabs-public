<script setup lang="ts">
// Real tech logos from CDN
const techStack = [
    {
        name: 'Vue.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        color: 'cyan',
        category: 'Frontend'
    },
    {
        name: 'React',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        color: 'cyan',
        category: 'Frontend'
    },
    {
        name: 'Angular',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
        color: 'orange',
        category: 'Frontend'
    },
    {
        name: '.NET',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
        color: 'purple',
        category: 'Backend'
    },
    {
        name: 'Node.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        color: 'orange',
        category: 'Backend'
    },
    {
        name: 'TypeScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        color: 'cyan',
        category: 'Language'
    },
    {
        name: 'Azure',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
        color: 'cyan',
        category: 'Cloud'
    },
    {
        name: 'Docker',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        color: 'cyan',
        category: 'DevOps'
    },
    {
        name: 'PostgreSQL',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        color: 'cyan',
        category: 'Database'
    },
    {
        name: 'MongoDB',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        color: 'orange',
        category: 'Database'
    },
    {
        name: 'Python',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        color: 'cyan',
        category: 'Language'
    }
]

// No-Code & AI Tools (custom logos via simple-icons or direct URLs)
const noCodeTools = [
    {
        name: 'n8n',
        description: 'Workflow Automation',
        logo: 'https://n8n.io/favicon.svg',
        color: 'orange'
    },
    {
        name: 'Make',
        description: 'Integration Platform',
        logo: 'https://www.make.com/en/favicon.svg',
        color: 'purple'
    },
    {
        name: 'Zapier',
        description: 'Automation',
        logo: 'https://cdn.simpleicons.org/zapier/FF4A00',
        color: 'orange'
    },
    {
        name: 'OpenAI',
        description: 'GPT & DALL-E',
        logo: 'https://cdn.simpleicons.org/openai/412991',
        color: 'cyan'
    },
    {
        name: 'Claude',
        description: 'Anthropic AI',
        logo: 'https://cdn.simpleicons.org/anthropic/191919',
        color: 'orange'
    },
    {
        name: 'Mistral',
        description: 'Open AI Models',
        logo: 'https://cdn.simpleicons.org/mistral/FF7000',
        color: 'orange'
    },
    {
        name: 'DeepSeek',
        description: 'Advanced AI',
        logo: 'https://cdn.simpleicons.org/databricks/FF3621',
        color: 'cyan'
    },
    {
        name: 'Qwen',
        description: 'Alibaba AI',
        logo: 'https://cdn.simpleicons.org/alibabacloud/FF6A00',
        color: 'purple'
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
                    <span class="font-semibold">Tech Stack</span>
                </div>

                <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                    Womit wir arbeiten
                </h2>
                <p class="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                    Moderne Technologien für zukunftssichere Automatisierungslösungen.
                </p>
            </div>

            <!-- Two-column layout: Code/Cloud | No-Code/AI -->
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-12">

                <!-- Left: Code & Cloud Technologies -->
                <div>
                    <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span
                            class="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-lg font-bold">
                            &lt;/&gt;
                        </span>
                        Code & Cloud
                    </h3>

                    <div class="grid grid-cols-3 gap-4">
                        <div v-for="tech in techStack" :key="tech.name"
                            class="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col items-center justify-center gap-3">
                            <div class="w-12 h-12 flex items-center justify-center">
                                <img :src="tech.logo" :alt="`${tech.name} Logo`"
                                    class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                    loading="lazy" />
                            </div>
                            <span class="text-xs font-semibold text-white/90 text-center">
                                {{ tech.name }}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Right: No-Code & AI Tools -->
                <div>
                    <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span
                            class="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white text-lg font-bold">
                            ⚡
                        </span>
                        No-Code & KI
                    </h3>

                    <div class="grid grid-cols-2 gap-4">
                        <div v-for="tool in noCodeTools" :key="tool.name"
                            class="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                            <div class="flex items-start gap-3">
                                <div
                                    class="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white/10 rounded-lg">
                                    <img :src="tool.logo" :alt="`${tool.name} Logo`"
                                        class="w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-110"
                                        loading="lazy" />
                                </div>
                                <div class="flex-1 min-w-0">
                                    <h4 class="text-sm font-bold text-white mb-1">
                                        {{ tool.name }}
                                    </h4>
                                    <p class="text-xs text-white/60">
                                        {{ tool.description }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom Info Box -->
            <div class="text-center">
                <div
                    class="inline-flex flex-col items-center gap-3 bg-gradient-to-r from-orange-600/20 to-purple-600/20 border border-orange-500/30 rounded-2xl px-8 md:px-12 py-6 backdrop-blur-sm">
                    <p class="text-lg md:text-xl font-bold text-white">
                        + viele weitere Tools je nach Anforderung
                    </p>
                    <p class="text-sm text-white/70">
                        Wir wählen immer die beste Technologie für dein spezifisches Problem
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
