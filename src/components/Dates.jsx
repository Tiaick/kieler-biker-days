import { useInView } from '../hooks/useInView'

const days = [
  {
    day:     'Samstag',
    date:    '30.05.2026',
    label:   'Aftershow Night',
    color:   'orange',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 3v1m0 16v1M4.22 4.22l.71.71m12.73 12.73.71.71M3 12H2m20 0h-1M4.22 19.78l.71-.71M18.36 5.64l.71-.71" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    program: [
      { time: '10:00 Uhr', item: 'Einlass & Ankunft' },
      { time: 'ab 12:00',  item: 'Musik, Food & Bikes' },
      { time: 'ab 18:00',  item: 'Aftershow – Livemusik & Party' },
      { time: 'bis open end', item: 'Nacht der Biker' },
    ],
    description:
      'Der erste Tag beginnt mit dem Anrollen – und endet mit einer Aftershow-Nacht, die in Erinnerung bleibt. Bikes, Beats, Begegnungen. Genau so soll ein Biker-Samstag aussehen.',
  },
  {
    day:     'Sonntag',
    date:    '31.05.2026',
    label:   'Tag der Ausfahrt',
    color:   'steel',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" />
        <rect x="9" y="11" width="14" height="10" rx="2" />
        <circle cx="12" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
      </svg>
    ),
    program: [
      { time: '10:00 Uhr',  item: 'Einlass & Start' },
      { time: 'ab 11:00',   item: 'Gemeinsame Ausfahrt durch SH' },
      { time: 'ab 13:00',   item: 'Rückkehr & weiteres Programm' },
      { time: 'ab 15:00',   item: 'Abschluss & Ausklingen' },
    ],
    description:
      'Sonntags drehen wir gemeinsam eine Runde. Die Ausfahrt führt durch Schleswig-Holstein – gemeinsam auf der Straße, der Wind im Gesicht. Danach: zurück zum Gelände, Abschluss, Erinnerungen.',
  },
]

export default function Dates() {
  const [ref, inView] = useInView()

  return (
    <section className="bg-biker-black relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-biker-border to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">

        {/* Header */}
        <div className={`text-center mb-14 animate-on-enter ${inView ? 'in-view' : ''}`}>
          <span className="section-label">Programm</span>
          <span className="accent-line mx-auto block" />
          <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.92] tracking-[0.04em] text-biker-white">
            ZWEI TAGE.
            <br />
            <span className="text-biker-orange">EIN ERLEBNIS.</span>
          </h2>
          <p className="mt-5 text-biker-steel font-light max-w-lg mx-auto text-base">
            Samstag Aftershow, Sonntag Ausfahrt — die Kieler Biker Days
            packen alles in zwei unvergessliche Tage.
          </p>
        </div>

        {/* Day cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {days.map(({ day, date, label, icon, program, description, color }, i) => (
            <div
              key={day}
              className={`relative biker-card overflow-hidden group animate-on-enter ${inView ? 'in-view' : ''} ${i === 0 ? 'delay-200' : 'delay-400'}`}
            >
              {/* Top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-[3px] ${
                color === 'orange'
                  ? 'bg-biker-orange'
                  : 'bg-gradient-to-r from-biker-steel/60 to-biker-steel/20'
              }`} />

              <div className="p-8 md:p-10">
                {/* Day header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className={`font-condensed text-xs font-bold uppercase tracking-[0.2em] mb-1 ${
                      color === 'orange' ? 'text-biker-orange' : 'text-biker-steel'
                    }`}>
                      {label}
                    </div>
                    <h3 className="font-display text-[2.8rem] leading-none tracking-[0.04em] text-biker-white">
                      {day.toUpperCase()}
                    </h3>
                    <div className="font-condensed text-lg font-semibold text-biker-chrome mt-1 tracking-wider">
                      {date}
                    </div>
                  </div>
                  <div className={`${color === 'orange' ? 'text-biker-orange' : 'text-biker-steel'} mt-1`}>
                    {icon}
                  </div>
                </div>

                {/* Description */}
                <p className="text-biker-steel text-sm leading-relaxed mb-7 font-light">
                  {description}
                </p>

                {/* Program list */}
                <div className="space-y-3">
                  <div className="font-condensed text-xs font-bold uppercase tracking-[0.2em] text-biker-steel/60 mb-4">
                    Tagesablauf
                  </div>
                  {program.map(({ time, item }) => (
                    <div key={time} className="flex items-start gap-4">
                      <span className={`font-condensed text-xs font-bold tracking-wider flex-shrink-0 pt-0.5 w-24 ${
                        color === 'orange' ? 'text-biker-orange' : 'text-biker-steel'
                      }`}>
                        {time}
                      </span>
                      <span className="text-biker-chrome text-sm leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Start time badge */}
                <div className="mt-8 flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    color === 'orange' ? 'bg-biker-orange' : 'bg-biker-steel'
                  }`} />
                  <span className="font-condensed text-xs font-semibold uppercase tracking-widest text-biker-steel">
                    Einlass ab 10:00 Uhr · Tonberg 15, 24113 Kiel
                  </span>
                </div>
              </div>

              {/* Hover corner glow */}
              <div className={`absolute bottom-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${
                color === 'orange' ? 'bg-biker-orange' : 'bg-biker-steel'
              } pointer-events-none`} />
            </div>
          ))}
        </div>

        {/* "Sei dabei" strip */}
        <div
          className={`mt-10 bg-biker-surface border border-biker-border p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 animate-on-enter ${inView ? 'in-view' : ''} delay-500`}
        >
          <div>
            <div className="font-display text-2xl text-biker-white tracking-wide">
              SEI DABEI – <span className="text-biker-orange">30.–31. MAI 2026</span>
            </div>
            <p className="text-biker-steel text-sm mt-1 font-light">
              Eintritt frei. Jeder ist willkommen.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('kontakt')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-orange whitespace-nowrap flex-shrink-0"
          >
            Infos & Kontakt
          </button>
        </div>
      </div>
    </section>
  )
}
