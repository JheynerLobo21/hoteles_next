import { Hotel } from "@/types/interfaceHotel";
import CardHotel from "../Components/CardHotel";

export default async function Hotels() {
  const baseUrl = 'http://localhost:3000';

  const res = await fetch(`${baseUrl}/api/hotels`, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error('Failed to fetch hotels');
  }

  const hotels: Hotel[] = await res.json();
  console.log(hotels);
  return hotels.map((hotel: Hotel) => (
    <CardHotel hotel={hotel} key={hotel.id} />
  ));
}
