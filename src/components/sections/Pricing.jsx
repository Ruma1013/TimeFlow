import { useState } from 'react'
import { Check } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { plans } from '../../data/content'

export default function Pricing() {
  const [annual, setAnnual] = useState(true)
  const price = p => (annual ? Math.round(p * 0.8) : p)
  return (
    <section id="pricing" className="pb-16 md:pb-24">
      <Container>
        <div className="text-center">
          <span className="inline-block rounded-full bg-pill px-4 py-1.5 text-xs font-medium text-primary-dark">Pricing</span>
          <h2 className="mt-4 text-3xl font-semibold capitalize tracking-[-0.02em] text-black md:text-5xl">Simple pricing for every stage</h2>
          <p className="mt-3 text-subtle">Choose a plan that fits your team. Upgrade or downgrade anytime.</p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div role="group" aria-label="Billing period" className="inline-flex rounded-full bg-white p-1 shadow-sm">
              {[['Monthly', false], ['Annually', true]].map(([l, v]) => (
                <button key={l} aria-pressed={annual === v} onClick={() => setAnnual(v)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${annual === v ? 'bg-primary text-white' : 'text-muted'}`}>{l}</button>
              ))}
            </div>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">Save 20%</span>
          </div>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map(p => (
            <article key={p.name} className={`relative flex flex-col rounded-2xl p-7 ${p.popular ? 'bg-primary text-white shadow-[0_24px_60px_rgba(79,70,229,0.35)]' : 'bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)]'}`}>
              {p.popular && <span className="absolute right-6 top-6 rounded-full bg-white/20 px-3 py-1 text-xs font-medium">Most popular</span>}
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className={`mt-2 min-h-10 text-sm ${p.popular ? 'text-white/80' : 'text-muted'}`}>{p.desc}</p>
              <p className="mt-6 flex items-end gap-1"><span className="text-5xl font-semibold tracking-tight">${price(p.price)}</span><span className={`pb-1.5 text-sm ${p.popular ? 'text-white/80' : 'text-muted'}`}>/month</span></p>
              <p className={`mt-1 text-xs ${p.popular ? 'text-white/80' : 'text-muted'}`}>{p.limit}</p>
              <Button href="#" variant={p.popular ? 'inverse' : 'outline'} className="mt-6 self-start">{p.cta}</Button>
              <hr className={`my-6 ${p.popular ? 'border-white/20' : 'border-slate-100'}`} />
              <ul className="space-y-3 text-sm">
                {p.features.map(f => <li key={f} className="flex items-center gap-2.5"><Check className="size-4 shrink-0" aria-hidden="true" />{f}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
