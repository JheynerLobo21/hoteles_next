import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Review } from "@/types/interfaceHotel";
import RegistreReview from "./RegistreReview";
import BasicRating from "@/Components/Rating";
import Grid from "@mui/material/Unstable_Grid2";
import {
  txtTitleDescriptionReview,
  txtDescriptionReview,
  listReviews,
  titleAdd,
  btnDeleteButton,
  titleRateReview,
} from "@/styles/styles";
import { Button, Container, FormLabel } from "@mui/material";
import styles from "@/app/page.module.css";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useDeleteReview } from "@/hooks/mutations/Reviews/useDeleteReview";
import { useRouter } from "next/navigation";

interface Prop {
  reviews: Review[];
  hotelId: number;
  addReview: (review: Review) => void;
  editReview: (review: Review) => void;
}

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export const Reviews = ({ reviews, hotelId, addReview, editReview }: Prop) => {
  const LinkIcon = TrashIcon;
  const router = useRouter();
  const { mutate: deleteReview } = useDeleteReview();

  const handleDelete = (reviewId: number) => {
    router.push(`${hotelId}/?review=${reviewId}`);
    deleteReview(reviewId);
  };
  return (
    <Container sx={listReviews}>
      <Box sx={titleAdd}>
        <Typography variant="h5">Reseñas del Hotel</Typography>
        <RegistreReview
          hotelId={hotelId}
          editReview={editReview}
          addReview={addReview}
          review={null}
        />
      </Box>
      {reviews.map((review) => (
        <Paper elevation={3} key={review.id} sx={{ marginBottom: "25px" }}>
          <Grid
            container
            spacing={1}
            sx={{ textAlign: "center", position: "relative"}}
          >
            <Grid md={4} sx={titleRateReview}>
              <Typography variant="h6"> {review.title}</Typography>
              <FormLabel>Calificación:</FormLabel>
              <BasicRating rating={review.rating} />
            </Grid>
            <Grid sm={12} md={8}>
              <RegistreReview
                hotelId={hotelId}
                editReview={editReview}
                addReview={addReview}
                review={review}
              />
              <Button
                onClick={() => handleDelete(review.id)}
                sx={btnDeleteButton}
              >
                <LinkIcon className={styles.btnEditButton} />
              </Button>
              <Typography component={"label"} sx={txtTitleDescriptionReview}>
                Descripción
              </Typography>
              <Typography sx={txtDescriptionReview} component={"label"}>
                {review.description}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Container>
  );
};