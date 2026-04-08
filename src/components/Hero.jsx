import { useEffect, useState } from 'react'

// ─── Replace these URLs with your own images ────────────────────────────────
// Hero background: a dark, moody motorcycle / biker photograph
const HERO_BG = '/hero.jpg'
// ─────────────────────────────────────────────────────────────────────────────

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Trigger entrance animation after mount
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="start"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${HERO_BG}')` }}
      >
        {/* Multi-layer dark overlay: bottom-heavy gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-biker-black" />
        {/* Left-edge vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-biker-black/80 via-transparent to-transparent" />
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Orange bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-biker-orange to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-28 pb-16 md:pt-36 md:pb-24">

        {/* Event label */}
        <div
          className={`transition-all duration-700 delay-150 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label inline-flex items-center gap-3">
            <span className="w-8 h-px bg-biker-orange" />
            1. Kieler Biker Days
            <span className="w-8 h-px bg-biker-orange" />
          </span>
        </div>

        {/* Main headline */}
        <div
          className={`mt-4 transition-all duration-700 delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="font-display text-[clamp(3.5rem,12vw,9rem)] leading-[0.88] tracking-[0.03em] text-biker-white glow-orange">
            KIELER
            <br />
            <span className="text-biker-orange">BIKER</span>
            <br />
            DAYS
            <span className="text-biker-orange text-[0.55em]"> 2026</span>
          </h1>
        </div>

        {/* Date + Location badge */}
        <div
          className={`mt-8 flex flex-wrap gap-4 transition-all duration-700 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-2 bg-biker-surface/80 backdrop-blur-sm border border-biker-border px-4 py-2">
            <svg className="w-4 h-4 text-biker-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span className="font-condensed font-semibold text-sm tracking-wider text-biker-chrome">
              30.–31. Mai 2026
            </span>
          </div>
          <div className="flex items-center gap-2 bg-biker-surface/80 backdrop-blur-sm border border-biker-border px-4 py-2">
            <svg className="w-4 h-4 text-biker-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="font-condensed font-semibold text-sm tracking-wider text-biker-chrome">
              Tonberg 15, 24113 Kiel
            </span>
          </div>
          <div className="flex items-center gap-2 bg-biker-surface/80 backdrop-blur-sm border border-biker-border px-4 py-2">
            <svg className="w-4 h-4 text-biker-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span className="font-condensed font-semibold text-sm tracking-wider text-biker-chrome">
              Ab 10:00 Uhr
            </span>
          </div>
        </div>

        {/* Subtext */}
        <p
          className={`mt-7 max-w-xl text-biker-chrome text-base md:text-lg leading-relaxed font-body font-light transition-all duration-700 delay-[650ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Zwei Tage voller Bikes, Begegnungen, Musik und echter Event-Atmosphäre.
          Motorcycles, Community, Live Tattoo, Food & Drinks – und eine Ausfahrt,
          die du nicht vergisst. Willkommen in Kiel.
        </p>

        {/* CTA Buttons */}
        <div
          className={`mt-10 flex flex-wrap gap-4 transition-all duration-700 delay-[800ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button
            onClick={() => scrollTo('event')}
            className="btn-orange text-sm"
          >
            Jetzt vormerken
          </button>
          <button
            onClick={() => scrollTo('sponsoren')}
            className="btn-outline text-sm"
          >
            Aussteller werden
          </button>
        </div>

        {/* Scroll hint */}
        <div
          className={`mt-16 md:mt-20 transition-all duration-700 delay-[1000ms] ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={() => scrollTo('event')}
            aria-label="Nach unten scrollen"
            className="flex flex-col items-center gap-2 text-biker-steel hover:text-biker-orange transition-colors duration-300 group"
          >
            <span className="font-condensed text-xs uppercase tracking-[0.2em]">Mehr erfahren</span>
            <span className="w-px h-8 bg-gradient-to-b from-biker-steel to-transparent group-hover:from-biker-orange transition-all duration-300" />
          </button>
        </div>
      </div>

      {/* Decorative orange corner accent */}
      <div className="absolute top-16 right-0 w-px h-40 bg-gradient-to-b from-biker-orange/60 to-transparent hidden xl:block" />
      <div className="absolute top-16 right-0 w-20 h-px bg-gradient-to-l from-biker-orange/60 to-transparent hidden xl:block" />
    </section>
  )
}
