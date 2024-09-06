
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Review } from "@/types/interfaceHotel";
import RegistreReview from "./RegistreReview";
import BasicRating from "@/Components/Rating";
import {
  containerReviews,
  cardReview,
  txtTitleDescriptionReview,
  titleRateReviews,
  descriptionReview,
  txtDescriptionReview,
  listReviews,
  titleAdd,
  btnDeleteButton,
} from "@/styles/styles";
import { Button, FormLabel } from "@mui/material";
import styles from '@/app/page.module.css';
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
  const router= useRouter();
  const { mutate: deleteReview } = useDeleteReview();

const handleDelete = (reviewId: number) => {
  router.push(`${hotelId}/?review=${reviewId}`)
    deleteReview(reviewId);
};
  return (
    <Box sx={listReviews}>
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
        <Card key={review.id} sx={cardReview}>
          <CardContent sx={containerReviews}>
            <Typography component={"section"} sx={titleRateReviews}>
              <Typography variant="h6">Título: {review.title}</Typography>
              <FormLabel>Calificación:</FormLabel>
              <BasicRating rating={review.rating} />
            </Typography>
            <Box component={"section"} sx={descriptionReview}>
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
                <LinkIcon className={styles.btnEditButton}/>
              </Button>
              <Typography component={"label"} sx={txtTitleDescriptionReview}>
                Descripción
              </Typography>
              <Typography sx={txtDescriptionReview} component={"label"}>
                {review.description}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};
