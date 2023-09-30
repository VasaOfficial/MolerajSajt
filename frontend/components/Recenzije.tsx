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
    <section className="relative bg-blackBg py-24">
      <div className="flex flex-col justify-center items-center max-w-[70%] w-full m-auto gap-20">
        <div className="text-center w-full flex flex-col items-center">
          <span className="text-golden text-lg font-bold tracking-widest">Testemonials</span>
          <h2 className="text-white uppercase text-5xl font-black text-center tracking-wider m-0 mb-8">What our costumers have to say about our work</h2>
          <p className="text-opacity-80 text-white leading-6 max-w-2xl m-0 text-lg">We don’t just talk a big game - our clients believe in us too. Here’s what some of our customers had to say about their experience with Real Deal Painting in NW Indiana:</p>
        </div>
        <ul className="flex justify-center items-center gap-20">
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
          <Link href='/' className="bg-darkRed p-5 cursor-pointer font-semibold transition-link">
            Procitajte sve recenzije
          </Link>
        </div>
      </div>
    </section>
  );
}