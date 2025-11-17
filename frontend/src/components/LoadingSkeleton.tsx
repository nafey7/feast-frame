interface LoadingSkeletonProps {
  variant?: 'text' | 'card' | 'image' | 'restaurant-card'
  count?: number
  className?: string
}

export default function LoadingSkeleton({
  variant = 'text',
  count = 1,
  className = ''
}: LoadingSkeletonProps) {
  const skeletons = Array.from({ length: count }, (_, i) => i)

  const renderSkeleton = () => {
    switch (variant) {
      case 'text':
        return <div className={`h-4 bg-gray-200 rounded animate-pulse ${className}`} />

      case 'image':
        return <div className={`aspect-video bg-gray-200 rounded-lg animate-pulse ${className}`} />

      case 'card':
        return (
          <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
            <div className="aspect-video bg-gray-200 rounded-lg animate-pulse mb-4" />
            <div className="h-6 bg-gray-200 rounded animate-pulse mb-2" />
            <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
          </div>
        )

      case 'restaurant-card':
        return (
          <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
            <div className="aspect-video bg-gray-200 animate-pulse" />
            <div className="p-4">
              <div className="h-6 bg-gray-200 rounded animate-pulse mb-3" />
              <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3 mb-2" />
              <div className="flex gap-2 mt-3">
                <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse" />
                <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        )

      default:
        return <div className={`h-4 bg-gray-200 rounded animate-pulse ${className}`} />
    }
  }

  return (
    <>
      {skeletons.map((i) => (
        <div key={i}>
          {renderSkeleton()}
        </div>
      ))}
    </>
  )
}
