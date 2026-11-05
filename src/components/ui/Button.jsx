const variants = {
  primary: 'bg-primary text-white border-primary hover:bg-primary-dark hover:border-primary-dark',
  outline: 'bg-white text-primary border-primary hover:bg-tint',
  tint: 'bg-tint text-primary border-primary hover:bg-pill',
  ghost: 'bg-[#f3f4f5] text-black border-transparent hover:bg-[#e8e9eb]',
  inverse: 'bg-white text-primary border-white hover:bg-tint',
}

export default function Button({ variant = 'primary', href, className = '', children, ...rest }) {
  const cls = `inline-flex items-center justify-center rounded-lg border px-6 py-3 text-base font-semibold transition-colors ${variants[variant]} ${className}`
  return href ? <a href={href} className={cls} {...rest}>{children}</a> : <button type="button" className={cls} {...rest}>{children}</button>
}
