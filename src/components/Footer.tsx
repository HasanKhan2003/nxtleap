interface FooterProps {
  scrollTo: (target: string) => void
}

export default function Footer({ scrollTo }: FooterProps) {
  return (
    <footer className="bg-deep-navy border-t border-white/[0.08]">
      <div className="container-main py-10 sm:py-14 flex flex-col items-center justify-center text-center gap-4">
        <button
          onClick={() => scrollTo('#hero')}
          className="flex items-center gap-0 text-2xl font-bold tracking-tight"
        >
          <span className="text-white">nxtleap</span>
          <span className="text-blue-primary">.io</span>
        </button>
        <p className="text-sm text-white/40">
          Copyright &copy; 2026 nxtleap. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
