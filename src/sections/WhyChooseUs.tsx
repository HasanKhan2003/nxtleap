import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const reasons = [
  {
    number: '01',
    title: 'Proven Expertise',
    description:
      '30+ years of combined leadership experience in tech innovation.',
  },
  {
    number: '02',
    title: 'Agility at Scale',
    description:
      'Rapid deployment of talent and solutions without compromising quality.',
  },
  {
    number: '03',
    title: 'Future-Ready',
    description:
      'We embed scalability and adaptability into every engagement.',
  },
  {
    number: '04',
    title: 'Client-Centric',
    description:
      'Transparent collaboration and tailored strategies designed around your unique business needs.',
  },
  {
    number: '05',
    title: 'Global Reach',
    description:
      'Serving startups to Fortune 500 companies worldwide with a consistent standard of excellence.',
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
                With good data and the right technology, people and institutions
                today can still solve hard problems and change the world for the
                better.
              </p>
            </div>

            <img
              src="/images/shape-square-2.png"
              alt=""
              className="hidden sm:block mx-auto w-44 sm:w-56 lg:w-full object-contain"
              loading="lazy"
            />
          </div>

          <div className="mt-12 sm:mt-28">
            <div className="flex items-center justify-center gap-6">
              <div className="hidden h-px flex-1 bg-cyan-accent sm:block" />
              <h3 className="text-2xl sm:text-5xl font-bold uppercase text-cyan-accent">
                Trusted By
              </h3>
              <div className="hidden h-px flex-1 bg-cyan-accent sm:block" />
            </div>

            <div className="mt-[-2px] rounded-2xl border-2 border-cyan-accent px-4 sm:px-6 py-6 sm:py-10 overflow-hidden">
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
