import React, { Suspense } from "react";
import BasicRating from "@/Components/Rating";
import { Review } from "@/types/interfaceHotel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import RegistreReview from "./RegistreReview";
import styles from '@/app/page.module.css';

interface Prop {
  reviews: Review[];
  hotelId: number; 
  addReview: (review: Review) => void;
}

export default function Reviews({ reviews, hotelId, addReview }: Prop) {

  return (
      <section className={styles.listReviews}>
        <div className={styles.titleAdd}>
          <h2>Reseñas del Hotel</h2>
          <RegistreReview hotelId={hotelId} addReview={addReview} />
        </div>
        {reviews.map((review) => (
          <Card sx={{ minWidth: 550 }} key={review.id} className={styles.cardReview}>
            <CardContent className={styles.containerReviews}>
              <section className={styles.titleRateReviews}>
                <h3>Título: {review.title}</h3>
                <label>Calificación:</label>
                <BasicRating rating={review.rating} />
              </section>
              <section className={styles.descriptionReview}>
                <label className={styles.txtDescriptionReview}>Descripción</label>
                <label>{review.description}</label>
              </section>
            </CardContent>
          </Card>
        ))}
      </section>
  );
}
