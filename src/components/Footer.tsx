import { Linkedin, Facebook, Instagram, Twitter } from 'lucide-react'

interface FooterProps {
  scrollTo: (target: string) => void
}

const companyLinks = [
  { label: 'Newsletter', target: '#' },
  { label: 'Careers', target: '#' },
  { label: 'Events', target: '#' },
]

const talentLinks = [
  { label: 'Developers', target: '#' },
  { label: 'Designers', target: '#' },
  { label: 'AI Engineers', target: '#' },
  { label: 'Project Managers', target: '#' },
  { label: 'DevOps Engineers', target: '#' },
]

const serviceLinks = [
  { label: 'Staff Augmentation', target: '#services' },
  { label: 'Software Development', target: '#services' },
  { label: 'Cloud Solutions', target: '#services' },
  { label: 'AI & ML', target: '#services' },
  { label: 'Data Science', target: '#services' },
]

export default function Footer({ scrollTo }: FooterProps) {
  const handleClick = (target: string) => {
    if (target.startsWith('#')) {
      scrollTo(target)
    }
  }

  return (
    <footer className="bg-deep-navy border-t border-white/[0.08]">
      <div className="container-main py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <button onClick={() => handleClick('#hero')} className="flex items-center text-2xl font-bold tracking-tight mb-4">
              <span className="text-white">nxtleap</span>
              <span className="text-blue-primary">.io</span>
            </button>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              Your trusted partner for remote tech talent and staff augmentation. Scale your team with elite developers.
            </p>
            <div className="flex items-center gap-4">
              {[Linkedin, Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-blue-primary/20 hover:border-blue-primary/30 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleClick(link.target)}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Talent */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4">Talent</h4>
            <ul className="space-y-3">
              {talentLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleClick(link.target)}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleClick(link.target)}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            Copyright &copy; 2026 nxtleap. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Trusted by', 'Industry', 'Leaders'].map((text, i) => (
              <span key={i} className="text-xs text-white/30 uppercase tracking-wider">
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
