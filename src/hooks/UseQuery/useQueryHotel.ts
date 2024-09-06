import { useQuery } from "@tanstack/react-query";
import { getHotels } from "@/Utils/peticions";

export function useHotelQuery() {
  const query = useQuery({
    queryKey: ["hotels"],
    queryFn: getHotels,
    initialData: [],
  });

  return query;
}
