export default function Container({ className = '', children, ...rest }) {
  return <div className={`mx-auto w-full max-w-[1280px] px-5 md:px-10 lg:px-20 ${className}`} {...rest}>{children}</div>
}
