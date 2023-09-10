'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ReviewCards from "./ReviewCards";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Review = {
  id: number;
  name: string;
  rating: number;
  feedback: string;
};

export default function Recenzije() {
  const [approvedReviews, setApprovedReviews] = useState<Review[]>([]);

  // Fetch approved reviews when the component mounts
  useEffect(() => {
    fetchApprovedReviews();
  }, []);

  const fetchApprovedReviews = () => {
    axios.get(`http://moleraj.local/backend/fetch-approved-reviews.php`)
      .then((response) => {
        if (response.status === 200) {
          setApprovedReviews(response.data);
        } else {
          console.error("Failed to fetch approved reviews.");
        }
      })
      .catch((error) => {
        console.error("Error fetching approved reviews:", error);
      });
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
              <ReviewCards
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