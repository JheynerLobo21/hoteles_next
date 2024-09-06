import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Review } from "@/types/interfaceHotel";
import { saveReview} from "@/Utils/peticions";

export function useCreateReview() {

    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: (newReview: Review) => saveReview(newReview),
      //-------------CONSULTA OPTIMISTA-------------------------------//
      //-------------onMutate se usa en consultas optimistas------------//
      /*onMutate: async (newReview) => {
      //-------------obtiene la info guardada en caché------------------//
        const previousReviews = queryClient.getQueryData(['reviews', hotelId])
      //-------------modifica la info que esta en caché-----------------//
        queryClient.setQueryData(['reviews', hotelId], (oldData?: Review[]): Review[] => {
          const newReviewToAdd = structuredClone(newReview)
          if (oldData == null) return [newReviewToAdd]
          return [...oldData, newReviewToAdd]
        })
   
        return { previousReviews }
      },*/
      onSuccess: (data, variables) => {
        console.log(data)
        const previousReviews = queryClient.getQueryData(['reviews'])
        console.log(previousReviews)
        queryClient.setQueryData(['reviews'], (oldData?: Review[]): Review[] => {
          const newReviewToAdd = structuredClone(variables)
          if (oldData == null) return [newReviewToAdd]
          return [...oldData, newReviewToAdd]
        })
        return { previousReviews }
      },
      onError: (error) => {
        console.error(error)
      },
      //esto cuando se este trabajando con el backend(API) funcional
      /*onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['reviews', hotelId]
        })
      }*/
      //y el uso de onSettled
  
    })
  }