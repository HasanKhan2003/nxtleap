import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import WhyChooseUs from './sections/WhyChooseUs'
import WhatWeBelieve from './sections/WhatWeBelieve'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf as unknown as gsap.TickerCallback)
    }
  }, [])

  const scrollTo = (target: string) => {
    lenisRef.current?.scrollTo(target, { offset: -72 })
  }

  return (
    <div className="min-h-screen bg-deep-navy">
      <Navbar scrollTo={scrollTo} />
      <main>
        <Hero scrollTo={scrollTo} />
        <About />
        <Services />
        <WhyChooseUs />
        <WhatWeBelieve />
        <Testimonials />
        <Contact />
      </main>
      <Footer scrollTo={scrollTo} />
      <ScrollToTop scrollTo={scrollTo} />
    </div>
  )
}

export default App
