import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Review } from "@/types/interfaceHotel";
import { saveReview } from "@/Utils/peticions";


export function useHotelReviewsMutation(hotelId: number) {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (newReview: Review) => saveReview(newReview),
        onMutate: async (newReview) => {
          await queryClient.cancelQueries({ queryKey: ['reviews', hotelId], exact: true })
    
    
          const previousReviews = queryClient.getQueryData(['reviews', hotelId])
          queryClient.setQueryData(['reviews', hotelId], (oldData?: Review[]): Review[] => {
            const newReviewToAdd = structuredClone(newReview)
    
            if (oldData == null) return [newReviewToAdd]
            return [...oldData, newReviewToAdd]
          })
    
          return { previousReviews }
        },
        onError: (error, variables, context) => {
          console.error(error)
          if (context?.previousReviews != null) {
            queryClient.setQueryData(['reviews', hotelId], context.previousReviews)
          }
        },
        //esto cuando se este trabajando con el backend(API) funcional
        /*onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: ['reviews', hotelId]
          })
        }*/
       //y el uso de onSettled
      })
        return { mutation };
    }