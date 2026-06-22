import { Linkedin } from 'lucide-react'

const leaderMessages = [
  {
    name: 'SAAD FAROOQ',
    role: 'Message from Founder & CEO',
    image: '/images/saad-farooq.png',
    imageSide: 'left',
    paragraphs: [
      'As we stand on the threshold of a new era in technology, I am both proud and humbled to lead DEVPOD into the future. Our extraordinary journey rooted in relentless innovation and an unyielding commitment to excellence positions us not just as participants, but as pioneers shaping the very landscape of cloud development. In an age defined by digital transformation, our mission is bolder than ever: to empower creators, connect possibilities, and accelerate the world\'s technological evolution.',
      'With our world-class team and disruptive mindset, DEVPOD is architecting the next wave of intelligent infrastructure; open, secure, and infinitely scalable. Our vision is clear: to make high-performance development accessible, collaborative, and frictionless for enterprises and builders worldwide. Together, we are not just building products; we are forging a legacy that will redefine what\'s possible in tech.',
    ],
  },
  {
    name: 'TALAL KHALID',
    role: 'Message from Co-Founder & COO',
    image: '/images/talal_khalid.png',
    imageSide: 'right',
    paragraphs: [
      'At DEVPOD, operational excellence is not just a benchmark, it\'s a promise. As we navigate the complexities of hyper-scale growth, my focus remains steadfast on building resilient systems and fostering a culture of agility that empowers every innovator within our community. Our commitment to trust, transparency, and operational mastery sets a new standard in the tech industry.',
      'We are scaling with integrity, building partnerships that transcend boundaries, and delivering value that endures. My invitation to every stakeholder is simple: let\'s challenge norms, disrupt markets, and script the narrative of a global technology powerhouse together. The journey ahead is filled with opportunity, let\'s seize it with vision and collective resolve.',
    ],
  },
]

function LeaderImage({
  image,
  name,
  role,
}: {
  image: string
  name: string
  role: string
}) {
  return (
    <div className="relative mx-auto w-full max-w-[280px] sm:max-w-xl">
      <img
        src={image}
        alt={name}
        className="w-full object-contain"
        loading="lazy"
      />
      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 text-center">
        <div className="relative inline-block">
          <span className="rounded-md bg-black/80 px-2.5 sm:px-3 py-1 text-xs sm:text-base text-white">
            {role}
          </span>
          <span className="absolute -right-5 sm:-right-6 -top-7 sm:-top-8 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border-2 border-white bg-blue-primary text-white">
            <Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </span>
        </div>
        <h3 className="mt-2 whitespace-nowrap text-2xl sm:text-4xl font-bold text-white">
          {name}
        </h3>
      </div>
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

        {leaderMessages.map((leader) => (
          <div
            key={leader.name}
            className="grid grid-cols-1 items-center gap-6 py-12 sm:py-20 lg:min-h-[680px] lg:grid-cols-2 lg:gap-16 lg:py-28"
          >
            <div
              className={
                leader.imageSide === 'left'
                  ? 'order-1 lg:order-1'
                  : 'order-1 lg:order-2'
              }
            >
              <LeaderImage
                image={leader.image}
                name={leader.name}
                role={leader.role}
              />
            </div>

            <div
              className={
                leader.imageSide === 'left'
                  ? 'order-2 max-w-2xl space-y-5 text-sm leading-7 sm:space-y-8 sm:text-base sm:leading-8 lg:order-2 lg:text-[17px]'
                  : 'order-2 max-w-2xl space-y-5 text-sm leading-7 sm:space-y-8 sm:text-base sm:leading-8 lg:order-1 lg:text-[17px]'
              }
            >
              {leader.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}
