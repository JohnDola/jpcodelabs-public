<script setup lang="ts">
import { Linkedin } from 'lucide-vue-next'
</script>

<template>
    <footer class="bg-slate-900 text-slate-300 py-12 px-6">
        <div class="max-w-5xl mx-auto">
            <div class="grid md:grid-cols-3 gap-8 mb-8">
                <!-- Company Info -->
                <div>
                    <h3 class="text-white font-bold text-lg mb-4">JPCodelabs</h3>
                    <p class="text-sm leading-relaxed mb-4">
                        Automatisiere dein Business – schnell & messbar.
                    </p>
                    <p class="text-sm text-slate-400">
                        Wir helfen KMUs, wiederkehrende Prozesse mit No-Code, KI und Code zu automatisieren.
                    </p>
                </div>

                <!-- Quick Links -->
                <div>
                    <h3 class="text-white font-bold text-lg mb-4">Rechtliches</h3>
                    <ul class="space-y-2 text-sm">
                        <li>
                            <router-link to="/impressum" class="hover:text-emerald-400 transition-colors duration-200">
                                Impressum
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/datenschutz"
                                class="hover:text-emerald-400 transition-colors duration-200">
                                Datenschutz
                            </router-link>
                        </li>
                    </ul>
                </div>

                <!-- Contact & Social -->
                <div>
                    <h3 class="text-white font-bold text-lg mb-4">Kontakt</h3>
                    <ul class="space-y-2 text-sm mb-4">
                        <li>
                            <a href="mailto:contact.me@jpcodelabs.de"
                                class="hover:text-emerald-400 transition-colors duration-200">
                                contact.me@jpcodelabs.de
                            </a>
                        </li>
                        <li>
                            <a href="tel:+4915143233704" class="hover:text-emerald-400 transition-colors duration-200">
                                +49 151 43233704
                            </a>
                        </li>
                    </ul>

                    <!-- Social Media -->
                    <div class="flex gap-4">
                        <a href="https://www.linkedin.com/company/jp-codelabs/" target="_blank"
                            rel="noopener noreferrer"
                            class="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200"
                            aria-label="LinkedIn">
                            <Linkedin class="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
                <p>© {{ new Date().getFullYear() }} JPCodelabs GmbH. Alle Rechte vorbehalten.</p>
            </div>
        </div>
    </footer>
</template>
