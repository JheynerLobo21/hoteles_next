import BasicRating from "@/Components/Rating";
import { Review } from "@/types/interfaceHotel";
import RegistreReview from "./RegistreReview";
interface Prop {
  hotelId: number;
}

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default async function Reviews({ hotelId }: Prop) {

    const reviews = await fetch(
        `https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/reviews/?hotelId=${hotelId}`
      ).then((res) => res.json());

  return (
    <section className='list-reviews'>
    <h2>Reviews del Hotel</h2>
    <RegistreReview hotelId={hotelId}/>
    {reviews.map((review: Review) => (
    <Card sx={{ minWidth: 550 }} key={review.id} className="card">
      <CardContent id="container-reviews">
      <section className="titleRate-reviews">
        <h3>Título: {review.title}</h3>
        <label>Calificación:</label>
        <BasicRating rating={review.rating} />
        </section>
        <section className="description-review">
        <label className="txt-description-review">Descripción </label>
        <label>{review.description}</label>
        </section>
      </CardContent>
    </Card>
    ))}
    </section>
  );
}

