<script setup lang="ts">
import { ref, reactive } from 'vue'
import { z } from 'zod'
import { Send } from 'lucide-vue-next'
import Button from '../ui/Button.vue'
import Toast from '../ui/Toast.vue'
import { useFormSubmit } from '../../composables/useFormSubmit'
import type { ContactFormData, ToastNotification } from '../../types'

// Form validation schema
const contactSchema = z.object({
    name: z.string().min(2, 'Name muss mindestens 2 Zeichen haben'),
    firma: z.string().optional(),
    email: z.string().email('Ungültige E-Mail-Adresse'),
    nachricht: z.string().min(20, 'Nachricht muss mindestens 20 Zeichen haben'),
    gdprConsent: z.boolean().refine(val => val === true, 'Zustimmung zur Datenverarbeitung erforderlich'),
})

const formData = reactive<ContactFormData>({
    name: '',
    firma: '',
    email: '',
    nachricht: '',
    gdprConsent: false,
})

const errors = reactive<Record<string, string>>({})
const notification = ref<ToastNotification | null>(null)
const { isSubmitting, submitForm } = useFormSubmit()

const validateField = (field: keyof ContactFormData) => {
    try {
        contactSchema.shape[field].parse(formData[field])
        errors[field] = ''
    } catch (error) {
        if (error instanceof z.ZodError) {
            errors[field] = error.errors[0].message
        }
    }
}

const handleSubmit = async () => {
    // Clear previous errors
    Object.keys(errors).forEach(key => errors[key] = '')

    // Validate all fields
    try {
        contactSchema.parse(formData)
    } catch (error) {
        if (error instanceof z.ZodError) {
            error.errors.forEach(err => {
                if (err.path[0]) {
                    errors[err.path[0] as string] = err.message
                }
            })
        }
        return
    }

    // Submit form
    const result = await submitForm(formData)

    // Show notification
    notification.value = {
        id: Date.now().toString(),
        type: result.success ? 'success' : 'error',
        message: result.message,
        duration: 5000,
    }

    // Reset form on success
    if (result.success) {
        Object.assign(formData, {
            name: '',
            firma: '',
            email: '',
            nachricht: '',
            gdprConsent: false,
        })
    }
}

const closeNotification = () => {
    notification.value = null
}
</script>

<template>
    <section id="contact" class="py-16 md:py-24 px-6 bg-white">
        <div class="max-w-3xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Bereit für mehr Effizienz?
                </h2>
                <p class="text-lg text-slate-600">
                    Lass uns in einem kostenlosen 30-Minuten-Gespräch herausfinden, welche Prozesse sich bei dir
                    automatisieren lassen.
                </p>
            </div>

            <!-- Contact Form -->
            <form @submit.prevent="handleSubmit" class="space-y-6">
                <!-- Name Field -->
                <div>
                    <label for="name" class="block text-sm font-medium text-slate-700 mb-2">
                        Name <span class="text-red-500">*</span>
                    </label>
                    <input id="name" v-model="formData.name" @blur="validateField('name')" type="text"
                        class="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                        :class="{ 'border-red-500': errors.name }" placeholder="Max Mustermann" />
                    <p v-if="errors.name" class="mt-2 text-sm text-red-600">{{ errors.name }}</p>
                </div>

                <!-- Firma Field -->
                <div>
                    <label for="firma" class="block text-sm font-medium text-slate-700 mb-2">
                        Firma (optional)
                    </label>
                    <input id="firma" v-model="formData.firma" type="text"
                        class="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                        placeholder="Mustermann GmbH" />
                </div>

                <!-- Email Field -->
                <div>
                    <label for="email" class="block text-sm font-medium text-slate-700 mb-2">
                        E-Mail <span class="text-red-500">*</span>
                    </label>
                    <input id="email" v-model="formData.email" @blur="validateField('email')" type="email"
                        class="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                        :class="{ 'border-red-500': errors.email }" placeholder="max@mustermann.de" />
                    <p v-if="errors.email" class="mt-2 text-sm text-red-600">{{ errors.email }}</p>
                </div>

                <!-- Nachricht Field -->
                <div>
                    <label for="nachricht" class="block text-sm font-medium text-slate-700 mb-2">
                        Welchen Prozess möchtest du automatisieren? <span class="text-red-500">*</span>
                    </label>
                    <textarea id="nachricht" v-model="formData.nachricht" @blur="validateField('nachricht')" rows="5"
                        class="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none"
                        :class="{ 'border-red-500': errors.nachricht }"
                        placeholder="Beschreibe kurz, welche Aufgaben du aktuell manuell erledigst und gerne automatisieren möchtest..."></textarea>
                    <p v-if="errors.nachricht" class="mt-2 text-sm text-red-600">{{ errors.nachricht }}</p>
                </div>

                <!-- GDPR Checkbox -->
                <div>
                    <label class="flex items-start gap-3 cursor-pointer">
                        <input v-model="formData.gdprConsent" @change="validateField('gdprConsent')" type="checkbox"
                            class="mt-1 w-5 h-5 rounded border-2 border-slate-300 text-orange-600 focus:ring-2 focus:ring-orange-200"
                            :class="{ 'border-red-500': errors.gdprConsent }" />
                        <span class="text-sm text-slate-600">
                            Ich stimme der Verarbeitung meiner Daten gemäß der
                            <router-link to="/datenschutz" class="text-orange-600 hover:text-orange-700 underline">
                                Datenschutzerklärung
                            </router-link>
                            zu. <span class="text-red-500">*</span>
                        </span>
                    </label>
                    <p v-if="errors.gdprConsent" class="mt-2 text-sm text-red-600">{{ errors.gdprConsent }}</p>
                </div>

                <!-- Submit Button -->
                <div class="pt-4">
                    <Button type="submit" variant="primary" :loading="isSubmitting" :disabled="isSubmitting"
                        class="w-full">
                        <Send class="inline-block mr-2 w-5 h-5" />
                        {{ isSubmitting ? 'Wird gesendet...' : 'Prozess-Check anfragen' }}
                    </Button>
                    <p class="text-center text-sm text-slate-500 mt-4">
                        Wir melden uns innerhalb von 24 Stunden mit konkreten Automatisierungsideen.
                    </p>
                </div>
            </form>
        </div>

        <!-- Toast Notification -->
        <Toast v-if="notification" :notification="notification" @close="closeNotification" />
    </section>
</template>
