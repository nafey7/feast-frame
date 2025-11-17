import { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  loading?: boolean
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center gap-2'

  const variants = {
    primary: 'bg-primary hover:bg-red-600 text-white focus:ring-primary disabled:bg-gray-400 disabled:cursor-not-allowed',
    secondary: 'bg-secondary hover:bg-orange-500 text-white focus:ring-secondary disabled:bg-gray-400 disabled:cursor-not-allowed',
    outline: 'border-2 border-primary text-primary hover:bg-red-50 focus:ring-primary disabled:text-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed'
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3.5 text-lg',
  }

  const widthClass = fullWidth ? 'w-full' : ''

  return (
    <button
      disabled={disabled || loading}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </button>
  )
}
