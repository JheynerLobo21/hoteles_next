import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Hotel } from "@/types/interfaceHotel";
import {editHotel } from "@/Utils/peticions";

export function useUpdateHotel() {
    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: (hotelUpdated: Hotel) => editHotel(hotelUpdated),
      onSuccess: (data, variables) => {
        console.log(data)
        //en caso de usar una api real se usa:
        //await queryClient.invalidateQueries({queryKey: ['reviews', hotelId]
        // de linea 59 a 89 79 no iría eso es actualización local
        const previousHotels = queryClient.getQueryData<Hotel[]>(['hotels']);
        if (previousHotels) {
          const updatedHotels = [...previousHotels];
          for (let i = 0; i < updatedHotels.length; i++) {
            if (updatedHotels[i].id === variables.id) {
                updatedHotels[i] = { ...updatedHotels[i], ...variables };
              break;
            }
          }
          queryClient.setQueryData(['hotels'], updatedHotels);
        }
      },
    });
  }