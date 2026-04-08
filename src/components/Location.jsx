import { useInView } from '../hooks/useInView'

// Google Maps embed for Tonberg 15, 24113 Kiel
const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=Tonberg+15,+24113+Kiel&t=&z=15&ie=UTF8&iwloc=&output=embed'

const infos = [
  {
    label: 'Adresse',
    value: 'Tonberg 15\n24113 Kiel',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: 'Einlass',
    value: 'Ab 10:00 Uhr\nbeide Tage',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    label: 'Datum',
    value: '30.–31. Mai 2026\nSamstag & Sonntag',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    label: 'Eintritt',
    value: 'Kostenlos\nFür alle',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
]

export default function Location() {
  const [ref, inView] = useInView()

  return (
    <section id="location" className="bg-biker-black relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-biker-orange/30 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">

        {/* Header */}
        <div className={`mb-14 animate-on-enter ${inView ? 'in-view' : ''}`}>
          <span className="section-label">Wo du uns findest</span>
          <span className="accent-line" />
          <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.92] tracking-[0.04em] text-biker-white">
            DER SPOT.
            <br />
            <span className="text-biker-orange">KIEL. TONBERG 15.</span>
          </h2>
          <p className="mt-5 text-biker-steel font-light max-w-xl text-base leading-relaxed">
            Zentraler Standort, gut erreichbar aus dem Kieler Stadtgebiet
            und der gesamten Region. Parkplätze vorhanden.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Info cards */}
          <div className={`lg:col-span-1 space-y-4 animate-on-enter-left ${inView ? 'in-view' : ''} delay-200`}>
            {infos.map(({ label, value, icon }) => (
              <div
                key={label}
                className="biker-card p-5 flex items-start gap-4"
              >
                <div className="text-biker-orange flex-shrink-0 mt-0.5">{icon}</div>
                <div>
                  <div className="font-condensed text-xs font-bold uppercase tracking-[0.18em] text-biker-steel/70 mb-1">
                    {label}
                  </div>
                  <div className="font-condensed text-base font-semibold text-biker-chrome leading-snug whitespace-pre-line">
                    {value}
                  </div>
                </div>
              </div>
            ))}

            {/* Google Maps link */}
            <a
              href="https://maps.google.com/?q=Tonberg+15,+24113+Kiel"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full text-center block mt-2"
            >
              Route planen
            </a>
          </div>

          {/* Map embed */}
          <div
            className={`lg:col-span-2 animate-on-enter-right ${inView ? 'in-view' : ''} delay-300`}
          >
            <div className="relative w-full h-72 md:h-96 lg:h-full min-h-[300px] overflow-hidden border border-biker-border">
              {/* Orange corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-[3px] border-l-[3px] border-biker-orange z-10" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-[3px] border-r-[3px] border-biker-orange z-10" />

              <iframe
                title="Kieler Biker Days 2026 – Standort"
                src={MAP_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(80%) invert(90%) contrast(80%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>

        {/* Arrival tip */}
        <div
          className={`mt-8 bg-biker-surface/50 border border-biker-border px-6 py-5 flex gap-4 items-start animate-on-enter ${inView ? 'in-view' : ''} delay-500`}
        >
          <svg className="w-5 h-5 text-biker-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p className="text-biker-steel text-sm leading-relaxed font-light">
            <span className="text-biker-chrome font-medium">Anreise:</span>{' '}
            Das Gelände ist mit dem Motorrad, dem Auto und dem ÖPNV gut erreichbar.
            Motorradparkplätze stehen in ausreichender Anzahl zur Verfügung.
            Wir freuen uns auf jedes Bike, das sich hier einfindet.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-biker-border to-transparent" />
    </section>
  )
}
