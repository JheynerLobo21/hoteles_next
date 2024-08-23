import styles from "./styles.module.css";
import HotelReviews from "./HotelReviews";
import BasicBreadcrumbs from "@/Components/Breadchumbs";
import CardHotel from "@/Components/CardHotel";

export default async function DetailHotel({
  params,
}: {
  params: { hotelId: string };
}) {

  const hotelId = parseInt(params.hotelId);
  //const hotel = await fetch(`/api/hotels/${hotelId}`).then(res => res.json());
  const hotel = await fetch(
    `https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/hotels/${hotelId}`,
    {
      method: "GET",
    }
  ).then((res) => res.json());
  return (
    <>
      <main className={styles.main}>
        <BasicBreadcrumbs hotelTitle={hotel?.title} hotelId={hotel?.id} />
        <section className={styles.descriptionHotel}>
          <CardHotel hotel={hotel}/>
        </section>
        <section className={styles.reviews}>
            <HotelReviews hotelId={hotel.id} />
        </section>
      </main>
    </>
  );
}


