import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import IconTile from '../ui/IconTile'
import { features } from '../../data/content'

export default function Features() {
  return (
    <section id="features" className="px-3 py-6 md:px-6">
      <Container className="rounded-xl bg-white py-14 lg:pb-20 lg:pt-[72px]">
        <SectionHeading title="One workspace. Complete control over your time." text="Bring your time tracking, projects and team activities together with tools designed to simplify your everyday workflow." />
        <div className="mt-10 grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {features.map(f => (
            <article key={f.title} className="flex flex-col gap-3 rounded-lg bg-card p-6">
              <IconTile icon={f.icon} />
              <h3 className="text-lg font-semibold tracking-[-0.04em] text-heading">{f.title}</h3>
              <p className="leading-[22px] text-body">{f.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
