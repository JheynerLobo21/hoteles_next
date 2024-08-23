import { Hotel } from "@/types/interfaceHotel";
import CardHotel from "../Components/CardHotel";
import { getHotels } from "@/Utils/peticions";

export default async function Hotels() {
const hotels: Hotel[] = await getHotels() ?? [];
  console.log(hotels);
  return hotels.map((hotel: Hotel) => (
    <CardHotel hotel={hotel} key={hotel.id} />
  ));
}
