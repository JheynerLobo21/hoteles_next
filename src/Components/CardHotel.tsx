interface Prop {
  hotel: Hotel;
}

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Hotel } from "@/types/interfaceHotel";
import styles from "@/app/page.module.css";
import Image from "next/image";
import Link from "next/link";
import BasicRating from "@/Components/Rating";

export default function CardHotel({ hotel }: Prop) {
  return (
    <Card className={styles.cardDataHotel}>
      <CardContent key={hotel.id} className={styles.itemHotel}>
        <Typography gutterBottom>
          <Image
            className={styles.imgHotel}
            src={hotel.thumbnail}
            alt={hotel.description}
            width={200}
            height={200}
          />
        </Typography>
        <div className={styles.dataHotel}>
          <Typography component={'span'} className={styles.nameRating}>
            <Link href={`/${hotel.id}`}>
              <h2 className={styles.titleHotel}>{hotel.title}</h2>
            </Link>
            <BasicRating rating={hotel.rating} />
          </Typography>
          <Typography component={'span'} variant="body2">{hotel.description}</Typography>
        </div>
      </CardContent>
    </Card>
  );
}
