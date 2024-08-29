import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Review } from "@/types/interfaceHotel";
import styles from "@/app/page.module.css";
import RegistreReview from "./RegistreReview";
import BasicRating from "@/Components/Rating";
import { containerReviews, cardReview, titleRateReviews, descriptionReview, txtDescriptionReview } from "@/styles/styles";

interface Prop {
  reviews: Review[];
  hotelId: number;
  addReview: (review: Review) => void;
}

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Reviews({ reviews, hotelId, addReview }: Prop) {
  console.log(reviews);
  return (
    <section className={styles.listReviews}>
      <div className={styles.titleAdd}>
        <h2>Reseñas del Hotel</h2>
        <RegistreReview hotelId={hotelId} addReview={addReview}/>
      </div>
      {reviews.map((review) => (
        <Card
          key={review.id}
          sx={cardReview}
        >
          <CardContent sx={containerReviews}>
            <Typography
              component={"section"}
              sx={titleRateReviews}
            >
              <h3>Título: {review.title}</h3>
              <label>Calificación:</label>
              <BasicRating rating={review.rating} />
            </Typography>
            <Typography
              component={"section"}
              sx={descriptionReview}
            >
              <Typography component={'label'} sx={txtDescriptionReview}>Descripción</Typography>
              <Typography component={'label'}>{review.description}</Typography>
            </Typography>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
