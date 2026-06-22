import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Users, Code2, Lightbulb } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: Users,
    title: 'Staff Augmentation',
    description:
      'Access elite, vetted tech talent on demand to rapidly scale your teams. Flexible engagement models ensure the right developers, engineers, and specialists for every project.',
  },
  {
    icon: Code2,
    title: 'Tech Development Solutions',
    description:
      'Custom software development aligned with your business goals, built to be agile, scalable, and secure. We deliver complete solutions from ideation to deployment.',
  },
  {
    icon: Lightbulb,
    title: 'Digital Transformation Consultancy',
    description:
      'Comprehensive audits to uncover growth opportunities, with clear roadmaps for AI, cloud, and automation adoption. We empower innovation and ensure seamless change management.',
  },
]

export default function Services() {
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
      id="services"
      ref={sectionRef}
      className="relative py-12 sm:py-20 lg:py-28 overflow-hidden"
    >
      {/* Subtle mesh gradient bg */}
      <div className="absolute inset-0 bg-deep-navy">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              'radial-gradient(ellipse at 30% 20%, rgba(37, 99, 235, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
          }}
        />
      </div>

      <div className="relative z-10 container-main">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-[1fr_0.85fr]">
          <div>
            {/* Header */}
            <div ref={headerRef} className="mb-8 sm:mb-10">
              <span className="text-2xl sm:text-5xl font-bold uppercase text-cyan-accent">
                What We Offer
              </span>
            </div>

            {/* Service List */}
            <div className="space-y-7 sm:space-y-10">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <div
                    key={service.title}
                    className="grid grid-cols-[48px_1fr] sm:grid-cols-[96px_1fr] gap-4 sm:gap-8 items-start"
                  >
                    {/* Icon */}
                    <div className="flex h-12 w-12 sm:h-24 sm:w-24 items-center justify-center">
                      <Icon
                        className="h-10 w-10 sm:h-20 sm:w-20 text-white"
                        strokeWidth={1.8}
                      />
                    </div>

                    <div>
                      {/* Title */}
                      <h3 className="text-lg sm:text-2xl font-bold uppercase text-cyan-accent mb-3 sm:mb-4">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="max-w-2xl text-sm sm:text-base text-white leading-6 sm:leading-7">
                        {service.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/superman-art.png"
              alt="Low-poly superhero figure representing scalable services"
              className="w-full max-w-[260px] sm:max-w-md lg:max-w-xl object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
