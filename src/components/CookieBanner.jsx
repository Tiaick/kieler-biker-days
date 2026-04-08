import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'cookie_consent'

function enableAnalytics() {
  window.gtag?.('consent', 'update', {
    analytics_storage: 'granted',
  })
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY)
    if (!consent) {
      setVisible(true)
    } else if (consent === 'accepted') {
      enableAnalytics()
    }
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    enableAnalytics()
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-biker-surface border-t border-biker-border px-5 py-5 md:py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <p className="text-biker-chrome text-sm font-light leading-relaxed flex-1">
          Wir verwenden Cookies, um die Nutzung der Website zu analysieren (Google Analytics).{' '}
          <Link to="/datenschutz" className="text-biker-orange hover:underline">
            Datenschutzerklärung
          </Link>
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="btn-outline text-xs px-5 py-2"
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            className="btn-orange text-xs px-5 py-2"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  )
}
