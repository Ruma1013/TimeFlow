import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { testimonials as t } from '../../data/content'

const Person = ({ name, role }) => (
  <div className="flex items-center gap-3">
    <span className="size-11 shrink-0 rounded-full bg-gradient-to-br from-indigo-300 to-pink-300" />
    <div><p className="font-semibold">{name}</p><p className="text-sm text-muted">{role}</p></div>
  </div>
)

export default function Testimonials() {
  return (
    <section className="pb-16 md:pb-24">
      <Container>
        <SectionHeading title="Good work starts with better time management." text="See how teams can bring more clarity and structure to their everyday projects." />
        <div className="mt-12 grid gap-5 lg:grid-cols-[1.09fr_1fr]">
          <figure className="flex min-h-[320px] flex-col justify-between gap-10 rounded-2xl bg-gradient-to-br from-violet-100 via-pink-50 to-indigo-50 p-8 lg:p-11">
            <blockquote className="text-2xl font-medium leading-snug tracking-tight text-heading md:text-[28px]">{t.main.quote}</blockquote>
            <figcaption><Person name={t.main.name} role={t.main.role} /></figcaption>
          </figure>
          <div className="flex flex-col gap-5">
            <figure className="rounded-2xl bg-tint p-6">
              <blockquote className="text-body">{t.side.quote}</blockquote>
              <figcaption className="mt-4"><Person name={t.side.name} role={t.side.role} /></figcaption>
            </figure>
            {t.stats.map(s => (
              <div key={s.value} className="rounded-2xl bg-tint p-6">
                <p className="text-5xl font-semibold tracking-tight text-heading">{s.value}</p>
                <p className="mt-1 text-body">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
