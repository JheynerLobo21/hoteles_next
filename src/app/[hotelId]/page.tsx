import {descriptionHotelStyles, reviewsStyles} from "@/styles/styles";
import HotelReviews from "../../Components/HotelReviews";
import BasicBreadcrumbs from "@/Components/Breadchumbs";
import CardHotel from "@/Components/CardHotel";
import { reviewsForHotel } from "@/Utils/peticions";
import ClientProvider from "./ClientProvider";
import { Typography } from "@mui/material";
import styles from "./styles.module.css";

export default async function DetailHotel({
  params,
}: {
  params: { hotelId: string };
}) {
  const hotelId = parseInt(params.hotelId);
  const hotel = await reviewsForHotel(hotelId);
  return (
    <>
      <main className={styles.main}>
        <BasicBreadcrumbs hotelTitle={hotel?.title} hotelId={hotel?.id} />
        <Typography component={'section'} sx={descriptionHotelStyles}>
          <CardHotel hotel={hotel} />
        </Typography>
        <Typography component={'section'} sx={reviewsStyles}>
          <ClientProvider>
            <HotelReviews hotelId={hotel.id} />
          </ClientProvider>
        </Typography>
      </main>
    </>
  );
}
