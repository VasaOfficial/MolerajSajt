'use client'

import { Rating as ReactRating } from '@smastrom/react-rating'

export function Rating({ rating, setRating }: { rating: number; setRating: (value: number) => void }) {
  return <ReactRating style={{ maxWidth: 200 }} value={rating} onChange={setRating} />;
}
