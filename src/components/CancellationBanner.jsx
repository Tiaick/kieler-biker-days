export default function CancellationBanner() {
  return (
    <div className="relative z-50 bg-red-700 border-b-2 border-red-500 overflow-hidden">
      {/* Diagonal stripe texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, #fff 0px, #fff 1px, transparent 1px, transparent 12px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-4 flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
        {/* Icon */}
        <svg className="w-7 h-7 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>

        <div>
          <p className="font-display text-white font-bold text-lg md:text-xl leading-tight tracking-wide uppercase">
            Veranstaltung abgesagt
          </p>
          <p className="text-red-100 text-sm md:text-base font-light leading-snug mt-0.5">
            Die Kieler Biker Days 2026 müssen aus organisatorischen und technischen Gründen leider abgesagt werden.
            Wir bedanken uns für euer Interesse und entschuldigen uns für die Unannehmlichkeiten.
          </p>
        </div>
      </div>
    </div>
  )
}
