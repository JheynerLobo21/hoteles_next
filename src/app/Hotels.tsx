import BasicRating from "@/Components/Rating";
import { Hotel } from "@/types/interfaceHotel";
import styles from './page.module.css'
import Image from "next/image";
import Link from "next/link";
export default async function Hotels(){
    const hotels = await fetch('https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/hotels').then((res) =>
        res.json()
      )


    return(
        hotels.map((hotel: Hotel) => (
            <section key={hotel.id} className={styles.itemHotel}>
                <Image
                className={styles.imgHotel}
                src={hotel.thumbnail}
                alt={hotel.description}
                width={200}
                height={200}
                />
                <div className={styles.dataHotel}>
                <div className={styles.nameRating}>
                <Link href={`/hotel/${hotel.id}`}>
                <h2 className={styles.titleHotel}>{hotel.title}</h2>
                </Link>
                <BasicRating rating={hotel.rating}/>
                </div>
                <p>{hotel.description}</p>
                </div>
            </section>
        ))
    )
    
     
}