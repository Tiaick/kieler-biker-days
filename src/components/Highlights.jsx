import { useInView } from '../hooks/useInView'

const highlights = [
  {
    title: 'Live Musik',
    subtitle: 'Samstag & Sonntag',
    desc: 'Von Rock über Blues bis Heavy – Live-Bands sorgen für den Soundtrack zu deinem Biker-Wochenende. Laut, direkt, unvergesslich.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    title: 'Food & Drinks',
    subtitle: 'Foodtrucks & Bar',
    desc: 'Hochwertige Foodtrucks, kühle Getränke und eine Atmosphäre, in der das Essen einfach besser schmeckt. Für lange Tage und kurze Nächte.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    title: 'Kids Area',
    subtitle: 'Familienfreundlich',
    desc: 'Biker-Kultur ist Familienkultur. Eine eigene Kids Area sorgt dafür, dass auch die Kleinen zwei Tage lang begeistert sind.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Live Tattoo',
    subtitle: 'Baltic Tattoo Kiel',
    desc: 'Baltic Tattoo Kiel ist live dabei und verewigt die Kieler Biker Days direkt auf der Haut. Buchungen vor Ort möglich – komm früh.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    title: 'Biker-Treff',
    subtitle: 'Community & Kultur',
    desc: 'Das Herz des Events: hunderte Bikes, Geschichten von der Straße und echte Verbundenheit. Hier trifft die Community Kiels und der Region zusammen.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
      </svg>
    ),
  },
  {
    title: 'Ausfahrt',
    subtitle: 'Sonntag · Gemeinsam',
    desc: 'Sonntags heißt es: Motoren an. Die gemeinsame Ausfahrt durch Schleswig-Holstein ist das Highlight für alle, die wirklich fahren wollen. Freiheit auf zwei Rädern.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3m-4 12h8m-4-4 4 4-4 4" />
        <circle cx="7.5" cy="17" r="2.5" />
        <circle cx="17.5" cy="17" r="2.5" />
      </svg>
    ),
  },
]

export default function Highlights() {
  const [ref, inView] = useInView()

  return (
    <section id="highlights" className="bg-biker-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-biker-orange/30 to-transparent" />

      {/* Background large text watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-display text-[20vw] text-white/[0.015] tracking-widest whitespace-nowrap">
          HIGHLIGHTS
        </span>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">

        {/* Header */}
        <div className={`mb-14 animate-on-enter ${inView ? 'in-view' : ''}`}>
          <span className="section-label">Was dich erwartet</span>
          <span className="accent-line" />
          <h2 className="font-display text-[clamp(2.8rem,7vw,5rem)] leading-[0.92] tracking-[0.04em] text-biker-white">
            VON SATT
            <br />
            BIS <span className="text-biker-orange">UNVERGESSLICH</span>
          </h2>
          <p className="mt-5 text-biker-steel font-light max-w-xl text-base leading-relaxed">
            Die Kieler Biker Days bringen echtes Event-Feeling nach Kiel.
            Für jeden etwas – für Biker, Familien und alle, die Atmosphäre lieben.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-biker-border">
          {highlights.map(({ title, subtitle, desc, icon }, i) => (
            <div
              key={title}
              className={`relative bg-biker-surface group cursor-default p-8 md:p-10 overflow-hidden animate-on-enter ${inView ? 'in-view' : ''}`}
              style={{ transitionDelay: `${i * 80 + 200}ms` }}
            >
              {/* Hover orange left border */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-biker-orange scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-400" />

              {/* Icon */}
              <div className="text-biker-orange mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                {icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl tracking-wider text-biker-white mb-1">
                {title.toUpperCase()}
              </h3>
              <div className="font-condensed text-xs font-semibold uppercase tracking-[0.18em] text-biker-orange/70 mb-4">
                {subtitle}
              </div>

              {/* Description */}
              <p className="text-biker-steel text-sm leading-relaxed font-light">
                {desc}
              </p>

              {/* Corner glow on hover */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-biker-orange/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-biker-border to-transparent" />
    </section>
  )
}
