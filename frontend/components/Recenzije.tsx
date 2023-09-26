'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ReviewCards from "./ReviewCards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import supabase from "utils/supabaseClient";

type Review = {
  id: number;
  name: string;
  rating: number;
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

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 3500,
    autoplaySpeed: 3500,
    cssEase: "linear"
  };

  return (
    <section className="relative bg-blue-950">
      <div className="m-20 flex flex-col justify-center items-center">
      <div className="w-full">
        <Slider {...settings}>
          {approvedReviews.map((review) => (
            <div key={review.id}>
              <ReviewCardsMemoized
                name={review.name}
                rating={review.rating}
                feedback={review.feedback}
              />
            </div>
          ))}
        </Slider>
      </div>
        <div className="mt-10 flex flex-col justify-center items-center">
          <Link href="/review">
            <button className="text-black text-2xl mt-14 font-semibold bg-yellow-500 p-8 hover:text-white">
              Ostavite Komentar
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}