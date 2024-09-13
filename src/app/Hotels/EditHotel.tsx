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
import {
  style,
  btnEditButton,
  close,
  titleModal,
  form,
  reviewField,
  divScoreReview,
  scoreReview,
  btnNewReview,
  containerEditHotel,
  containerBtnNewReview,
} from "@/styles/styles";
import styles from "@/app/page.module.css";
import { PencilIcon } from "@heroicons/react/24/outline";
import { Hotel } from "@/types/interfaceHotel";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./Validations";

interface Prop {
  hotel: Hotel;
  editHotel: (hotel: Hotel) => void;
}

export default function EditHotel({ editHotel, hotel }: Prop) {
  const LinkIcon = PencilIcon;
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Hotel>({
    resolver: yupResolver<any>(schema),
    defaultValues: {
      id: hotel.id,
      title: hotel.title,
      description: hotel.description,
      rating: hotel.rating,
      thumbnail: hotel.thumbnail,
    },
  });

  const onSubmit = (data: Hotel) => {
    editHotel({ ...data, id: hotel.id });
    handleClose(); 
  };

  return (
    <Box sx={containerEditHotel}>
      <Button onClick={handleOpen} sx={btnEditButton}>
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
            Editar Hotel
          </Typography>
          <Box component={"form"} sx={form} onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <FormLabel htmlFor="title-review" sx={reviewField}>
                Nombre del hotel
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
                Descripción del hotel
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
                    />
                  )}
                />
              </FormLabel>
            </Box>
            <Box sx={divScoreReview}>
              <FormLabel htmlFor="score-review" sx={scoreReview}>
                Valoración del hotel
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
