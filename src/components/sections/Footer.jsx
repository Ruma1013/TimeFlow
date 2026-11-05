import Container from '../ui/Container'
import Logo from '../ui/Logo'
import { footerColumns } from '../../data/content'

export default function Footer() {
  return (
    <footer className="bg-white pt-16">
      <Container>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Logo />
            <p className="mt-3 text-body">Make every hour count.</p>
          </div>
          {footerColumns.map(c => (
            <div key={c.title}>
              <h3 className="font-semibold text-heading">{c.title}</h3>
              <ul className="mt-4 space-y-3">
                {c.links.map(l => <li key={l}><a href="#" className="text-body hover:text-primary">{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-14 border-t border-slate-100 py-8 text-sm text-body">Copyright © 2026 TimeFlow. All rights reserved.</p>
      </Container>
    </footer>
  )
}
