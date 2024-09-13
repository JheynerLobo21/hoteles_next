import { Hotel } from "@/types/interfaceHotel";
import CardHotel from "@/Components/CardHotel";
import { Typography } from "@mui/material";
import AddHotel from "./AddHotel";

interface Props {
  hotels: Hotel[];
  addHotel: (hotel: Hotel) => void;
  editHotel: (hotel: Hotel) => void;
}

export default function Hotels({ hotels, addHotel, editHotel }: Props) {
  if (hotels == null)
    return (
      <Typography variant="h5">No se pudo encontrar ningún hotel</Typography>
    );
  return (
    <>
      <AddHotel addHotel={addHotel} />
      {hotels.map((hotel: Hotel) => (
        <CardHotel hotel={hotel} editHotel={editHotel} key={hotel.id}/>
      ))}
    </>
  );
}