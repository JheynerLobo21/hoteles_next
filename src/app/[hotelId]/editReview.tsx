"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { FormLabel } from "@mui/material";
import React from "react";
import { Review } from "@/types/interfaceHotel";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { reviewSchema } from "../Hotels/Validations";
import {
  style,
  btnEditReview,
  close,
  titleModal,
  form,
  reviewField,
  divScoreReview,
  scoreReview,
  btnNewReview,
  containerBtnNewReview,
} from "@/styles/styles";
import styles from "@/app/page.module.css";
import { PencilIcon } from "@heroicons/react/24/outline";


interface Prop {
  review: Review;
  editReview: (review: Review) => void;
}

export default function EditReview({ editReview, review }: Prop) {
  const LinkIcon = PencilIcon;
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Review>({
    resolver: yupResolver<any>(reviewSchema),
    defaultValues: {
      id: review.id,
      title: review.title,
      description: review.description,
      rating: review.rating,
      hotelId: review.hotelId,
    },
  });

  const onSubmit = (data: Review) => {
    console.log("entro a on submit")
    editReview({ ...data, id:review.id, hotelId:review.hotelId});
    handleClose();
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Button onClick={handleOpen} sx={btnEditReview}>
        <LinkIcon className={styles.btnEditButton} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon sx={close} onClick={handleClose} />
          <Typography
            sx={titleModal}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Editar reseña
          </Typography>
          <Box component={"form"} sx={form} onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <FormLabel htmlFor="title-review" sx={reviewField}>
                Título de la reseña
                <Controller
                  name="title"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id="title"
                      type="text"
                      {...field}
                      error={!!errors.title}
                      helperText={errors.title?.message}
                      required
                    />
                  )}
                />
              </FormLabel>
            </Box>
            <Box>
              <FormLabel htmlFor="description-review" sx={reviewField}>
                Descripción de la reseña
                <Controller
                name="description"
                control={control}
                render={({ field }) => (
                <TextField
                  id="description"
                  type="text"
                  multiline
                  maxRows={4}
                  {...field}
                  error={!!errors.title}
                  helperText={errors.title?.message}
                  required
                />)}
                />
              </FormLabel>
            </Box>
            <Box sx={divScoreReview}>
              <FormLabel htmlFor="score-review" sx={scoreReview}>
                Valoración de la reseña
                <Controller
                  name="rating"
                  control={control}
                  render={({ field }) => (
                    <Rating
                      name="simple-controlled"
                      value={field.value}
                      onChange={(_, newValue) => {
                        field.onChange(newValue || 0);
                      }}
                    />
                  )}
                />
              </FormLabel>
            </Box>

            <Box sx={containerBtnNewReview}>
              <Button variant="contained" sx={btnNewReview} type="submit">
                Editar
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}