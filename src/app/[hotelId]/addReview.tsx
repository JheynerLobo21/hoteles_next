"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import { FormLabel } from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { reviewSchema } from "../Hotels/Validations";
import {
  style,
  btnAddReview,
  close,
  titleModal,
  form,
  reviewField,
  divScoreReview,
  scoreReview,
  btnNewReview,
  containerBtnNewReview,
} from "@/styles/styles";
import { Review } from "@/types/interfaceHotel";

interface Prop {
  hotelId: number;
  addReview: (review: Review) => void;
}

export default function AddReview({ hotelId, addReview }: Prop) {
  const [open, setOpen] = React.useState(false);
  
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<Review>({
    resolver: yupResolver<Review>(reviewSchema),
    defaultValues: {
      id: Math.round(Math.random() * 1000),
      title: "",
      description: "",
      rating: 0,
      hotelId: hotelId,
    },
  });

  
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
      reset(); 
      setOpen(false);
  };


  const onSubmit = (data: Review) => {
    const id = Math.round(Math.random() * 1000);
    console.log("entro a on submit")
    addReview({ ...data, id, hotelId });
    handleClose();
  };

  return (
    <Box>
      <Button onClick={handleOpen} sx={btnAddReview}>
        Agregar Reseña
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
            Registre una reseña
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
                />)}
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
                  error={!!errors.description}
                  helperText={errors.description?.message}
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
              {errors.rating && (
                <Typography color="error">{errors.rating.message}</Typography>
              )}
            </Box>
            <Box sx={containerBtnNewReview}>
              <Button variant="contained" sx={btnNewReview} type="submit">
                Agregar
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
