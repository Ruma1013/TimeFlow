import { Timer, FolderKanban, Users, BarChart3 } from 'lucide-react'

export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
]

export const trusted = [
  { name: 'NORTHWIND', cls: 'font-semibold tracking-wide text-rose-600' },
  { name: 'Brightly', cls: 'font-semibold text-sky-600' },
  { name: 'KESTREL', cls: 'font-semibold tracking-wider text-slate-800' },
  { name: 'orbit.io', cls: 'font-semibold text-indigo-500' },
  { name: 'Mediagrove', cls: 'font-semibold italic text-emerald-600' },
  { name: 'KESTREL', cls: 'font-semibold tracking-wider text-slate-800' },
]

export const features = [
  { icon: Timer, title: 'Effortless time tracking', text: 'Start, pause and manage timers with a single click. Keep accurate records of every working hour without interrupting your workflow.' },
  { icon: FolderKanban, title: 'Project management', text: 'Organize tasks, monitor project progress and understand how time is distributed across your projects.' },
  { icon: Users, title: 'Team management', text: 'Keep everyone aligned with clear visibility into team activities, workloads and working hours.' },
  { icon: BarChart3, title: 'Smart reports & insights', text: 'Turn tracked hours into meaningful reports. Understand productivity, monitor project performance and make better decisions.' },
]

export const timesheet = [
  { project: 'Brand refresh', hours: ['4.0', '3.5', '4.5', '2.0', '0.5'] },
  { project: 'Mobile app', hours: ['2.5', '3.0', '2.0', '3.5', '2.0'] },
  { project: 'Website', hours: ['1.5', '2.0', '1.0', '2.5', '1.5'] },
]
export const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
export const recentEntries = [
  { name: 'Homepage wireframes', time: '1h 20m' },
  { name: 'Client review call', time: '45m' },
  { name: 'Design QA', time: '2h 10m' },
]
export const activeProjects = [
  { name: 'Brand refresh', time: '14.5h', pct: 80 },
  { name: 'Mobile app', time: '11.0h', pct: 60 },
  { name: 'Website rebuild', time: '8.5h', pct: 40 },
]
export const weekBars = [55, 40, 62, 88, 70, 30, 15]

export const steps = [
  { title: 'Create your workspace', text: 'Sign up in minutes and set up your personal or team workspace.' },
  { title: 'Track your time', text: 'Start tracking hours, organize your tasks by project and see where every minute goes.' },
  { title: 'Analyze and improve', text: 'Review reports, understand performance and make smarter decisions about how you work.' },
]

export const audience = [
  { title: 'For freelancers', text: 'Track billable hours, organize client projects and understand your productivity.' },
  { title: 'For agencies', text: 'Monitor project budgets, manage multiple clients and keep every team aligned.' },
  { title: 'For businesses', text: 'Gain visibility into team workloads with clear time tracking and reporting.' },
  { title: 'For remote teams', text: 'Keep distributed teams in sync with shared timesheets and live activity.' },
]

export const benefits = [
  { title: 'Better visibility', text: 'Understand where time goes.' },
  { title: 'Simplified workflows', text: 'Bring your everyday time management activities together.' },
  { title: 'Smarter decisions', text: 'Use clear reports to identify opportunities for improvement.' },
  { title: 'Improved accountability', text: 'Keep work transparent.' },
]
export const workload = [
  { name: 'Lena K.', role: 'Designer', load: '82%', color: 'bg-rose-400' },
  { name: 'Dev M.', role: 'Engineer', load: '74%', color: 'bg-sky-400' },
  { name: 'Priya R.', role: 'Project manager', load: '58%', color: 'bg-emerald-400' },
]

export const testimonials = {
  main: { quote: '“TimeFlow gives our team a much clearer picture of project hours. Managing multiple projects feels more organized than ever.”', name: 'Sarah Williams', role: 'Operations Lead, Brightly' },
  side: { quote: '“As a freelancer, keeping track of different client work used to be painful. Now it all lives in one place.”', name: 'Alex Morgan', role: 'Freelance designer' },
  stats: [
    { value: '+30%', text: 'More billable time captured' },
    { value: '+18%', text: 'Faster project delivery' },
  ],
}

export const plans = [
  { name: 'Starter', desc: 'For individuals getting started with time tracking.', price: 0, limit: 'Up to 3 projects', cta: 'Explore Features', features: ['One-click timers', 'Up to 3 projects', 'Basic reports', 'Email support'] },
  { name: 'Business', desc: 'For growing teams that need shared visibility.', price: 29, limit: 'Up to 25 projects', cta: 'Get Started Free', popular: true, features: ['Everything in Starter', 'Team management', 'Advanced reports', 'Priority support'] },
  { name: 'Pro', desc: 'For agencies and organizations managing many projects.', price: 79, limit: 'Unlimited projects', cta: 'Explore Features', features: ['Everything in Business', 'Unlimited projects', 'Custom reports', 'Dedicated account manager'] },
]

export const footerColumns = [
  { title: 'Product', links: ['Features', 'Time tracking', 'Project management', 'Reports', 'Pricing'] },
  { title: 'Solutions', links: ['Freelancers', 'Agencies', 'Businesses', 'Remote teams'] },
  { title: 'Resources', links: ['Help Center', 'Blog', 'Guides', 'FAQs'] },
  { title: 'Company', links: ['About us', 'Contact', 'Privacy policy', 'Terms of service'] },
]
