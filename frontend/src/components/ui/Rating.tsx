'use client'

import { useState } from 'react'
import { Rating as ReactRating } from '@smastrom/react-rating'

export function Rating() {
  const [rating, setRating] = useState(0)

  return <ReactRating style={{ maxWidth: 200 }} value={rating} onChange={setRating} />
}