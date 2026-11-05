import { Check, CheckCircle2 } from 'lucide-react'
import Container from '../ui/Container'
import { benefits, workload } from '../../data/content'

export default function Benefits() {
  return (
    <section className="pb-16 md:pb-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-semibold text-primary">Why TimeFlow</p>
            <h2 className="mt-1 text-balance text-3xl font-medium capitalize tracking-[-0.02em] text-black md:text-[40px] md:leading-[1.2]">Less time managing work. More time making progress.</h2>
            <p className="mt-4 text-subtle">TimeFlow gives you the clarity and control to turn everyday tracking into better results.</p>
            <ul className="mt-8 space-y-5">
              {benefits.map(b => (
                <li key={b.title} className="flex gap-4">
                  <Check className="mt-0.5 size-6 shrink-0 text-primary" aria-hidden="true" />
                  <div><p className="font-semibold text-heading">{b.title}</p><p className="text-body">{b.text}</p></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mx-auto w-full max-w-[500px] rounded-2xl bg-white p-7 shadow-[0_24px_60px_rgba(79,70,229,0.15)]">
            <span className="absolute -right-3 -top-4 grid size-14 place-items-center rounded-full bg-emerald-500 text-white shadow-lg"><CheckCircle2 aria-hidden="true" /></span>
            <h3 className="text-lg font-semibold">Team workload</h3>
            <ul className="mt-4 divide-y divide-slate-100">
              {workload.map(p => (
                <li key={p.name} className="flex items-center gap-4 py-4">
                  <span className={`size-11 rounded-full ${p.color}`} />
                  <div className="flex-1"><p className="font-medium">{p.name}</p><p className="text-sm text-muted">{p.role}</p></div>
                  <p className="font-semibold">{p.load}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
