import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-gradient-to-r from-gold to-gold-light text-navy shadow-lg shadow-gold/25 hover:shadow-gold/40 hover:brightness-105',
  secondary:
    'bg-white/10 text-white border border-white/25 hover:bg-white/20 backdrop-blur-sm',
  outline:
    'border border-navy/20 text-navy hover:border-gold hover:text-gold-dark bg-white/60',
  ghost: 'text-navy hover:text-gold',
  dark: 'bg-navy text-white hover:bg-navy-light',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  type = 'button',
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-wide transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
