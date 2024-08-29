"use client";
import { Review } from "@/types/interfaceHotel";
import Loading from "@/Components/loading";
import Reviews from "../app/[hotelId]/Reviews";
import { useHotelReviewsQuery } from "@/hooks/useHotelReviewQuery";
import { useHotelReviewsMutation } from "@/hooks/useHotelReviewMutation";


interface Prop {
  hotelId: number;
}

export default function HotelReviews({ hotelId }: Prop) {

  const {query} = useHotelReviewsQuery(hotelId);
  const {mutation} = useHotelReviewsMutation(hotelId);
  

  if (query.isLoading) return <Loading />;
  if (query.error) return <div>Lo sentimos, hubo un error</div>;

  const addReview = (newReview: Review) => {
    mutation.mutate(newReview);
  };

  return (
      <Reviews reviews={query.data} hotelId={hotelId} addReview={addReview}/>
  );
}


