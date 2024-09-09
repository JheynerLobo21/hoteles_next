"use client";
import { Review } from "@/types/interfaceHotel";
import Loading from "@/Components/loading";
import { Reviews } from "../app/[hotelId]/Reviews";
import { useReviewsQuery } from "@/hooks/UseQuery/useQueryReviews";
import { useCreateReview } from "@/hooks/mutations/Reviews/useCreateReview";
import { useUpdateReview } from "@/hooks/mutations/Reviews/useUpdateReview";
import { useDeleteReview } from "@/hooks/mutations/Reviews/useDeleteReview";
import { Typography } from "@mui/material";

interface Prop {
  hotelId: number;
}

export default function HotelReviewsManager({ hotelId }: Prop) {
  const { data, isFetching, isError } = useReviewsQuery(hotelId);
  const { mutate: reviewAdd } = useCreateReview();
  const { mutate: reviewUpdate } = useUpdateReview();
  const { mutate: reviewDelete } = useDeleteReview();

  if (isFetching) return <Loading />;
  if (isError)
    return <Typography component={"p"}>Lo sentimos, hubo un error</Typography>;

  const addReview = (newReview: Review) => {
    reviewAdd(newReview);
  };

  const editReview = (reviewUpdated: Review) => {
    reviewUpdate(reviewUpdated);
  };

  return (
    <Reviews
      reviews={data}
      hotelId={hotelId}
      editReview={editReview}
      addReview={addReview}
    />
  );
}