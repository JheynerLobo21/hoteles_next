
import { useQuery } from "@tanstack/react-query";
import { getReviewsByIdHotel } from "@/Utils/peticions";
import { Review } from "@/types/interfaceHotel";

export function useHotelReviewsQuery(hotelId: number) {

  return useQuery<Review[]>({
    queryKey: ['reviews', hotelId],
    queryFn: () => getReviewsByIdHotel(hotelId),
    refetchOnWindowFocus: false,
    initialData: []
  });
}
// export function useUpdateHotelReviewQuery(review: Review){
//   return useQuery<Review>({
//     queryKey: ['reviews', review.title, review.id],
//     queryFn: () => editReview(review),
//   })
// }
