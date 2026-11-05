import Container from '../ui/Container'
import { TimesheetCard, ProjectsCard, ChartCard } from '../mockups/WorkflowCards'

export default function Workflow() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-4 md:grid-cols-2 md:gap-10">
          <h2 className="text-balance text-3xl font-medium capitalize tracking-[-0.02em] text-black md:text-[40px] md:leading-[1.2]">See your entire workflow at a glance.</h2>
          <p className="text-subtle">Get a clear picture of your weekly hours, ongoing projects and team activities from one simple dashboard.</p>
        </div>
        <div className="mt-10 grid gap-5 rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-5 md:p-8 lg:grid-cols-[1.3fr_1fr_1fr]">
          <TimesheetCard /><ProjectsCard /><ChartCard />
        </div>
      </Container>
    </section>
  )
}
