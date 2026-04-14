import { useInView } from '../hooks/useInView'
import PdfLogo from './PdfLogo'

const sponsors = [
  // ── Dark-background logos ──────────────────────────────
  {
    name: 'Bikers Bar Kiel',
    src: '/Bikers Bar Kiel LAYOUT .jpg',
    type: 'img',
    darkBg: true,
  },
  {
    name: 'Baltic Tattoo & Piercing',
    src: '/Baltic Tattoo Kiel LAYOUT .jpg',
    type: 'img',
    darkBg: true,
  },
  {
    name: 'Mein Unfallgutachter',
    src: '/GUTACHTER ROJHAT .jpg',
    type: 'img',
    darkBg: true,
  },
  {
    name: 'Sexwelt24',
    src: '/sexwelt.pdf',
    type: 'pdf',
    darkBg: true,
  },

  // ── Light-background logos ─────────────────────────────
  {
    name: 'Baltic Bau GmbH',
    src: '/PHOTO-2026-04-13-16-38-05.jpg',
    type: 'img',
    darkBg: false,
  },
  {
    name: 'Die Hausräumer',
    src: '/PHOTO-2026-04-13-21-10-22.jpg',
    type: 'img',
    darkBg: false,
  },
  {
    name: 'Förde Apartments Kiel',
    src: '/foerde_apartments.jpg',
    type: 'img',
    darkBg: false,
  },
  {
    name: 'Budenzauber Catering',
    src: '/BZ_Feinkost_Logo_v08_RZ_pfade-Catering.pdf',
    type: 'pdf',
    darkBg: false,
  },
  {
    name: 'Die Allrounder',
    src: '/die_allrounder.pdf',
    type: 'pdf',
    darkBg: false,
  },
  {
    name: 'Jörgen Petersen & Sohn',
    src: '/JPS_Logo+Bildmarkeoben.pdf',
    type: 'pdf',
    darkBg: false,
  },
  {
    name: 'Köster Shop',
    src: '/koester_logo.pdf',
    type: 'pdf',
    darkBg: false,
  },
  {
    name: 'C. Lapöhn Bau',
    src: '/lapoehn_logo.pdf',
    type: 'pdf',
    darkBg: false,
  },
  {
    name: 'KTS Brandschutz',
    src: '/logo01.pdf',
    type: 'pdf',
    darkBg: false,
  },
  {
    name: 'Walhalla',
    src: '/walhalla.pdf',
    type: 'pdf',
    darkBg: false,
  },
  {
    name: 'Beschriftungsservice Kiel',
    src: '/beschriftungsservice.pdf',
    type: 'pdf',
    darkBg: false,
  },
  {
    name: 'Pane Vino',
    src: '/panevino.pdf',
    type: 'pdf',
    darkBg: false,
  },
  {
    name: 'Bodenbeläge Olschewski',
    src: '/Visitenkarte.pdf',
    type: 'pdf',
    darkBg: false,
  },
  {
    name: 'Shiny Workshop',
    src: '/color1.pdf',
    type: 'pdf',
    darkBg: false,
  },
  {
    name: 'ABC Sicherheitstechnik',
    src: '/logo_key.pdf',
    type: 'pdf',
    darkBg: false,
  },
  {
    name: 'Bau-Dienst-Kiel GmbH',
    src: '/bild_anzeige.pdf',
    type: 'pdf',
    darkBg: false,
  },
  {
    name: 'BoxZentrum Kiel',
    src: '/boxzentrum.pdf',
    type: 'pdf',
    darkBg: false,
  },
]

function SponsorCard({ sponsor, index, inView }) {
  const { name, src, type, darkBg } = sponsor

  return (
    <div
      className={`group relative animate-on-enter ${inView ? 'in-view' : ''} flex flex-col`}
      style={{ transitionDelay: `${(index % 10) * 60}ms` }}
    >
      {/* Logo card */}
      <div
        className={`
          relative overflow-hidden border transition-all duration-300
          flex items-center justify-center p-3
          h-[110px] md:h-[130px]
          ${
            darkBg
              ? 'bg-[#111111] border-[#2a2a2a] group-hover:border-biker-orange/60'
              : 'bg-white border-[#e0e0e0] group-hover:border-biker-orange'
          }
          group-hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]
        `}
      >
        {/* Orange top line on hover */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-biker-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

        {type === 'img' ? (
          <img
            src={src}
            alt={name}
            loading="lazy"
            className="max-w-full max-h-full w-auto h-auto object-contain block mx-auto"
            style={{ maxHeight: '86px' }}
          />
        ) : (
          <PdfLogo src={src} alt={name} darkBg={darkBg} />
        )}
      </div>

      {/* Name label */}
      <div
        className={`
          mt-2 text-center font-condensed text-[11px] font-semibold uppercase tracking-wider
          leading-tight truncate px-1
          ${darkBg ? 'text-biker-steel' : 'text-biker-steel'}
          group-hover:text-biker-orange transition-colors duration-300
        `}
        title={name}
      >
        {name}
      </div>
    </div>
  )
}

export default function PartnerLogos() {
  const [headerRef, headerInView] = useInView()
  const [gridRef, gridInView] = useInView()

  return (
    <section
      id="unsere-partner"
      className="bg-biker-black relative overflow-hidden"
    >
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-biker-orange/30 to-transparent" />

      {/* BG watermark */}
      <div
        className="absolute left-0 bottom-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-display text-[22vw] text-white/[0.018] tracking-widest leading-none">
          PARTNER
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">

        {/* Header */}
        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 animate-on-enter ${headerInView ? 'in-view' : ''}`}
        >
          <div>
            <span className="section-label">Unsere Sponsoren & Partner</span>
            <span className="accent-line" />
            <h2 className="font-display text-[clamp(2.2rem,5.5vw,4rem)] leading-[0.92] tracking-[0.04em] text-biker-white">
              SIE MACHEN<br />
              <span className="text-biker-orange">ES MÖGLICH.</span>
            </h2>
          </div>
          <p className="text-biker-steel text-sm leading-relaxed font-light max-w-sm md:text-right">
            Ohne diese starken Partner wären die Kieler Biker Days 2026 nicht denkbar.
            Wir sagen Danke für das Vertrauen.
          </p>
        </div>

        {/* Divider with logo count */}
        <div
          className={`mt-10 flex items-center gap-4 animate-on-enter ${headerInView ? 'in-view' : ''} delay-200`}
        >
          <div className="flex-1 h-px bg-biker-border" />
          <span className="font-condensed text-xs font-semibold uppercase tracking-[0.2em] text-biker-orange">
            {sponsors.length} Partner
          </span>
          <div className="flex-1 h-px bg-biker-border" />
        </div>

        {/* Logo grid */}
        <div
          ref={gridRef}
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4"
        >
          {sponsors.map((sponsor, i) => (
            <SponsorCard
              key={sponsor.name}
              sponsor={sponsor}
              index={i}
              inView={gridInView}
            />
          ))}
        </div>

        {/* Bottom note */}
        <div
          className={`mt-12 text-center animate-on-enter ${gridInView ? 'in-view' : ''} delay-500`}
        >
          <p className="text-biker-steel/60 text-xs font-condensed uppercase tracking-widest">
            Möchtest du auch Partner werden?{' '}
            <a
              href="#sponsoren"
              className="text-biker-orange hover:underline transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('sponsoren')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Mehr erfahren ↑
            </a>
          </p>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-biker-border to-transparent" />
    </section>
  )
}
