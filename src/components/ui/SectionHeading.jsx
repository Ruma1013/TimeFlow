export default function SectionHeading({ title, text, align = 'center', className = '' }) {
  const a = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'
  return (
    <div className={`flex max-w-[800px] flex-col gap-3 ${a} ${className}`}>
      <h2 className="text-balance text-3xl font-medium capitalize tracking-[-0.02em] text-black md:text-[40px] md:leading-[1.2]">{title}</h2>
      {text && <p className="text-balance text-base text-subtle md:text-lg">{text}</p>}
    </div>
  )
}
