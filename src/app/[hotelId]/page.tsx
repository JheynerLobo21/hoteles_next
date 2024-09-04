import {descriptionHotelStyles, reviewsStyles, mainHotelItem} from "@/styles/styles";
import HotelReviews from "../../Components/HotelReviews";
import BasicBreadcrumbs from "@/Components/Breadchumbs";
import CardHotel from "@/Components/CardHotel";
import { reviewsForHotel } from "@/Utils/peticions";
import ClientProvider from "./ClientProvider";
import { Box, Container } from "@mui/material";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


export default async function DetailHotel({
  params,
}: {
  params: { hotelId: string };
}) {
  const hotelId = parseInt(params.hotelId);
  const hotel = await reviewsForHotel(hotelId);
  return (
    <>
      <Container sx={mainHotelItem}>
        <BasicBreadcrumbs hotelTitle={hotel?.title} hotelId={hotel?.id} />
        <Box sx={descriptionHotelStyles}>
          <CardHotel hotel={hotel} />
        </Box>
        <Box sx={reviewsStyles}>
          <ClientProvider>
            <HotelReviews hotelId={hotel.id} />
            <ReactQueryDevtools initialIsOpen={false} />
          </ClientProvider>
        </Box>
      </Container>
    </>
  );
}
