import { useEffect, useRef, useState } from 'react'

let pdfjsPromise = null

function loadPdfjs() {
  if (!pdfjsPromise) {
    pdfjsPromise = import('pdfjs-dist').then((lib) => {
      lib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${lib.version}/build/pdf.worker.mjs`
      return lib
    })
  }
  return pdfjsPromise
}

export default function PdfLogo({ src, alt, darkBg = false }) {
  const canvasRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | loading | done | error

  useEffect(() => {
    let cancelled = false
    setStatus('loading')

    async function render() {
      try {
        const lib = await loadPdfjs()
        if (cancelled) return

        const pdf = await lib.getDocument(encodeURI(src)).promise
        if (cancelled) return

        const page = await pdf.getPage(1)
        if (cancelled) return

        const baseVp = page.getViewport({ scale: 1 })
        const scale = 800 / baseVp.width
        const viewport = page.getViewport({ scale })

        const canvas = canvasRef.current
        if (!canvas || cancelled) return

        canvas.width = viewport.width
        canvas.height = viewport.height

        const ctx = canvas.getContext('2d')
        ctx.fillStyle = darkBg ? '#111111' : '#ffffff'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        await page.render({ canvasContext: ctx, viewport }).promise
        if (!cancelled) setStatus('done')
      } catch {
        if (!cancelled) setStatus('error')
      }
    }

    render()
    return () => { cancelled = true }
  }, [src, darkBg])

  if (status === 'error') {
    return (
      <div className="w-full h-full flex items-center justify-center px-2">
        <span className="text-[10px] text-center leading-tight" style={{ color: '#8e8e8e' }}>{alt}</span>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Skeleton shimmer while loading */}
      {status !== 'done' && (
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.4s infinite',
          }}
        />
      )}
      <canvas
        ref={canvasRef}
        aria-label={alt}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          width: 'auto',
          height: 'auto',
          display: 'block',
          margin: 'auto',
          opacity: status === 'done' ? 1 : 0,
          transition: 'opacity 0.4s ease',
          position: 'relative',
          zIndex: 1,
        }}
      />
    </div>
  )
}
