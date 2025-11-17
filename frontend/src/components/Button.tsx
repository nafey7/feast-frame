import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  className?: string
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition duration-200 cursor-pointer focus:outline-none focus:ring-2'

  const variants = {
    primary: 'bg-primary hover:bg-red-600 text-white disabled:bg-gray-400',
    secondary: 'bg-secondary hover:bg-orange-500 text-white disabled:bg-gray-400',
    outline: 'border-2 border-primary text-primary hover:bg-red-50 disabled:text-gray-400 disabled:border-gray-400',
  }

  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  )
}
