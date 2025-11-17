import { useState, FormEvent } from 'react'

interface SearchBarProps {
  placeholder?: string
  onSearch: (query: string) => void
  initialValue?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
  showIcon?: boolean
}

export default function SearchBar({
  placeholder = 'Search...',
  onSearch,
  initialValue = '',
  size = 'md',
  className = '',
  showIcon = true
}: SearchBarProps) {
  const [query, setQuery] = useState(initialValue)

  const sizeClasses = {
    sm: 'h-10 text-sm',
    md: 'h-12 text-base',
    lg: 'h-14 text-lg'
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      {showIcon && (
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      )}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className={`w-full ${sizeClasses[size]} ${showIcon ? 'pl-12' : 'pl-4'} pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
      />
    </form>
  )
}
