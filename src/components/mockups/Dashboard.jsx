import { weekBars } from '../../data/content'

const side = ['Dashboard', 'Timesheet', 'Projects', 'Team', 'Reports']
const tabs = ['Overview', 'Timer', 'Calendar', 'Clients', 'History']

function Stat({ label, value, className = '' }) {
  return (
    <div className={`flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm ${className}`}>
      <span className="grid size-8 place-items-center rounded-lg bg-tint"><span className="size-3 rounded-full bg-primary" /></span>
      <div><p className="text-[11px] text-muted">{label}</p><p className="text-sm font-semibold">{value}</p></div>
    </div>
  )
}

function Ring() {
  return (
    <div className="grid place-items-center">
      <svg viewBox="0 0 104 104" className="size-24" role="img" aria-label="Timer running">
        <circle cx="52" cy="52" r="44" fill="none" stroke="#e0e7ff" strokeWidth="10" />
        <circle cx="52" cy="52" r="44" fill="none" stroke="#4f46e5" strokeWidth="10" strokeLinecap="round" strokeDasharray="276" strokeDashoffset="70" transform="rotate(-90 52 52)" />
        <rect x="42" y="42" width="20" height="20" rx="4" fill="#4f46e5" />
      </svg>
      <p className="mt-2 text-sm font-semibold tabular-nums">01:26:50</p>
    </div>
  )
}

const projects = [['Brand refresh', '14.5h'], ['Mobile app', '11.0h'], ['Website rebuild', '8.5h']]
const entries = [['Homepage wireframes', '1h 20m'], ['Client review call', '45m'], ['Design QA', '2h 10m']]

function MiniList({ title, rows }) {
  return (
    <div className="rounded-xl bg-white p-3 shadow-sm">
      <p className="mb-2 font-semibold">{title}</p>
      {rows.map(([n, t]) => <p key={n} className="flex justify-between py-1 text-muted"><span>{n}</span><span>{t}</span></p>)}
    </div>
  )
}

export default function Dashboard() {
  return (
    <div className="relative mx-auto mt-12 max-w-[940px] lg:mt-16">
      <div className="rounded-3xl border border-white/80 bg-white/70 p-3 shadow-[0_24px_80px_rgba(79,70,229,0.18)] backdrop-blur-md sm:p-4">
        <div className="flex gap-4 rounded-2xl bg-[#f8f8fc] p-3 sm:p-4">
          <aside className="hidden w-28 shrink-0 text-xs sm:block">
            <p className="mb-3 px-2 font-semibold">TimeFlow</p>
            {side.map((s, i) => (
              <p key={s} className={`mb-1 rounded-md px-2 py-1.5 ${i === 0 ? 'bg-tint font-medium text-primary' : 'text-muted'}`}>{s}</p>
            ))}
          </aside>
          <div className="min-w-0 flex-1">
            <div className="mb-3 flex gap-4 overflow-hidden text-xs text-muted">
              {tabs.map((t, i) => <span key={t} className={i === 0 ? 'font-medium text-primary' : ''}>{t}</span>)}
            </div>
            <div className="grid items-center gap-4 sm:grid-cols-3">
              <div className="hidden sm:block">
                <p className="mb-2 text-xs font-semibold">Time summary</p>
                <Stat label="Today" value="6h 42m" className="mb-2" />
                <Stat label="This week" value="37h 10m" />
              </div>
              <Ring />
              <div className="hidden items-end justify-between gap-2 sm:flex" style={{ height: 120 }} aria-hidden="true">
                {['M', 'T', 'W', 'T', 'F'].map((d, i) => (
                  <div key={i} className="flex h-full flex-1 flex-col justify-end text-center text-[10px] text-muted">
                    <div className="rounded-md bg-primary/70" style={{ height: `${weekBars[i]}%` }} />
                    <span className="mt-1">{d}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 hidden gap-3 text-xs sm:grid sm:grid-cols-2">
              <MiniList title="Active projects" rows={projects} />
              <MiniList title="Recent entries" rows={entries} />
            </div>
          </div>
        </div>
      </div>

      {/* Floating cards: desktop only */}
      <div className="absolute -right-10 top-16 hidden w-[250px] rounded-2xl bg-white p-5 shadow-xl lg:block">
        <p className="mb-3 text-sm font-semibold">Live status</p>
        {[['Lena K.', 'Tracking', true], ['Dev M.', 'Tracking', true], ['Priya R.', 'Idle 12m', false]].map(([n, s, on]) => (
          <div key={n} className="flex items-center gap-3 py-2">
            <span className="size-9 rounded-full bg-gradient-to-br from-indigo-300 to-pink-300" />
            <div className="flex-1 text-sm"><p className="font-medium">{n}</p><p className="text-xs text-muted">{s}</p></div>
            {on && <span className="h-4 w-7 rounded-full bg-primary p-0.5"><span className="ml-auto block size-3 rounded-full bg-white" /></span>}
          </div>
        ))}
      </div>
      <div className="absolute -left-12 top-[230px] hidden w-[250px] rounded-2xl bg-white p-2 shadow-xl lg:block">
        <Stat label="Today" value="6h 42m" />
        <Stat label="This week" value="37h 10m" />
      </div>
    </div>
  )
}
