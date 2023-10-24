'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ReviewCards from "./ReviewCards";
import supabase from "utils/supabaseClient";

type Review = {
  id: number;
  name: string;
  feedback: string;
};

const ReviewCardsMemoized = React.memo(ReviewCards);

export default function Recenzije() {
  const [approvedReviews, setApprovedReviews] = useState<Review[]>([]);

  // Fetch approved reviews when the component mounts
  useEffect(() => {
    fetchApprovedReviews();
  }, []);

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

    // Slice the array to include only the first 3 items
    const displayedReviews = approvedReviews.slice(0, 3);

  return (
    <section className="w-full relative bg-zinc-900 py-24">
      <div className="flex flex-col justify-center items-center max-w-[70%] w-full m-auto gap-20">
        <div className="text-center w-full flex flex-col items-center">
          <span className="text-golden text-lg font-bold tracking-widest font-montserrat">Recenzije</span>
          <h2 className="text-white uppercase text-5xl font-black text-center tracking-wider m-0 mb-8 font-oswald mt-2 max-lg:leading-tight">ŠTA NAŠI KUPCI IMAJU DA KAŽU O NAŠEM RADU!</h2>
        </div>
        <ul className="flex justify-center items-center gap-20 max-lg:flex-col">
          {displayedReviews.map((review) => (
            <div key={review.id}>
              <ReviewCardsMemoized
                name={review.name}
                feedback={review.feedback}
              />
            </div>
          ))}
        </ul>
        <div className="flex flex-col text-lg justify-center items-center text-white gap-10">
          <Link href="/review_form" className="bg-darkRed p-5 cursor-pointer font-semibold transition-link">
            Ostavite recenziju
          </Link>
          <Link href='/recenzije' className="bg-darkRed p-5 cursor-pointer font-semibold transition-link">
            Procitajte sve recenzije
          </Link>
        </div>
      </div>
    </section>
  );
}