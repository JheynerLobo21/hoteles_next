import { Container, Typography, Stack } from "@mui/material";
import { titleApp, mainApp } from "@/styles/styles";
import HotelManager from "@/Components/HotelManager";
import ClientProvider from "./[hotelId]/ClientProvider";

export default function Home() {
  return (
    <Container sx={mainApp} maxWidth="md">
      <Typography variant="h1" sx={titleApp}>
        Hoteles
      </Typography>
      <ClientProvider>
        <Stack spacing={4}>
          <HotelManager />
        </Stack>
      </ClientProvider>
    </Container>
  );
}