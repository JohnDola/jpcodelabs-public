// Contact Form Types
export interface ContactFormData {
  name: string
  firma?: string
  email: string
  nachricht: string
  gdprConsent: boolean
}

export interface FormSubmitResponse {
  success: boolean
  message: string
}

// Use Case Types
export interface UseCase {
  id: string
  title: string
  description: string
  icon: string
}

// Testimonial Types
export interface Testimonial {
  id: string
  quote: string
  metric: string
}

// Tech Stack Types
export interface TechStackItem {
  name: string
  icon: string
  url?: string
}

// Process Step Types
export interface ProcessStep {
  number: number
  title: string
  description: string
}

// Benefit Types
export interface Benefit {
  icon: string
  title: string
  description: string
}

// Toast Notification Types
export interface ToastNotification {
  id: string
  type: 'success' | 'error' | 'info' | 'warning'
  message: string
  duration?: number
}
