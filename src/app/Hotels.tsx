import { Hotel } from "@/types/interfaceHotel";
import CardHotel from "../Components/CardHotel";
import { getHotels } from "@/Utils/peticions";
import { Typography } from "@mui/material";

export default async function Hotels() {
const hotels: Hotel[] | null= await getHotels() ?? [];
  if (hotels==null) 
    return <Typography variant='h5'>No se puedo encontrar ningún hotel</Typography>;
  return hotels.map((hotel: Hotel) => (
    <CardHotel hotel={hotel} key={hotel.id} />
  ));
}
