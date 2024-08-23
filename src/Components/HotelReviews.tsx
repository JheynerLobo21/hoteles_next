"use client";

import React, { useState, useEffect, Suspense } from "react";
import { Review } from "@/types/interfaceHotel";
import Loading from "@/Components/loading";
import Reviews from "../app/[hotelId]/Reviews";

interface Prop {
  hotelId: number;
}

export default function HotelReviews({ hotelId }: Prop) {

  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const fetchedReviews: Review[] = await fetch(
        `/api/reviews/?hotelId=${hotelId}`
      ).then((res) => res.json());
      setReviews(fetchedReviews);
    };
    fetchReviews();
  }, [hotelId]);

  const addReview = (newReview: Review) => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };

  return (
    <>
      {reviews.length > 0 ? (
        <Reviews reviews={reviews} hotelId={hotelId} addReview={addReview} />
      ) : (
        <Loading />
      )}
    </>
  );
  
}
