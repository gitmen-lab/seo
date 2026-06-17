export default function RatingStars({ rating }: { rating: number }) {
  const fullStars = Math.round(rating)

  return (
    <div className="flex items-center gap-1" aria-label={`Rated ${rating} out of 5`}>
      <div className="flex text-sage-500">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="h-4 w-4"
            fill={index < fullStars ? 'currentColor' : 'none'}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 2.5l2.34 4.74 5.23.76-3.79 3.69.9 5.21L10 14.5l-4.68 2.4.9-5.21L2.43 8l5.23-.76L10 2.5z"
            />
          </svg>
        ))}
      </div>
      <span className="text-sm font-medium text-navy-700">{rating.toFixed(1)}</span>
    </div>
  )
}
