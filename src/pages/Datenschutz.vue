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
                <h1 class="text-4xl font-bold text-slate-900 mb-8">Datenschutzerklärung</h1>

                <div class="prose prose-slate max-w-none space-y-8">
                    <!-- Section 1 -->
                    <section>
                        <h2>1. Datenschutz auf einen Blick</h2>

                        <h3>Allgemeine Hinweise</h3>
                        <p>
                            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten
                            sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                        </p>

                        <h3>Datenerfassung auf dieser Website</h3>
                        <h4>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                        <p>
                            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                            Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser
                            Datenschutzerklärung entnehmen.
                        </p>

                        <h4>Wie erfassen wir Ihre Daten?</h4>
                        <p>
                            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es
                            sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                        </p>
                        <p>
                            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch
                            unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser,
                            Betriebssystem oder Uhrzeit des Seitenaufrufs).
                        </p>
                    </section>

                    <!-- Section 2 -->
                    <section>
                        <h2>2. Hosting</h2>
                        <p>
                            Wir hosten die Inhalte unserer Website bei GitHub Pages. Anbieter ist die GitHub Inc., 88
                            Colin P Kelly Jr St, San Francisco, CA 94107, USA.
                        </p>
                        <p>
                            Wenn Sie unsere Website besuchen, erfasst GitHub verschiedene Logfiles inklusive Ihrer
                            IP-Adressen. Weitere Informationen entnehmen Sie der Datenschutzerklärung von GitHub.
                        </p>
                    </section>

                    <!-- Section 3 -->
                    <section>
                        <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>

                        <h3>Datenschutz</h3>
                        <p>
                            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
                            behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
                            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                        </p>

                        <h3>Hinweis zur verantwortlichen Stelle</h3>
                        <p>
                            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                            JP Codelabs GmbH<br />
                            Im kleinen Eschle 15<br />
                            78054 Villingen-Schwenningen<br /><br />
                            Telefon: +49 (0) 151 43233704<br />
                            E-Mail: contact.me@jpcodelabs.de
                        </p>

                        <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                        <p>
                            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie
                            können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis
                            zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                        </p>

                        <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                        <p>
                            Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
                            Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
                            Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.
                        </p>

                        <h3>Recht auf Datenübertragbarkeit</h3>
                        <p>
                            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines
                            Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen,
                            maschinenlesbaren Format aushändigen zu lassen.
                        </p>

                        <h3>Auskunft, Berichtigung und Löschung</h3>
                        <p>
                            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
                            unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und
                            Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder
                            Löschung dieser Daten.
                        </p>
                    </section>

                    <!-- Section 4 -->
                    <section>
                        <h2>4. Datenerfassung auf dieser Website</h2>

                        <h3>Kontaktformular</h3>
                        <p>
                            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                            Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                            Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                        </p>
                        <p>
                            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern
                            Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
                            vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung
                            auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten
                            Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a
                            DSGVO).
                        </p>
                    </section>

                    <!-- Footer -->
                    <div class="pt-8 mt-8 border-t border-slate-200">
                        <p class="text-sm text-slate-500">
                            Quelle: <a href="https://www.datenschutzerklaerung.de" target="_blank"
                                rel="noopener noreferrer" class="text-emerald-600 hover:text-emerald-700">
                                https://www.datenschutzerklaerung.de
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
.prose h2 {
    @apply text-2xl font-bold text-slate-900 mt-8 mb-4;
}

.prose h3 {
    @apply text-xl font-semibold text-slate-900 mt-6 mb-3;
}

.prose h4 {
    @apply text-lg font-semibold text-slate-800 mt-4 mb-2;
}

.prose p {
    @apply text-slate-700 leading-relaxed mb-4;
}

.prose a {
    @apply underline;
}

.prose section {
    @apply mb-8;
}
</style>
