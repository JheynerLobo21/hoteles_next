import { useQuery } from "@tanstack/react-query";
import { getReviewsByIdHotel } from "@/Utils/peticions";

export function useReviewsQuery(hotelId: number) {
  return useQuery({ 
    queryKey: ['reviews'], 
    queryFn: ()=>getReviewsByIdHotel(hotelId), 
    refetchOnWindowFocus: false,
    initialData: []})
}

