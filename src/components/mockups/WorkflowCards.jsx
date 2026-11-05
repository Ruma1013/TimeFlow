import { days, timesheet, recentEntries, activeProjects, weekBars } from '../../data/content'

const card = 'rounded-2xl border border-white bg-white/80 p-5 shadow-[0_8px_30px_rgba(79,70,229,0.08)]'
const label = 'mb-3 text-xs font-semibold text-heading'

export function TimesheetCard() {
  return (
    <div className={card}>
      <p className={label}>Weekly timesheet</p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[300px] text-left text-xs">
          <thead><tr className="text-muted"><th className="py-2 font-medium">Project</th>{days.map(d => <th key={d} className="py-2 text-center font-medium">{d}</th>)}</tr></thead>
          <tbody>
            {timesheet.map(r => (
              <tr key={r.project} className="border-t border-slate-100">
                <td className="py-2">{r.project}</td>{r.hours.map((h, i) => <td key={i} className="py-2 text-center">{h}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={`${label} mt-5`}>Recent entries</p>
      <table className="w-full text-xs">
        <tbody>
          {recentEntries.map(e => (
            <tr key={e.name} className="border-t border-slate-100"><td className="py-2">{e.name}</td><td className="py-2 text-right text-muted">{e.time}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function ProjectsCard() {
  return (
    <div className={card}>
      <p className={label}>Active projects</p>
      <ul className="space-y-4">
        {activeProjects.map(p => (
          <li key={p.name}>
            <div className="mb-1.5 flex justify-between text-xs"><span className="font-semibold">{p.name}</span><span className="text-muted">{p.time}</span></div>
            <div className="h-1.5 rounded-full bg-tint"><div className="h-full rounded-full bg-primary" style={{ width: `${p.pct}%` }} /></div>
          </li>
        ))}
      </ul>
      <p className={`${label} mt-8`}>Team activity</p>
      <p className="flex items-center gap-2 text-xs text-muted"><span className="size-2 rounded-full bg-emerald-500" />3 teammates tracking now</p>
    </div>
  )
}

export function ChartCard() {
  return (
    <div className={card}>
      <p className={label}>Productivity analytics</p>
      <p className="text-4xl font-semibold tracking-tight">37.0h</p>
      <p className="mb-4 text-xs text-emerald-600">+12% vs last week</p>
      <div className="flex h-28 items-end gap-2" aria-hidden="true">
        {weekBars.map((h, i) => <div key={i} className="flex-1 rounded-md bg-primary/60" style={{ height: `${h}%` }} />)}
      </div>
    </div>
  )
}
