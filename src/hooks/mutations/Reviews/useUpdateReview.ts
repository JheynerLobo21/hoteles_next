import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Review } from "@/types/interfaceHotel";
import {editReview } from "@/Utils/peticions";

export function useUpdateReview() {
    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: (reviewUpdated: Review) => editReview(reviewUpdated),
      onSuccess: (data, variables) => {
        console.log(data)
        //en caso de usar una api real se usa:
        //await queryClient.invalidateQueries({queryKey: ['reviews', hotelId]
        // de linea 59 a 89 79 no iría eso es actualización local
        const previousReviews = queryClient.getQueryData<Review[]>(['reviews']);
        if (previousReviews) {
          const updatedReviews = [...previousReviews];
          for (let i = 0; i < updatedReviews.length; i++) {
            if (updatedReviews[i].id === variables.id) {
              updatedReviews[i] = { ...updatedReviews[i], ...variables };
              break;
            }
          }
          queryClient.setQueryData(['reviews'], updatedReviews);
        }
      },
    });
  }