import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import { navLinks } from '../../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header id="top" className="sticky top-0 z-50 bg-nav/90 shadow-[0_4px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl">
      <div className="mx-auto flex h-[75px] max-w-[1440px] items-center justify-between px-5 md:px-10 xl:px-20">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {navLinks.map(l => <a key={l.label} href={l.href} className="font-medium capitalize text-nav-link hover:text-primary">{l.label}</a>)}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" className="rounded-xl font-medium">Log In / Sign Up</Button>
          <Button variant="tint" className="rounded-xl font-medium">Get Started Free</Button>
        </div>
        <button className="rounded-md p-2 lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(o => !o)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-100 bg-nav px-5 pb-6 pt-2 lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            {navLinks.map(l => <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="py-3 font-medium capitalize text-nav-link">{l.label}</a>)}
          </nav>
          <div className="mt-3 flex flex-col gap-3">
            <Button variant="ghost" className="rounded-xl">Log In / Sign Up</Button>
            <Button variant="tint" className="rounded-xl">Get Started Free</Button>
          </div>
        </div>
      )}
    </header>
  )
}
