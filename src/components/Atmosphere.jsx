import { useInView } from '../hooks/useInView'

// ─── Replace with your own atmospheric image ────────────────────────────────
const ATMOSPHERE_IMG = 'https://images.unsplash.com/photo-1547549082-6bc09f2049ae?w=1400&q=80'
// ─────────────────────────────────────────────────────────────────────────────

const pillars = [
  {
    icon: '⚙',
    heading: 'Maschinen & Leidenschaft',
    text: 'Keine zwei Bikes sind gleich. Jede Maschine trägt eine Geschichte. Bei den Kieler Biker Days stehen sie alle im Mittelpunkt.',
  },
  {
    icon: '🌊',
    heading: 'Kiel am Wasser',
    text: 'Norden pur. Die Lage in Kiel gibt dem Event seinen eigenen Charakter – rau, frei und unverstellbar echt.',
  },
  {
    icon: '🤝',
    heading: 'Community',
    text: 'Biker-Kultur lebt von Menschen. Von Gesprächen, Verbindungen, alten Bekannten und neuen Freunden. Hier passiert das.',
  },
]

export default function Atmosphere() {
  const [ref, inView] = useInView()
  const [imgRef, imgInView] = useInView()

  return (
    <section className="bg-biker-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-biker-border to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: image with overlays */}
          <div
            ref={imgRef}
            className={`relative animate-on-enter-left ${imgInView ? 'in-view' : ''}`}
          >
            <div className="relative overflow-hidden aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5]">
              <img
                src={ATMOSPHERE_IMG}
                alt="Biker auf der Straße – Atmosphäre der Kieler Biker Days"
                loading="lazy"
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-biker-dark via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-biker-dark/50 via-transparent to-transparent" />

              {/* Orange frame accent */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-[3px] border-l-[3px] border-biker-orange" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-[3px] border-r-[3px] border-biker-orange" />

              {/* Bottom quote */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <blockquote className="font-display text-2xl text-biker-white leading-tight tracking-wider">
                  "FREIHEIT AUF
                  <br />
                  <span className="text-biker-orange">ZWEI RÄDERN."</span>
                </blockquote>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -right-4 -top-4 bg-biker-orange text-biker-black font-condensed font-black text-xs uppercase tracking-widest px-4 py-3 rotate-3 shadow-xl z-10">
              Kiel<br />2026
            </div>
          </div>

          {/* Right: text content */}
          <div
            ref={ref}
            className={`animate-on-enter-right ${inView ? 'in-view' : ''} delay-200`}
          >
            <span className="section-label">Atmosphäre & Spirit</span>
            <span className="accent-line" />

            <h2 className="font-display text-[clamp(2.5rem,6vw,4.2rem)] leading-[0.9] tracking-[0.03em] text-biker-white mb-6">
              DAS IST MEHR
              <br />
              ALS EIN EVENT.
              <br />
              <span className="text-biker-orange">DAS IST KULTUR.</span>
            </h2>

            <p className="text-biker-chrome text-base md:text-lg leading-relaxed font-light mb-5">
              Biker-Events leben von einem Gefühl, das man nicht in Worte fassen kann.
              Es ist der Sound eines kalt gestarteten V-Twins am frühen Morgen.
              Der Geruch nach Öl und Freiheit. Das Nicken zwischen zwei Fremden
              auf der Straße, die sich trotzdem kennen.
            </p>

            <p className="text-biker-steel text-base leading-relaxed font-light mb-8">
              Die Kieler Biker Days 2026 wollen genau dieses Gefühl nach Kiel bringen.
              Nicht hochgepoltert, nicht überproduziert – sondern echt.
              Mit Herz, mit Hingabe, mit Respekt vor der Kultur, die uns verbindet.
            </p>

            <p className="text-biker-steel text-base leading-relaxed font-light mb-10">
              Ob du seit 30 Jahren fährst oder gerade deinen ersten Schein in der Hand hältst –
              hier bist du willkommen. Ob allein, mit der Gang oder mit der Familie –
              die Kieler Biker Days gehören dir.
            </p>

            {/* Pillars */}
            <div className="space-y-5">
              {pillars.map(({ icon, heading, text }, i) => (
                <div
                  key={heading}
                  className={`flex gap-4 items-start animate-on-enter ${inView ? 'in-view' : ''}`}
                  style={{ transitionDelay: `${i * 120 + 350}ms` }}
                >
                  <span
                    className="text-2xl flex-shrink-0 mt-0.5 grayscale brightness-150"
                    aria-hidden="true"
                  >
                    {icon}
                  </span>
                  <div>
                    <div className="font-condensed font-bold text-biker-white uppercase tracking-wider text-sm mb-1">
                      {heading}
                    </div>
                    <p className="text-biker-steel text-sm leading-relaxed font-light">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
