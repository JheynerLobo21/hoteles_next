import { Hotel } from "@/types/interfaceHotel";
import CardHotel from "@/Components/CardHotel";
import { Box, Typography } from "@mui/material";
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
    <AddHotel addHotel={addHotel}/>
    {hotels.map((hotel: Hotel) => (
    <Box key={hotel.id}>
    <CardHotel hotel={hotel} editHotel={editHotel} />
    </Box>
  ))};
    </>
  )
  
}

// import { Hotel } from "@/types/interfaceHotel";
// import CardHotel from "@/Components/CardHotel";
// import { getHotels } from "@/Utils/peticions";
// import { Typography } from "@mui/material";

// export default async function Hotels() {
// const hotels: Hotel[] | null= await getHotels() ?? [];
//   if (hotels==null)
//     return <Typography variant='h5'>No se puedo encontrar ningún hotel</Typography>;
//   return hotels.map((hotel: Hotel) => (
//     <CardHotel hotel={hotel} key={hotel.id} />
//   ));
// }
