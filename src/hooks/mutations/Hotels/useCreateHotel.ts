import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Hotel } from "@/types/interfaceHotel";
import { saveHotel} from "@/Utils/peticions";

export function useCreateHotel() {

    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: (newHotel: Hotel) => saveHotel(newHotel),
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
        const previousHotels = queryClient.getQueryData(['hotels'])
        console.log(previousHotels)
        queryClient.setQueryData(['hotels'], (oldData?: Hotel[]): Hotel[] => {
          const newHotelToAdd = structuredClone(variables)
          if (oldData == null) return [newHotelToAdd]
          return [...oldData, newHotelToAdd]
        })
        return { previousHotels }
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