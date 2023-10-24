'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ReviewCards from "components/ReviewCards";
import supabase from "utils/supabaseClient";

type Review = {
  id: number;
  name: string;
  feedback: string;
};

const ReviewCardsMemoized = React.memo(ReviewCards);

export default function RecenzijePage() {
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

  return (
    <section className="w-full h-auto relative bg-zinc-900 max-[1474px]:mt-96 max-xl:mt-0 max-[1154px]:mt-96">
      <div className="flex flex-col justify-center items-center max-w-[90%] w-full m-auto mt-96 ">
        <ul className="flex justify-center items-center gap-20 flex-wrap mt-60 max-lg:gap-7 max-lg:mt-20 max-[688]:gap-2">
          {approvedReviews.map((review) => (
            <div key={review.id}>
              <ReviewCardsMemoized
                name={review.name}
                feedback={review.feedback}
              />
            </div>
          ))}
        </ul>
        <div className="flex flex-col text-lg justify-center items-center text-white gap-10 mt-10">
          <Link href="/review_form" className="bg-darkRed p-5 cursor-pointer font-semibold transition-link mb-10">
            Ostavite recenziju
          </Link>
        </div>
      </div>
    </section>
  );
}