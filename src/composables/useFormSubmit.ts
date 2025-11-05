import { ref } from 'vue'
import type { ContactFormData, FormSubmitResponse } from '../types'

export function useFormSubmit() {
  const isSubmitting = ref(false)
  const error = ref<string | null>(null)

  const submitForm = async (formData: ContactFormData): Promise<FormSubmitResponse> => {
    isSubmitting.value = true
    error.value = null

    try {
      const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL

      if (!webhookUrl) {
        throw new Error('Webhook URL ist nicht konfiguriert')
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Fehler beim Senden des Formulars')
      }

      return {
        success: true,
        message: 'Danke! Wir melden uns innerhalb von 24 h mit konkreten Automatisierungsideen.',
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Etwas lief schief – bitte erneut senden.'
      error.value = errorMessage
      
      return {
        success: false,
        message: errorMessage,
      }
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    isSubmitting,
    error,
    submitForm,
  }
}
