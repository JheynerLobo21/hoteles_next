import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Review } from "@/types/interfaceHotel";
import { saveReview } from "@/Utils/peticions";


export function useHotelReviewsMutation(hotelId: number) {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (newReview: Review) => saveReview(newReview),
        onMutate: async (newReview) => {
          await queryClient.cancelQueries({ queryKey: ['reviews'], exact: true })
    
    
          const previousReviews = queryClient.getQueryData(['reviews'])
          queryClient.setQueryData(['reviews'], (oldData?: Review[]): Review[] => {
            const newReviewToAdd = structuredClone(newReview)
    
    
            if (oldData == null) return [newReviewToAdd]
            return [...oldData, newReviewToAdd]
          })
    
          return { previousReviews }
        },
        onError: (error, variables, context) => {
          console.error(error)
          if (context?.previousReviews != null) {
            queryClient.setQueryData(['reviews'], context.previousReviews)
          }
        },
        onSettled: async () => {
          await queryClient.invalidateQueries({
            queryKey: ['reviews', hotelId]
          })
        }
      })
      
      return { mutation };
}