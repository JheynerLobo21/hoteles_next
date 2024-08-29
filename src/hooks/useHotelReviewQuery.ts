
import { useQuery } from "@tanstack/react-query";
import { getReviewsByIdHotel } from "@/Utils/peticions";
import { Review } from "@/types/interfaceHotel";

export function useHotelReviewsQuery(hotelId: number) {

  const query = useQuery<Review[]>({
    queryKey: ['reviews'],
    queryFn: () => getReviewsByIdHotel(hotelId),
    refetchOnWindowFocus: false,
  });

  

  

  return { query };
}
