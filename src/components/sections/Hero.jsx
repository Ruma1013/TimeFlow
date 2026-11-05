import Container from '../ui/Container'
import Button from '../ui/Button'
import Dashboard from '../mockups/Dashboard'
import { trusted } from '../../data/content'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-12 md:pt-16">
      <img src="/images/hero-bg.webp" alt="" aria-hidden="true" width="2000" height="974"
        className="pointer-events-none absolute left-1/2 top-[150px] -z-0 w-[1964px] max-w-none -translate-x-1/2 select-none" />
      <Container className="relative">
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
          <p className="rounded-full border border-primary-dark/10 bg-pill px-4 py-3 text-xs font-medium uppercase text-subtle sm:text-base">What’s new? Weekly productivity reports ›</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold capitalize leading-[1.05] tracking-[-0.04em] text-black sm:text-5xl md:text-[64px]">
            Make every hour count. Make every project matter.
          </h1>
          <p className="mt-4 max-w-[640px] text-balance text-base text-subtle">
            Track time effortlessly, manage projects with clarity, and understand where your team’s time goes. Everything you need to stay productive, all in one place.
          </p>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Button href="#pricing">Get Started Free</Button>
            <Button href="#features" variant="outline">Explore Features</Button>
          </div>
        </div>
        <Dashboard />
        <div className="mx-auto mt-20 max-w-[1000px] text-center">
          <p className="text-xl font-medium text-heading">Trusted by teams who value their time.</p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {trusted.map((t, i) => <li key={i} className={`text-lg ${t.cls}`}>{t.name}</li>)}
          </ul>
        </div>
      </Container>
    </section>
  )
}
