import { Hotel } from "@/types/interfaceHotel";
import CardHotel from "../Components/CardHotel";
import { getHotels } from "@/Utils/peticions";

export default async function Hotels() {
const hotels: Hotel[] | null= await getHotels() ?? [];
  console.log(hotels);
  if (hotels==null) 
    return <h5>No se puedo encontrar ningún hotel</h5>;
  return hotels.map((hotel: Hotel) => (
    <CardHotel hotel={hotel} key={hotel.id} />
  ));
}
