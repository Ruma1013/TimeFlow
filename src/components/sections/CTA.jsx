import Container from '../ui/Container'
import Button from '../ui/Button'

export default function CTA() {
  return (
    <section className="px-3 pb-16 md:px-6 md:pb-24">
      <Container className="rounded-2xl py-16 text-center md:py-20"
        style={{ backgroundImage: 'url(/images/cta-bg.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h2 className="text-balance text-3xl font-medium capitalize tracking-[-0.02em] text-black md:text-4xl">Your time is valuable. Start treating it that way.</h2>
        <p className="mx-auto mt-4 max-w-[640px] text-balance text-heading/80">Join thousands of professionals who track time and manage projects with TimeFlow.</p>
        <Button href="#pricing" className="mt-8 px-8">Get Started Free</Button>
        <p className="mt-6 text-sm text-heading/70">Free to get started. No credit card required.</p>
      </Container>
    </section>
  )
}
