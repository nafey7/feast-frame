interface RatingProps {
  value: number
  max?: number
  showValue?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Rating({
  value,
  max = 5,
  showValue = true,
  size = 'md',
  className = ''
}: RatingProps) {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }

  const stars = Array.from({ length: max }, (_, i) => {
    const starValue = i + 1
    const isFilled = starValue <= Math.floor(value)
    const isPartial = starValue > Math.floor(value) && starValue <= Math.ceil(value)
    const partialWidth = isPartial ? `${(value % 1) * 100}%` : '0%'

    return (
      <span key={i} className="relative inline-block">
        <span className="text-gray-300">★</span>
        {isFilled && (
          <span className="absolute inset-0 text-yellow-400 overflow-hidden">
            ★
          </span>
        )}
        {isPartial && (
          <span
            className="absolute inset-0 text-yellow-400 overflow-hidden"
            style={{ width: partialWidth }}
          >
            ★
          </span>
        )}
      </span>
    )
  })

  return (
    <div className={`flex items-center gap-1 ${sizeClasses[size]} ${className}`}>
      <div className="flex">{stars}</div>
      {showValue && (
        <span className="text-gray-600 font-medium ml-1">
          {value.toFixed(1)}
        </span>
      )}
    </div>
  )
}
