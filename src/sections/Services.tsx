import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  BadgeDollarSign,
  BriefcaseBusiness,
  Earth,
  Globe2,
  ShieldCheck,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: BriefcaseBusiness,
    title: 'Specialized Resourcing',
    description:
      'Access elite, vetted tech talent on demand to rapidly scale your teams. Flexible engagement models ensure the right developers, engineers, and specialists for every project.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Cost Leverage with Quality',
    description:
      'Our team is hand picked to your needs based our specialized sourcing network and bench. We guarantee the quality of our resources to ensure you receive the quality you deserve without worrying about market dynamics and exploding cost issues.',
  },
  {
    icon: ShieldCheck,
    title: 'Vertical Specialties',
    description:
      "We specialize so you don't have to. Our bench and recruitment expertise in three key areas below work to your advantage:",
    specialties: ['ServiceNow', 'Agentic AI Development', 'Full Stack Engineering', 'AI Enabled Quality Assurance'],
  },
  {
    icon: Earth,
    title: 'Time Zone Alignment',
    description:
      'Our team works in your time zone. We principally believe that interaction is critical for success especially for remote teams. To achieve success for you, we work in your time zone to ensure continuous communication and collaboration at each step of the engagement.',
  },
  {
    icon: Globe2,
    title: 'Our Reach is Your Leverage',
    description:
      'Because we have served more than 350+ clients across the globe, we have a wide reach for talent across Pakistan. Our award-winning recruiting team can find the skills and talent you need while ensuring your cost efficiency and quality is never compromised.',
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
        <div className="max-w-6xl">
          {/* Header */}
          <div ref={headerRef} className="mb-8 sm:mb-10">
            <span className="text-2xl sm:text-5xl font-bold uppercase text-cyan-accent">
              What We Offer
            </span>
          </div>

          {/* Service List */}
          <div className="grid grid-cols-1 gap-7 sm:gap-10 lg:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon
              const itemPlacement =
                index === 0
                  ? 'lg:col-start-1 lg:row-start-1'
                  : index === 3
                    ? 'lg:col-start-2 lg:row-start-1'
                  : index === 1
                      ? 'lg:col-start-1 lg:row-start-2'
                      : index === 4
                        ? 'lg:col-start-2 lg:row-start-2'
                        : 'lg:col-start-1 lg:row-start-3'

              return (
                <div
                  key={service.title}
                  className={`grid grid-cols-[48px_1fr] sm:grid-cols-[96px_1fr] gap-4 sm:gap-8 items-start ${itemPlacement}`}
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
                    <div className="max-w-2xl text-sm sm:text-base text-white leading-6 sm:leading-7 space-y-3">
                      <p>{service.description}</p>
                      {'specialties' in service && service.specialties ? (
                        <ul className="space-y-1 pl-5 list-disc text-white/90">
                          {service.specialties.map((specialty) => (
                            <li key={specialty}>{specialty}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
