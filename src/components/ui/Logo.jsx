export default function Logo({ className = '' }) {
  return (
    <a href="#top" className={`inline-flex items-center gap-2 ${className}`} aria-label="TimeFlow home">
      <span className="size-6 rounded-full border-[4.8px] border-primary-dark" aria-hidden="true" />
      <span className="font-display text-2xl font-extrabold tracking-[-0.05em] text-[#0e0f1c]">TimeFlow</span>
    </a>
  )
}
