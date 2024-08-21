import BasicRating from "@/Components/Rating";
import styles from "./styles.module.css";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "@/app/loading";
import Reviews from "@/app/Reviews";
import BasicBreadcrumbs from "@/app/Breadchumbs";

export default async function DetailHotel({
  params,
}: {
  params: { hotelId: number };
}) {
  const hotel = await fetch(
    `https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/hotels/${params.hotelId}`
  ).then((res) => res.json());

  return (
    <>    
    <main className={styles.main}>
    <BasicBreadcrumbs hotelTitle={hotel?.title} hotelId={hotel?.id}/>
      <section className={styles.descriptionHotel}>
        <div>
      <Image
      className={styles.imgHotel}
        src={hotel.thumbnail}
        alt={hotel.description}
        width={250}
        height={250}
        />
        </div>
        <div>
        <h1 className={styles.title}>Detalles del Hotel {hotel.title}</h1>
        <div className={styles.rating}>
          <label className={styles.txtRating}>Valoración:</label>
          <BasicRating rating={hotel.rating} />
        </div>
        <div>
        <label className={styles.txtDescription}>Descripción</label> 
        <p>{hotel.description}</p>
        </div>
        </div>
      </section>
      <section className={styles.reviews}>
        <Suspense fallback={<Loading />}>
          <Reviews hotelId={hotel.id} />
        </Suspense>
      </section>
    </main>
    </>

  );
}
