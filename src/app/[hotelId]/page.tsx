import styles from "./styles.module.css";
import HotelReviews from "../../Components/HotelReviews";
import BasicBreadcrumbs from "@/Components/Breadchumbs";
import CardHotel from "@/Components/CardHotel";
import { reviewsForHotel } from "@/Utils/peticions";
import ClientProvider from "./ClientProvider";

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
        <section className={styles.descriptionHotel}>
          <CardHotel hotel={hotel} />
        </section>
        <section className={styles.reviews}>
          <ClientProvider>
            <HotelReviews hotelId={hotel.id} />
          </ClientProvider>
        </section>
      </main>
    </>
  );
}
