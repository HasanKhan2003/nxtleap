import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

interface NavbarProps {
  scrollTo: (target: string) => void
}

const navLinks = [
  { label: 'Home', target: '#hero' },
  { label: 'About', target: '#about' },
  { label: 'Services', target: '#services' },
  { label: 'Why Choose Us', target: '#why-choose-us' },
  { label: 'Testimonials', target: '#testimonials' },
  { label: 'Contact', target: '#contact' },
]

export default function Navbar({ scrollTo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (target: string) => {
    setMobileOpen(false)
    scrollTo(target)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(11,17,32,0.95)] backdrop-blur-xl border-b border-white/[0.08]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-main w-full flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#hero')}
            className="flex items-center gap-0 text-2xl font-bold tracking-tight"
          >
            <span className="text-white">nxtleap</span>
            <span className="text-blue-primary">.io</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleNavClick(link.target)}
                className="relative text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </button>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-sm font-medium text-white/70 hover:text-white transition-colors">
              Login
            </button>
            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-primary text-sm py-2.5 px-6"
            >
              Hire Talent
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-deep-navy/98 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <button
              key={link.target}
              onClick={() => handleNavClick(link.target)}
              className="text-2xl font-semibold text-white/80 hover:text-white transition-colors"
              style={{
                animationDelay: `${i * 50}ms`,
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className="btn-primary mt-4 px-10 py-4 text-lg"
          >
            Hire Talent
          </button>
        </div>
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-5 right-5 p-2 text-white"
          aria-label="Close menu"
        >
          <X size={28} />
        </button>
      </div>
    </>
  )
}
