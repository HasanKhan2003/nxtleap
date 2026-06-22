import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Hexagon, Triangle, Circle, Square, Diamond } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const logos = [
  { icon: Hexagon, name: 'TechVenture' },
  { icon: Triangle, name: 'Zension' },
  { icon: Circle, name: 'QuantumServe' },
  { icon: Square, name: 'Mosaik' },
  { icon: Diamond, name: 'Afniti' },
]

export default function TrustedBy() {
  const sectionRef = useRef<HTMLElement>(null)
  const logosRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (logosRef.current) {
        gsap.from(logosRef.current.children, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-off-white py-14 lg:py-16">
      <div className="container-main">
        <p className="text-center text-xs font-semibold tracking-[0.15em] uppercase text-slate-400 mb-10">
          TRUSTED BY INDUSTRY LEADERS
        </p>

        <div
          ref={logosRef}
          className="flex flex-wrap items-center justify-center gap-10 sm:gap-14"
        >
          {logos.map(({ icon: Icon, name }) => (
            <div
              key={name}
              className="flex items-center gap-3 text-slate-400 hover:text-slate-600 transition-all duration-300 cursor-default"
            >
              <Icon className="w-8 h-8" strokeWidth={1.5} />
              <span className="text-lg font-semibold tracking-tight">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
