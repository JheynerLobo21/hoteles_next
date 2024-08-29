interface Prop {
  hotel: Hotel;
}

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Hotel } from "@/types/interfaceHotel";
import styles from "@/app/page.module.css";
import {itemHotel, cardDataHotel, nameRating, titleHotel, dataHotel} from "@/styles/styles";
import Image from "next/image";
import Link from "next/link";
import BasicRating from "@/Components/Rating";

export default function CardHotel({ hotel }: Prop) {
  return (
    <Card sx={cardDataHotel}>
      <CardContent key={hotel.id} sx={itemHotel}>
        <Typography gutterBottom>
          <Image
            className={styles.imgHotel}
            src={hotel.thumbnail}
            alt={hotel.description}
            width={200}
            height={200}
          />
        </Typography>
        <Typography component={'div'} sx={dataHotel}>
          <Typography component={'span'} sx={nameRating}>
            <Link href={`/${hotel.id}`}>
            <Typography component={'h2'} sx={titleHotel}>
            {hotel.title}
            </Typography>
            </Link>
            <BasicRating rating={hotel.rating} />
          </Typography>
          <Typography component={'span'} variant="body2">{hotel.description}</Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}
