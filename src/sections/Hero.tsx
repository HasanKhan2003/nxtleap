import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ChevronDown } from 'lucide-react'
import MeshGradientBg from '../components/MeshGradientBg'

interface HeroProps {
  scrollTo: (target: string) => void
}

export default function Hero({ scrollTo }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const taglineRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subtextRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 })

      tl.from(taglineRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        ease: 'power2.out',
      })
        .from(
          headlineRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=0.2'
        )
        .from(
          subtextRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.4'
        )
        .from(
          ctaRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.3'
        )
        .from(
          statsRef.current?.children || [],
          {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.2'
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <MeshGradientBg />

      {/* Content */}
      <div className="relative z-10 container-main flex flex-col items-center text-center pt-20 pb-12">
        {/* Tagline Pill */}
        <div
          ref={taglineRef}
          className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-white/[0.08] border border-white/[0.15] mb-6 sm:mb-8"
        >
          <span className="text-xs font-semibold tracking-[0.08em] text-white/80 uppercase">
            Remote-First | Talent-First | Innovation-First
          </span>
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight sm:leading-[1.05] tracking-tight max-w-4xl"
          style={{ textShadow: '0 2px 40px rgba(0,0,0,0.3)' }}
        >
          Ready to Transform Your Vision into Reality?
        </h1>

        {/* Subtext */}
        <p
          ref={subtextRef}
          className="mt-5 sm:mt-6 text-base sm:text-lg text-white/70 max-w-xl leading-relaxed"
        >
          Access elite, vetted tech talent on demand. We help enterprises scale
          faster, build smarter, and future-proof their operations with flexible
          staff augmentation.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => scrollTo('#contact')}
            className="btn-primary px-8 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base"
          >
            Hire Talent
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="btn-outline px-8 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base"
          >
            Schedule Call
          </button>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-12"
        >
          {[
            { value: '350+', label: 'Trusted Clients' },
            { value: '500+', label: 'Resources Deployed' },
            { value: '99%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-xl sm:text-3xl font-bold text-cyan-accent">
                {stat.value}
              </span>
              <span className="mt-1 text-sm text-white/60">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-white/80 transition-colors animate-bounce-slow"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  )
}
