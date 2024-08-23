import { Hotel } from "@/types/interfaceHotel";
import styles from '@/app/page.module.css'
import Image from "next/image";
import Link from "next/link";
import BasicRating from "@/Components/Rating";

interface Prop {
    hotel: Hotel
}
export default function CardHotel({hotel}:Prop){

    return (
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
                  <Link href={`/${hotel.id}`}>
                    <h2 className={styles.titleHotel}>{hotel.title}</h2>
                  </Link>
                  <BasicRating rating={hotel.rating} />
                </div>
                <p>{hotel.description}</p>
              </div>
            </section>
          );
}