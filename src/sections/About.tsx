import { Linkedin } from 'lucide-react'

const leaderMessages = [
  {
    name: 'SAAD FAROOQ',
    role: 'Message from Founder & CEO',
    image: '/images/saad_farooq.png',
    imageSide: 'left',
    linkedin: 'https://www.linkedin.com/in/saadfarooq-hrpod/',
    paragraphs: [
      'At DEVPOD, our mission is to help businesses build, scale, and innovate through reliable technology, strong talent, and future-ready solutions. As digital transformation continues to reshape the world, we remain committed to making high-quality development more accessible, collaborative, and scalable for enterprises and builders worldwide, while staying focused on innovation, excellence, and long-term client success.'
    ],
  },
  {
    name: 'TALAL KHALID',
    role: 'Message from Co-Founder & COO',
    image: '/images/talal_khalid.png',
    imageSide: 'right',
    linkedin: 'https://www.linkedin.com/in/mtalalkhalid-hrpod/',
    paragraphs: [
      'At DEVPOD, our focus is on building strong systems, reliable operations, and long-term partnerships that help businesses scale with confidence. As we grow, we remain committed to trust, transparency, agility, and consistent delivery, ensuring every engagement creates real value for our clients. Together with our teams and partners, we aim to challenge limits, deliver with integrity, and build DEVPOD into a global technology partner known for excellence and impact.'
    ],
  },
  {
    name: 'ASIM RIZVI',
    role: 'Message from Strategic Advisor',
    image: '/images/asim_rizvi.png',
    imageSide: 'left',
    linkedin: 'https://www.linkedin.com/in/rizviasim/',
    paragraphs: [
      'At DEVPOD, I see a strong opportunity to help businesses scale through the right mix of technology, talent, and strategic execution. My role is to support the team with practical guidance, industry insight, and a focus on building solutions that are reliable, scalable, and aligned with real business needs. Together, we aim to create lasting value for clients by combining innovation, operational discipline, and trusted delivery.',
    ],
  },
]

function LeaderImage({
  image,
  name,
  role,
  linkedin,
}: {
  image: string
  name: string
  role: string
  linkedin?: string
}) {
  return (
    <div className="mx-auto w-full max-w-[250px] sm:max-w-[280px] text-center">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full object-contain"
          loading="lazy"
        />
        <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2">
          <div className="relative inline-block">
            <span className="rounded-md bg-black px-2.5 sm:px-3 py-1 text-[10px] sm:text-sm text-white">
              {role}
            </span>
            {linkedin ? (
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="absolute -right-4 sm:-right-5 -top-6 sm:-top-7 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border-2 border-white bg-blue-primary text-white"
                aria-label={`${name} LinkedIn profile`}
              >
                <Linkedin className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </a>
            ) : (
              <span className="absolute -right-4 sm:-right-5 -top-6 sm:-top-7 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border-2 border-white bg-blue-primary text-white">
                <Linkedin className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </span>
            )}
          </div>
        </div>
      </div>
      <h3 className="mt-4 whitespace-nowrap text-xl sm:text-2xl font-bold text-white">
        {name}
      </h3>
    </div>
  )
}

export default function About() {
  return (
    <section id="about">
      <div className="bg-off-white py-16 sm:py-20 lg:py-28">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="w-10 h-[3px] gradient-bg rounded-full mb-4" />

              <span className="section-label-light">ABOUT US</span>

              <h2 className="mt-4 text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
                We Bridge the Gap Between Vision and Execution
              </h2>

              <p className="mt-6 text-base text-slate-600 leading-relaxed max-w-lg">
                NXT Leap is a cutting-edge technology partner dedicated to
                accelerating business innovation through expert staff
                augmentation, bespoke software development, and strategic
                digital transformation consultancy. We empower enterprises to
                scale faster, build smarter, and future-proof their operations
                in an ever-evolving digital landscape.
              </p>

              <div className="mt-8 pl-5 border-l-[3px] border-blue-primary">
                <p className="text-base sm:text-lg text-slate-800 italic leading-relaxed">
                  "We empower businesses to grow and innovate by delivering
                  elite tech talent, custom development, and strategic digital
                  transformation - bridging vision and execution for a
                  future-ready world."
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <img
                src="/images/about-3d-shapes.png"
                alt="Abstract 3D geometric shapes representing innovation and technology"
                className="w-full max-w-[260px] sm:max-w-md animate-float"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-deep-navy text-white">
        <div className="container-main">
        <div className="grid grid-cols-1 items-center gap-8 py-12 sm:py-20 lg:min-h-[640px] lg:grid-cols-2 lg:gap-10 lg:py-28">
          <div className="max-w-2xl">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold uppercase text-cyan-accent">
                Vision
              </h2>
              <p className="mt-5 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-8">
                To be the world's most trusted partner in tech innovation,
                enabling businesses to harness the power of technology for
                sustainable growth and competitive advantage.
              </p>
            </div>

            <div className="mt-14">
              <h2 className="text-3xl sm:text-5xl font-bold uppercase text-cyan-accent">
                Mission
              </h2>
              <p className="mt-5 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-8">
                We empower businesses to grow and innovate by delivering elite
                tech talent, custom development, and strategic digital
                transformation-bridging vision and execution for a future-ready
                world.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/handshake-ai.png"
              alt="Digital handshake representing technology partnership"
              className="w-full max-w-[280px] sm:max-w-xl object-contain"
              loading="lazy"
            />
          </div>
        </div>

        <div className="py-12 sm:py-20 lg:py-28">
          <div className="mb-10 sm:mb-14 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold uppercase text-cyan-accent">
              MEET THE LEADERSHIP
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-10">
            {leaderMessages.map((leader) => (
              <div
                key={leader.name}
                className="flex flex-col items-center text-center gap-6 rounded-2xl bg-white/[0.04] p-5 sm:p-8 lg:p-10 transition-all duration-400 hover:bg-white/[0.06]"
                style={{
                  transitionTimingFunction:
                    'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              >
                <LeaderImage
                  image={leader.image}
                  name={leader.name}
                  role={leader.role}
                  linkedin={leader.linkedin}
                />

                <div className="max-w-sm space-y-4 text-sm leading-7 sm:text-base sm:leading-8 lg:text-[17px]">
                  {leader.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
