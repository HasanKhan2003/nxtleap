import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Quote } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function WhatWeBelieve() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.from(contentRef.current, {
          opacity: 0,
          scale: 0.98,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-14 sm:py-16 lg:py-20 bg-deep-navy overflow-hidden"
    >
      {/* Subtle gradient accents */}
      <div
        className="absolute top-0 left-0 w-64 h-64 opacity-20"
        style={{
          background:
            'radial-gradient(circle, rgba(37, 99, 235, 0.3) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-64 h-64 opacity-20"
        style={{
          background:
            'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 container-main">
        <div
          ref={contentRef}
          className="max-w-2xl mx-auto text-center"
        >
          <Quote className="w-12 h-12 text-cyan-accent/50 mx-auto mb-6" />

          <p className="text-xl sm:text-3xl font-bold text-white italic leading-relaxed">
            "With good data and the right technology, people and institutions
            today can still solve hard problems and change the world for the
            better."
          </p>

          <p className="mt-8 text-sm text-white/50">— The NXT Leap Team</p>
        </div>
      </div>
    </section>
  )
}
