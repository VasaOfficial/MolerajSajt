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
    <section className="relative h-auto w-full bg-zinc-900 max-[1474px]:mt-96 max-xl:mt-0 max-[1154px]:mt-96">
      <div className="m-auto mt-96 flex w-full max-w-[90%] flex-col items-center justify-center ">
        <ul className="max-[688]:gap-2 mt-60 flex flex-wrap items-center justify-center gap-20 max-lg:mt-20 max-lg:gap-7">
          {approvedReviews.map((review) => (
            <div key={review.id}>
              <ReviewCardsMemoized
                name={review.name}
                feedback={review.feedback}
              />
            </div>
          ))}
        </ul>
        <div className="mt-10 flex flex-col items-center justify-center gap-10 text-lg text-white">
          <Link
            href="/review_form"
            className="transition-link mb-10 cursor-pointer bg-darkRed p-5 font-semibold"
          >
            Ostavite recenziju
          </Link>
        </div>
      </div>
    </section>
  );
}
