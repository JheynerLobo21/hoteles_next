// import { Box, Typography } from "@mui/material";
// import { titleApp, mainApp } from "@/styles/styles";
// import HotelManager from "@/Components/HotelManager";
// import ClientProvider from "./[hotelId]/ClientProvider";

// export default function Home() {
//   return (
//     <Box sx={mainApp}>
//       <Typography variant='h1' sx={titleApp}>Hoteles</Typography>
//       <ClientProvider>
//       <HotelManager/>
//       </ClientProvider>
//     </Box>
//   );
// }


import { Box, Typography } from "@mui/material";
import { titleApp, mainApp } from "@/styles/styles";
import Hotels from '@/app/Hotels/Hotels'
import ClientProvider from "./[hotelId]/ClientProvider";

export default function Home() {
  return (
    <Box sx={mainApp}>
      <Typography variant='h1' sx={titleApp}>Hoteles</Typography>
      <ClientProvider>
      <Hotels/>
      </ClientProvider>
    </Box>
  );
}
