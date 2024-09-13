import { Container, Typography } from "@mui/material";
import { titleApp, mainApp } from "@/styles/styles";
import HotelManager from "@/Components/HotelManager";
import ClientProvider from "./ClientProvider";

export default function Home() {
  return (
    <Container sx={mainApp} maxWidth="md">
      <Typography variant="h1" sx={titleApp}>
        Hoteles
      </Typography>
      <ClientProvider>
          <HotelManager />
      </ClientProvider>
    </Container>
  );
}