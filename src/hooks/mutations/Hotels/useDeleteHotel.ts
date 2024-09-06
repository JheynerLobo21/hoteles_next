import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Hotel } from "@/types/interfaceHotel";
import { deleteReview } from "@/Utils/peticions";

export function useDeleteHotel() {
  const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: (hotelId: number) => deleteReview(hotelId),
      onSuccess: (data, hotelId) => {
        console.log(data, hotelId);
        //queryClient.invalidateQueries({queryKey: ['reviews', hotelId]})
        const previousHotels = queryClient.getQueryData<Hotel[]>(['hotels']);
        console.log(previousHotels)
        if (previousHotels) {
          const filteredHotels = previousHotels.filter(hotel => hotel.id !== hotelId);
          queryClient.setQueryData(['hotels'], filteredHotels);
        }
      },
      onError: (error) => {
        console.error('Error deleting hotel:', error);
      },
    });
  }