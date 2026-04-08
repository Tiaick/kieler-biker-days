import { useInView } from '../hooks/useInView'

const benefits = [
  {
    title: 'Maximale Sichtbarkeit',
    desc: 'Deine Marke präsent vor hunderten Besuchern, direkt auf dem Veranstaltungsgelände. Banner, Standpräsenz, Logonennung – wir machen dich sichtbar.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: 'Direkte Zielgruppe',
    desc: 'Biker, Motorsport-Enthusiasten, Familien, Fahrzeugliebhaber – deine Zielgruppe ist live dabei. Kein Streuverlust, volle Relevanz.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: 'Echtes Event-Umfeld',
    desc: 'Keine Messe, kein anonymer Stand – sondern ein authentisches Biker-Event mit echter Emotion. Hier verbindet sich deine Marke mit Leidenschaft.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Community-Reichweite',
    desc: 'Die Biker-Community in Schleswig-Holstein und darüber hinaus. Dein Engagement wird wahrgenommen, weiterempfohlen und bleibt in Erinnerung.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]

const partnerTypes = [
  { label: 'Sponsoren',         icon: '★' },
  { label: 'Händler',           icon: '◈' },
  { label: 'Foodtrucks',        icon: '◉' },
  { label: 'Aussteller',        icon: '◆' },
  { label: 'Regionale Partner', icon: '◎' },
]

export default function Sponsors() {
  const [ref, inView] = useInView()
  const [benefitRef, benefitInView] = useInView()

  const scrollToForm = () => {
    const el = document.getElementById('partner-form')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="sponsoren" className="bg-biker-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-biker-orange/40 to-transparent" />

      {/* BG watermark */}
      <div
        className="absolute right-0 bottom-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-display text-[18vw] text-white/[0.02] tracking-widest leading-none">
          PARTNER
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">

        {/* Header */}
        <div ref={ref} className={`max-w-2xl animate-on-enter ${inView ? 'in-view' : ''}`}>
          <span className="section-label">Für Unternehmen & Partner</span>
          <span className="accent-line" />
          <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.92] tracking-[0.04em] text-biker-white">
            WERDE TEIL
            <br />
            DER KIELER
            <br />
            <span className="text-biker-orange">BIKER DAYS.</span>
          </h2>
          <p className="mt-6 text-biker-chrome text-base md:text-lg leading-relaxed font-light">
            Die Kieler Biker Days 2026 bieten Unternehmen, Händlern und regionalen
            Partnern eine einzigartige Bühne – direkt vor einer leidenschaftlichen,
            biker-affinen und familienfreundlichen Zielgruppe.
          </p>
          <p className="mt-4 text-biker-steel text-base leading-relaxed font-light">
            Ob als Sponsor, Händler mit eigenem Stand, Foodtruck oder regionaler Partner –
            wir schaffen den Rahmen. Du bringst dein Business.
            Gemeinsam machen wir das erste große Biker-Event Kiels unvergesslich.
          </p>
        </div>

        {/* Partner type tags */}
        <div
          className={`mt-10 flex flex-wrap gap-3 animate-on-enter ${inView ? 'in-view' : ''} delay-300`}
        >
          {partnerTypes.map(({ label, icon }) => (
            <span
              key={label}
              className="flex items-center gap-2 font-condensed text-sm font-semibold uppercase tracking-widest text-biker-chrome border border-biker-border/80 px-4 py-2.5 bg-biker-surface-2/50 hover:border-biker-orange hover:text-biker-orange transition-colors duration-300 cursor-default"
            >
              <span className="text-biker-orange text-xs">{icon}</span>
              {label}
            </span>
          ))}
        </div>

        {/* Benefits grid */}
        <div
          ref={benefitRef}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map(({ title, desc, icon }, i) => (
            <div
              key={title}
              className={`relative biker-card p-6 group animate-on-enter ${benefitInView ? 'in-view' : ''}`}
              style={{ transitionDelay: `${i * 100 + 150}ms` }}
            >
              {/* Top bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-biker-orange/60 to-transparent" />

              <div className="text-biker-orange mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {icon}
              </div>
              <h3 className="font-condensed font-bold text-biker-white uppercase tracking-wider text-sm mb-3">
                {title}
              </h3>
              <p className="text-biker-steel text-sm leading-relaxed font-light">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div
          className={`mt-14 relative overflow-hidden border border-biker-orange/30 bg-gradient-to-r from-biker-orange/10 to-transparent p-8 md:p-10 animate-on-enter ${benefitInView ? 'in-view' : ''} delay-500`}
        >
          {/* Diagonal stripes accent */}
          <div
            className="absolute right-0 top-0 bottom-0 w-32 opacity-10 pointer-events-none"
            style={{
              background: 'repeating-linear-gradient(-55deg, #f97316 0px, #f97316 1px, transparent 1px, transparent 14px)',
            }}
          />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="font-display text-2xl md:text-3xl text-biker-white tracking-wide mb-2">
                INTERESSE?{' '}
                <span className="text-biker-orange">WIR FREUEN UNS.</span>
              </div>
              <p className="text-biker-steel text-sm font-light max-w-lg">
                Sende uns deine Anfrage über das Formular – wir melden uns schnell
                und persönlich bei dir. Plätze sind begrenzt.
              </p>
            </div>
            <button
              onClick={scrollToForm}
              className="btn-orange whitespace-nowrap flex-shrink-0"
            >
              Als Partner anfragen
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-biker-border to-transparent" />
    </section>
  )
}
