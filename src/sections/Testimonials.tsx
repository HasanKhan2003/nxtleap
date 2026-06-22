import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    quote:
      'At Momba.ai and multiple other companies, I have used DEV POD as a partner for technology talent multiple times. I have been thoroughly impressed with our partnership with DEV POD. They consistently provide exceptional talent at a highly competitive cost, delivering outstanding value for our organization. The DEV POD team demonstrates true ownership of every project, approaching every task with dedication, professionalism, and remarkable technical skills.\n\nWhat truly sets DEV POD apart is their proactive communication and relentless drive to exceed our expectations. Every resource we\'ve worked with has shown a strong sense of responsibility and a commitment to our success. I highly recommend DEV POD to any organization seeking high-quality, reliable, and economical technology solutions.',
    name: 'Asim Rizvi',
    title: 'Chief Executive Office - momba.ai',
  },
  {
    quote:
      'On behalf of Zension and the People & Culture team, I\'d like to share our sincere appreciation for the exceptional support provided by DEV POD with our staffing needs. Your team has consistently delivered high-quality engineering talent, helping us scale quickly and seamlessly.\n\nSo far, you\'ve helped us onboard multiple skilled Pakistani engineers who have integrated smoothly into our workflows and added real value from day one. DEV POD has truly become one of our most trusted augmentation partners, and we look forward to continuing this partnership as you expand your capabilities.\n\nThank you once again for your professionalism, speed, and commitment. Keep up the great work!',
    name: 'Ramia Khoury',
    title: 'Director People & Culture, Zension Technologies',
  },
  {
    quote:
      'Working with DEV POD has been absolutely fantastic. Their expertise in sourcing and pre-vetting high-quality candidates is exceptional, ensuring every interview we conduct is genuinely worthwhile. The seamless onboarding process, coupled with the team\'s open and easy communication, made integrating our new hires effortless. DEV POD is a partner that delivers results, saves us time, and provides top talent.\n\nTheir dedication to understanding our specific needs and tailoring their approach has been impressive. The partnership has not only streamlined our hiring process but also significantly improved the quality of our team. We\'re thrilled to have DEV POD on our side! Highly recommended!',
    name: 'Brandon Smith',
    title: 'Head of Software Development, QuantumServe',
  },
]

export default function Testimonials() {
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
      id="testimonials"
      ref={sectionRef}
      className="relative py-12 sm:py-20 lg:py-28 overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-deep-navy">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              'radial-gradient(ellipse at 50% 30%, rgba(37, 99, 235, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 50% 70%, rgba(6, 182, 212, 0.08) 0%, transparent 50%)',
          }}
        />
      </div>

      <div className="relative z-10 container-main">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-8 sm:mb-14">
          <span className="section-label">CLIENT REVIEWS</span>
          <h2 className="mt-3 sm:mt-4 text-xl sm:text-4xl font-bold text-white">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col rounded-2xl bg-white/[0.04] p-5 sm:min-h-[520px] sm:p-8 lg:p-10 transition-all duration-400 hover:bg-white/[0.06]"
              style={{
                transitionTimingFunction:
                  'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4 sm:mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-blue-300 text-blue-300"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="line-clamp-8 whitespace-pre-line text-sm sm:line-clamp-none sm:text-base text-white leading-relaxed mb-6 sm:mb-10">
                {testimonial.quote}
              </p>

              {/* Divider */}
              <div className="mt-auto h-px bg-blue-300/35 mb-5 sm:mb-6" />

              {/* Author */}
              <div>
                <p className="font-semibold text-cyan-accent">
                  {testimonial.name}
                </p>
                <p className="text-white text-sm">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
