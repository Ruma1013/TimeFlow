export default function IconTile({ icon: Icon, className = '' }) {
  return (
    <span className={`inline-grid size-11 place-items-center rounded-xl bg-primary text-white shadow-[0_4px_5.5px_rgba(0,0,0,0.06)] ${className}`}>
      <Icon className="size-[22px]" aria-hidden="true" />
    </span>
  )
}
