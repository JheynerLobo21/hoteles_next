'use client'
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
import { Box } from "@mui/material";
import EditHotel from "@/app/Hotels/EditHotel";

interface Prop {
  hotel: Hotel;
  editHotel: (hotel:Hotel) => void;
}

export default function CardHotel({ hotel, editHotel }: Prop) {

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
        <Box sx={dataHotel}>
          <EditHotel editHotel={editHotel} hotel={hotel} />
          <Typography component={'span'} sx={nameRating}>
            <Link href={`/${hotel.id}`}>
            <Typography variant='h2' sx={titleHotel}>
            {hotel.title}
            </Typography>
            </Link>
            <BasicRating rating={hotel.rating} />
          </Typography>
          <Typography component={'span'} variant="body2">{hotel.description}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

