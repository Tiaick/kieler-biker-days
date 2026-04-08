import { useInView } from '../hooks/useInView'

const stats = [
  { value: '2',    label: 'Tage\nEvent' },
  { value: '10+',  label: 'Live Acts\n& Musik' },
  { value: '100%', label: 'Echte\nBiker-Kultur' },
  { value: '1',    label: 'Stadt.\nKiel.' },
]

export default function EventIntro() {
  const [ref, inView] = useInView()

  return (
    <section id="event" className="bg-biker-dark relative overflow-hidden">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-biker-orange/50 to-transparent" />

      {/* Background diagonal stripe (decorative) */}
      <div
        className="absolute right-0 top-0 w-1/3 h-full opacity-[0.03] pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(-55deg, #f97316 0px, #f97316 1px, transparent 1px, transparent 18px)',
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">

        {/* Top row: label + headline */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: headline */}
          <div
            className={`animate-on-enter-left ${inView ? 'in-view' : ''}`}
          >
            <span className="section-label">Das Event</span>
            <span className="accent-line" />
            <h2 className="font-display text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.9] tracking-[0.03em] text-biker-white mt-2">
              WILLKOMMEN
              <br />
              BEI DEN
              <br />
              <span className="text-biker-orange">KIELER</span>
              <br />
              BIKER DAYS
            </h2>
          </div>

          {/* Right: intro copy */}
          <div
            className={`animate-on-enter-right ${inView ? 'in-view' : ''} delay-200`}
          >
            <p className="text-biker-chrome text-lg leading-relaxed font-light mb-6">
              Das ist kein gewöhnliches Event. Die{' '}
              <span className="text-biker-white font-semibold">Kieler Biker Days 2026</span>{' '}
              sind der neue Treffpunkt für Biker, Familien und alle,
              die wissen, was echte Event-Atmosphäre bedeutet.
            </p>
            <p className="text-biker-steel text-base leading-relaxed font-light mb-6">
              Ob du auf zwei Rädern ankommst oder einfach die Energie spürst –
              hier trifft Leidenschaft auf Gemeinschaft. Satter Sound,
              Bikes in allen Formen, Live Tattoo, Foodtrucks, und eine Ausfahrt
              durch Schleswig-Holstein, die unter die Haut geht.
            </p>
            <p className="text-biker-steel text-base leading-relaxed font-light">
              Organisiert vom <span className="text-biker-chrome font-medium">BoxZentrum Kiel</span> –
              mit vollem Einsatz, für ein Erlebnis, das bleibt.
              Kiel bekommt sein erstes großes Biker-Wochenende.
              Und du solltest dabei sein.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Bikes & Kultur', 'Familienfreundlich', 'Live Musik', 'Ausfahrt', 'Live Tattoo'].map(tag => (
                <span
                  key={tag}
                  className="font-condensed text-xs font-semibold uppercase tracking-widest text-biker-orange border border-biker-orange/40 px-3 py-1.5 bg-biker-orange/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-biker-border animate-on-enter ${inView ? 'in-view' : ''} delay-400`}
        >
          {stats.map(({ value, label }, i) => (
            <div
              key={i}
              className="bg-biker-dark px-8 py-8 text-center group hover:bg-biker-surface transition-colors duration-300"
            >
              <div className="font-display text-[3rem] md:text-[4rem] leading-none text-biker-orange group-hover:glow-orange transition-all duration-300">
                {value}
              </div>
              <div
                className="font-condensed text-xs font-semibold uppercase tracking-[0.15em] text-biker-steel mt-2 leading-tight whitespace-pre-line"
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-biker-border to-transparent" />
    </section>
  )
}
