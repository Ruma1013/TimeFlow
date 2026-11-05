import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { steps } from '../../data/content'

const shell = 'rounded-2xl bg-gradient-to-br from-indigo-100 via-violet-50 to-sky-100 p-6'
const Bar = ({ w }) => <span className="mb-2 block h-2 rounded-full bg-primary/25" style={{ width: w }} />
const Badge = ({ children }) => <span className="absolute right-4 top-4 rounded-md bg-primary px-2.5 py-1 text-xs font-medium tabular-nums text-white">{children}</span>

function Illustration({ i }) {
  if (i === 2) return (
    <div className={`${shell} h-[250px] lg:h-[325px]`}>
      <div className="relative flex h-full flex-col justify-end rounded-xl bg-white/80 p-5 shadow-sm">
        <Badge>+18%</Badge>
        <div className="flex h-28 items-end gap-2" aria-hidden="true">
          {[35, 55, 45, 80].map((h, k) => <div key={k} className="flex-1 rounded-md bg-primary/60" style={{ height: `${h}%` }} />)}
        </div>
      </div>
    </div>
  )
  return (
    <div className={`${shell} h-[250px] lg:h-[315px]`}>
      <div className="relative h-full rounded-xl bg-white/80 p-5 pt-14 shadow-sm">
        <Badge>{i === 0 ? 'Team' : '01:26:50'}</Badge>
        <Bar w="60%" /><Bar w="80%" /><Bar w="55%" />
        <div className="mt-3 flex items-center gap-2"><span className={`size-6 rounded-md ${i === 0 ? 'bg-primary/80' : 'bg-emerald-500'}`} /><span className="h-2 flex-1 rounded-full bg-primary/25" /></div>
      </div>
    </div>
  )
}

export default function Steps() {
  return (
    <section id="how-it-works" className="px-3 md:px-6">
      <Container className="rounded-xl bg-white py-14 lg:pb-20 lg:pt-[72px]">
        <SectionHeading title="Three simple steps to better time management." text="Getting started with TimeFlow is simple. Spend less time managing your workflow, and more time doing meaningful work." />
        <ol className="mt-10 grid gap-10 lg:grid-cols-3 lg:items-start lg:gap-6">
          {steps.map((s, i) => (
            <li key={s.title} className={`flex flex-col gap-4 ${i === 1 ? 'lg:flex-col-reverse lg:pt-2' : ''}`}>
              <Illustration i={i} />
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-heading">{i + 1}. {s.title}</h3>
                <p className="mt-2 text-body">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
