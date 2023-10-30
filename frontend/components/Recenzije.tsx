'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import supabase from 'utils/supabaseClient';

import ReviewCards from './ReviewCards';

type Review = {
  id: number;
  name: string;
  feedback: string;
};

const ReviewCardsMemoized = React.memo(ReviewCards);

export default function Recenzije() {
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

  // Slice the array to include only the first 3 items
  const displayedReviews = approvedReviews.slice(0, 3);

  return (
    <section className="relative w-full bg-zinc-900 py-24">
      <div className="m-auto flex w-full max-w-[70%] flex-col items-center justify-center gap-20">
        <div className="flex w-full flex-col items-center text-center">
          <span className="font-montserrat text-lg font-bold tracking-widest text-golden">
            Recenzije
          </span>
          <h2 className="m-0 mb-8 mt-2 text-center font-oswald text-5xl font-black uppercase tracking-wider text-white max-lg:leading-tight">
            ŠTA NAŠI KUPCI IMAJU DA KAŽU O NAŠEM RADU!
          </h2>
        </div>
        <div className="flex items-center justify-center gap-20 max-lg:flex-col">
          {displayedReviews.map((review) => (
            <div key={review.id}>
              <ReviewCardsMemoized
                name={review.name}
                feedback={review.feedback}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center gap-10 text-lg text-white">
          <Link
            href="/review_form"
            className="transition-link cursor-pointer bg-darkRed p-5 font-semibold"
          >
            Ostavite recenziju
          </Link>
          <Link
            href="/recenzije"
            className="transition-link cursor-pointer bg-darkRed p-5 font-semibold"
          >
            Procitajte sve recenzije
          </Link>
        </div>
      </div>
    </section>
  );
}
