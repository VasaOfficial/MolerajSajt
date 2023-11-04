'use client';

import ReviewCards from 'components/ReviewCards';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import supabase from 'utils/supabaseClient';

type Review = {
  id: number;
  name: string;
  feedback: string;
};

const ReviewCardsMemoized = React.memo(ReviewCards);

export default function RecenzijePage() {
  const [approvedReviews, setApprovedReviews] = useState<Review[]>([]);

  const fetchApprovedReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('review')
        .select('*')
        .eq('status', 'done');

      if (error) {
        console.error('Error fetching approved reviews:', error);
      } else {
        setApprovedReviews(data);
      }
    } catch (error) {
      console.error('Error fetching approved reviews:', error);
    }
  };

  useEffect(() => {
    fetchApprovedReviews();
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center bg-zinc-900 mt-44 max-xl:mt-40 lg:h-full">
      <div className="flex flex-wrap items-center justify-center gap-20 max-lg:gap-7 max-lg:mt-96 max-sm:pt-96 max-sm:mt-96">
        {approvedReviews.map((review) => (
          <div key={review.id}>
            <ReviewCardsMemoized
              name={review.name}
              feedback={review.feedback}
            />
          </div>
        ))}
      </div>
      <div className="my-10 flex flex-col items-center justify-center text-lg text-white">
        <Link
          href="/review_form"
          className="transition-link mb-10 cursor-pointer bg-darkRed p-5 font-semibold"
        >
          Ostavite recenziju
        </Link>
      </div>
    </div>
  );
}
