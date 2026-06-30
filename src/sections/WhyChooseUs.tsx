import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const reasons = [
  {
    number: '01',
    title: 'Transparency',
    description:
      'Clear communication at every stage of the engagement.',
  },
  {
    number: '02',
    title: 'Honesty',
    description:
      'We stay open, realistic, and direct in every partnership.',
  },
  {
    number: '03',
    title: 'Ownership',
    description:
      'We take responsibility for results and keep working until the goal is achieved.',
  },
  {
    number: '04',
    title: 'Quality',
    description:
      'Vetted tech talent matched carefully to your business needs.',
  },
  {
    number: '05',
    title: 'Cost Efficiency',
    description:
      'Strong technical resources with better cost control and long-term value.',
  },
]

const logos = [
  '/images/logo-1byte-w.png',
  '/images/logo-7vals_w.png',
  '/images/logo-afiniti.png',
  '/images/logo-alethea.png',
  '/images/logo-bboxx.png',
  '/images/logo-creative-zone-tax-accounting.png',
  '/images/logo-dv8.png',
  '/images/logo-e-ocean-w.png',
  '/images/logo-fintechtik.png',
  '/images/logo-hala.png',
  '/images/logo-iconic_w.png',
  '/images/logo-mosaik.png',
  '/images/logo-oz.png',
  '/images/logo-siemens.png',
  '/images/logo-vectara.png',
  '/images/logo-vroozi.png',
  '/images/logo-zension.png',
]

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
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
      id="why-choose-us"
      ref={sectionRef}
      className="bg-slate-100-custom pt-12 sm:pt-20 lg:pt-28"
    >
      <div className="container-main">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-8 sm:mb-14">
          <span className="section-label-light">WHY CHOOSE US</span>
          <h2 className="mt-3 sm:mt-4 text-xl sm:text-4xl font-bold text-slate-900">
            5 Reasons to Partner With Us
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.slice(0, 3).map((reason) => (
              <div
                key={reason.number}
                className="bg-white rounded-2xl p-5 sm:p-8 shadow-card card-hover"
              >
                {/* Number Badge */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full gradient-bg flex items-center justify-center mb-4 sm:mb-5">
                  <span className="text-white font-bold text-sm">
                    {reason.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {reasons.slice(3).map((reason) => (
              <div
                key={reason.number}
                className="bg-white rounded-2xl p-5 sm:p-8 shadow-card card-hover"
              >
                {/* Number Badge */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full gradient-bg flex items-center justify-center mb-4 sm:mb-5">
                  <span className="text-white font-bold text-sm">
                    {reason.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-20 bg-deep-navy py-12 sm:py-20 lg:py-28 text-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_220px] items-center gap-6 sm:gap-10">
            <img
              src="/images/shape-triangle.png"
              alt=""
              className="hidden sm:block mx-auto w-44 sm:w-56 lg:w-full object-contain"
              loading="lazy"
            />

            <div className="text-center">
              <h2 className="text-2xl sm:text-5xl font-bold uppercase text-cyan-accent">
                What We Believe
              </h2>
              <p className="mx-auto mt-5 sm:mt-8 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8">
                Deliver quality and cost efficiency with an obsession for success.
                Be diligent and transparent in communication, and our clients
                will trust us as we grow together.
              </p>
            </div>

            <img
              src="/images/shape-square-2.png"
              alt=""
              className="hidden sm:block mx-auto w-44 sm:w-56 lg:w-full object-contain"
              loading="lazy"
            />
          </div>

          <div className="mt-12 sm:mt-28 relative">
            <h3 className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-deep-navy px-4 sm:px-8 text-2xl sm:text-4xl font-bold uppercase text-cyan-accent whitespace-nowrap z-10">
              Trusted By
            </h3>

            <div className="rounded-2xl border-2 border-cyan-accent px-4 sm:px-6 py-6 sm:py-10 overflow-hidden">
              <div className="trusted-logo-track flex w-max items-center gap-8 sm:gap-14">
                {[...logos, ...logos].map((logo, index) => (
                  <div
                    key={`${logo}-${index}`}
                    className="flex h-10 w-24 sm:h-14 sm:w-36 shrink-0 items-center justify-center"
                  >
                    <img
                      src={logo}
                      alt=""
                      className="max-h-7 max-w-24 sm:max-h-10 sm:max-w-32 object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}