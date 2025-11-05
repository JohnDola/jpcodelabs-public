<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
    <div class="min-h-screen bg-slate-50">
        <!-- Header -->
        <header class="bg-white border-b border-slate-200 py-6 px-6">
            <div class="max-w-4xl mx-auto">
                <button @click="router.push('/')"
                    class="inline-flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors">
                    <ArrowLeft class="w-5 h-5" />
                    <span>Zurück zur Startseite</span>
                </button>
            </div>
        </header>

        <!-- Content -->
        <main class="py-12 px-6">
            <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
                <h1 class="text-4xl font-bold text-slate-900 mb-8">Impressum</h1>

                <div class="prose prose-slate max-w-none">
                    <h2>Software Agentur</h2>
                    <p>
                        JP Codelabs GmbH<br />
                        Im Kleinen Eschle 15<br />
                        78054 Villingen-Schwenningen<br />
                        Deutschland
                    </p>

                    <h2>Kontakt</h2>
                    <p>
                        E-Mail: <a href="mailto:contact.me@jpcodelabs.de"
                            class="text-emerald-600 hover:text-emerald-700">contact.me@jpcodelabs.de</a><br />
                        Phone: <a href="tel:+4915143233704" class="text-emerald-600 hover:text-emerald-700">+49
                            15143233704</a>
                    </p>

                    <h2>Vertretungsberechtigte Personen</h2>
                    <p>
                        Vertretungsberechtigt:<br />
                        Paul Dederer (Geschäftsführer)<br />
                        John Marco Dola (Geschäftsführer)
                    </p>

                    <h2>Angaben zum Unternehmen</h2>
                    <p>
                        Umsatzsteuer Identifikationsnummer (USt-ID): DE367588952
                    </p>

                    <h2>Berufshaftpflichtversicherung</h2>
                    <p>
                        Hiscox SA Niederlassung für Deutschland<br />
                        Hauptbevollmächtigter: Markus Niederreiner<br />
                        Adresse: Bernhard-Wicki-Straße 3, 80636 München
                    </p>

                    <h2>Register und Registernummer</h2>
                    <p>
                        Handelsregister<br />
                        Geführt bei: Amtsgericht Freiburg<br />
                        Nummer: HRB 730741
                    </p>

                    <h2>Social Media und andere Onlinepräsenzen</h2>
                    <p>
                        Dieses Impressum gilt auch für die folgenden Social-Media-Präsenzen und Onlineprofile:<br />
                        <a href="https://www.linkedin.com/company/jp-codelabs/" target="_blank"
                            rel="noopener noreferrer" class="text-emerald-600 hover:text-emerald-700">
                            https://www.linkedin.com/company/jp-codelabs/
                        </a>
                    </p>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
.prose h2 {
    @apply text-2xl font-bold text-slate-900 mt-8 mb-4;
}

.prose p {
    @apply text-slate-700 leading-relaxed mb-4;
}

.prose a {
    @apply underline;
}
</style>
