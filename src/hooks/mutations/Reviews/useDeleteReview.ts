import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Review } from "@/types/interfaceHotel";
import { deleteReview } from "@/Utils/peticions";

export function useDeleteReview() {
    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: (reviewId: number) => deleteReview(reviewId),
      onSuccess: (data, reviewId) => {
        console.log(data, reviewId);
        //queryClient.invalidateQueries({queryKey: ['reviews', hotelId]})
        const previousReviews = queryClient.getQueryData<Review[]>(['reviews']);
        console.log(previousReviews)
        if (previousReviews) {
          const filteredReviews = previousReviews.filter(review => review.id !== reviewId);
          queryClient.setQueryData(['reviews'], filteredReviews);
        }
      },
      onError: (error) => {
        console.error('Error deleting review:', error);
      },
    });
  }