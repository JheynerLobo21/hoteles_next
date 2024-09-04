import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Review } from "@/types/interfaceHotel";
import { saveReview, editReview } from "@/Utils/peticions";


export function useHotelReviewsMutation(hotelId: number) {
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
          const previousReviews = queryClient.getQueryData(['reviews', hotelId])

          queryClient.setQueryData(['reviews', hotelId], (oldData?: Review[]): Review[] => {
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

    export function useUpdateHotelReviewQuery(hotelId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (reviewUpdated: Review) => editReview(reviewUpdated),
    onSuccess: (data, variables) => {
    //en caso de usar una api real se usa:
    //await queryClient.invalidateQueries({queryKey: ['reviews', hotelId]
    // de linea 59 a 89 79 no iría eso es actualización local
      const previousReviews = queryClient.getQueryData<Review[]>(['reviews', hotelId]);
      if (previousReviews) {
        const updatedReviews = [...previousReviews];
        for (let i = 0; i < updatedReviews.length; i++) {
          if (updatedReviews[i].id === variables.id) {
            updatedReviews[i] = { ...updatedReviews[i], ...variables };
            break;
          }
        }
        queryClient.setQueryData(['reviews', hotelId], updatedReviews);
      }
    },
  });
}

    

    