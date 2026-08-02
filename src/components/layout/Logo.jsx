const heights = {
  sm: 'h-9',
  md: 'h-11 md:h-12',
  lg: 'h-16 md:h-20',
}

export default function Logo({ className = '', size = 'md' }) {
  return (
    <img
      src="/logo.png"
      alt="LEXTAX INDIA"
      className={`${heights[size]} w-auto object-contain rounded-md ${className}`}
    />
  )
}
