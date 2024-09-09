"use client";

import { Review } from "@/types/interfaceHotel";
import AddReview from "./addReview";
import EditReview from "./editReview";

interface Prop {
  hotelId: number;
  addReview: (review: Review) => void;
  review: Review | null;
  editReview: (review: Review) => void;
}

export default function RegistreReview({
  hotelId,
  addReview,
  review,
  editReview,
}: Prop) {
  return (
    <>
      {review ? (
        <EditReview review={review} editReview={editReview} />
      ) : (
        <AddReview hotelId={hotelId} addReview={addReview} />
      )}
    </>
  );
}