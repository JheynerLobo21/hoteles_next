'use client'
import { Hotel } from "@/types/interfaceHotel";
import Loading from "./loading";
import { useUpdateHotel } from "@/hooks/mutations/Hotels/useUpdateHotel";
//import { useDeleteHotel } from "@/hooks/mutations/Hotels/useDeleteHotel";
import { Typography } from "@mui/material";
import { useCreateHotel } from "@/hooks/mutations/Hotels/useCreateHotel";
import Hotels from "@/app/Hotels/Hotels";
import { useHotelQuery } from "@/hooks/UseQuery/useQueryHotel"
export default function HotelManager() {
  const query = useHotelQuery();
  const { mutate: hotelAdd } = useCreateHotel();
  const { mutate: hotelUpdate } = useUpdateHotel();
  //const { mutate: hotelDelete } = useDeleteHotel();

  if (query.isLoading) return <Loading />;

  if (query.isError) return <Typography component="p">Lo sentimos, hubo un error</Typography>;

  const addHotel = (newHotel: Hotel) => {
    hotelAdd(newHotel);
  };

  const editHotel = (hotelUpdated: Hotel) => {
    hotelUpdate(hotelUpdated);
  };

return <Hotels hotels={query.data} addHotel={addHotel} editHotel={editHotel}/>
}
