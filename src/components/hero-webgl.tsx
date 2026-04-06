import { useState, useEffect, useRef } from "react"

const LOGO_URL = "https://cdn.poehali.dev/projects/9661d799-843e-452a-ba1b-83bfd941172b/bucket/e56df9ee-9db1-437c-a286-6a992e7e514c.jpg"

export const Hero3DWebGL = () => {
  const subtitle = "Сервисный центр в Волгограде. Ремонт, выкуп и продажа техники."
  const [phase, setPhase] = useState<"spinning" | "visible">("spinning")
  const [subtitleVisible, setSubtitleVisible] = useState(false)
  const [buttonsVisible, setButtonsVisible] = useState(false)
  const [rotation, setRotation] = useState(0)
  const rafRef = useRef<number>(0)
  const startRef = useRef<number | null>(null)
  const SPIN_DURATION = 1800

  useEffect(() => {
    const animate = (ts: number) => {
      if (!startRef.current) startRef.current = ts
      const elapsed = ts - startRef.current
      const progress = Math.min(elapsed / SPIN_DURATION, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setRotation(eased * 360 * 2)

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      } else {
        setRotation(0)
        setPhase("visible")
        setTimeout(() => setSubtitleVisible(true), 400)
        setTimeout(() => setButtonsVisible(true), 800)
      }
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <div className="h-screen bg-black relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-black to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-black to-transparent" />
      </div>

      <div className="relative z-[60] flex flex-col items-center px-6 text-center">
        <div
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: phase === "visible" ? "transform 0.4s ease-out" : "none",
            filter: "drop-shadow(0 0 40px rgba(239,68,68,0.6))",
          }}
          className="mb-8"
        >
          <img
            src={LOGO_URL}
            alt="Reboot"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover"
          />
        </div>

        <div
          className="text-white text-sm md:text-xl xl:text-2xl font-bold max-w-2xl leading-relaxed"
          style={{
            opacity: subtitleVisible ? 1 : 0,
            transform: subtitleVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          {subtitle}
        </div>

        <div
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          style={{
            opacity: buttonsVisible ? 1 : 0,
            transform: buttonsVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <a
            href="https://t.me/evgenymaer"
            target="_blank"
            rel="noreferrer"
            className="bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-3 rounded-md text-base transition-colors duration-200 text-center"
          >
            Написать в Telegram
          </a>
          <a
            href="tel:89996293193"
            className="border border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-bold px-8 py-3 rounded-md text-base transition-colors duration-200 text-center"
          >
            +7 999 629-31-93
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero3DWebGL
