import { onMounted } from 'vue'

export function useGoogleAnalytics() {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID

  const initGA = () => {
    if (!measurementId || typeof window === 'undefined') {
      return
    }

    // Load gtag.js script
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(script)

    // Initialize dataLayer and gtag
    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
    gtag('js', new Date())
    gtag('config', measurementId)

    // Make gtag available globally
    ;(window as any).gtag = gtag
  }

  const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', eventName, eventParams)
    }
  }

  const trackPageView = (pagePath: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag && measurementId) {
      ;(window as any).gtag('config', measurementId, {
        page_path: pagePath,
      })
    }
  }

  onMounted(() => {
    initGA()
  })

  return {
    trackEvent,
    trackPageView,
  }
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[]
    gtag?: (...args: any[]) => void
  }
}
