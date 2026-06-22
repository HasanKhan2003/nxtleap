import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

interface ScrollToTopProps {
  scrollTo: (target: string) => void
}

export default function ScrollToTop({ scrollTo }: ScrollToTopProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      onClick={() => scrollTo('#hero')}
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-blue-primary text-white flex items-center justify-center shadow-glow-blue transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(37,99,235,0.4)] ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ChevronUp size={20} />
    </button>
  )
}
