"use client";
import { Review } from "@/types/interfaceHotel";
import Loading from "@/Components/loading";
import Reviews from "../app/[hotelId]/Reviews";
import { useHotelReviewsQuery } from "@/hooks/useHotelReviewQuery";
import { useHotelReviewsMutation, useUpdateHotelReviewQuery } from "@/hooks/useHotelReviewMutation";
import { Typography } from "@mui/material";


interface Prop {
  hotelId: number;
}

export default function HotelReviews({ hotelId }: Prop) {

  const {data, isLoading, isError} = useHotelReviewsQuery(hotelId);
  const {mutate: reviewAdd} = useHotelReviewsMutation(hotelId);
  const {mutate: reviewUpdate} = useUpdateHotelReviewQuery(hotelId);


  if (isLoading) return <Loading />;
  if (isError) return <Typography component={'p'}>Lo sentimos, hubo un error</Typography>;

  const addReview = (newReview: Review) => {
    reviewAdd(newReview);
  };

  const editReview = (reviewUpdated: Review) =>{
    reviewUpdate(reviewUpdated);
  }

  return (
      <Reviews  reviews={data} hotelId={hotelId} editReview={editReview} addReview={addReview}/>
  );
}


