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
import { schema } from "./Validations";
import {
  style,
  btnAddHotel,
  close,
  titleModal,
  form,
  reviewField,
  divScoreReview,
  scoreReview,
  btnNewReview,
  containerBtnNewReview,
  containerAddHotels,
} from "@/styles/styles";
import { Hotel } from "@/types/interfaceHotel";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

interface Prop {
  addHotel: (hotel: Hotel) => void;
}



export default function AddHotel({ addHotel }: Prop) {
  const [open, setOpen] = React.useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<Hotel>({
    resolver: yupResolver<any>(schema),
    defaultValues: {
      id: Math.round(Math.random() * 1000),
      title: "",
      description: "",
      rating: 0,
      thumbnail: "",
    },
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    reset(); 
    setOpen(false);
  };

  const onSubmit = (data: Hotel) => {
    const id = Math.round(Math.random() * 1000);  
    addHotel({ ...data, id });
    handleClose(); 
  };

  return (
    <Box sx={containerAddHotels}>
      <Button onClick={handleOpen} sx={btnAddHotel}>
        Agregar hotel
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
            Registre un hotel
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
                />)}
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
                />)}
                />
              </FormLabel>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Controller
                name="thumbnail"
                control={control}
                render={({ field }) => (
                  <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                  >
                    {field.value === "" ? "Cargar imagen" : "Imagen cargada"}
                    <VisuallyHiddenInput
                      type="file"
                      onChange={(event) => {
                        const file = event.target.files?.[0];
                        if (file) {
                          const imageUrl = URL.createObjectURL(file);
                          field.onChange(imageUrl);  
                        }
                      }}
                    />
                  </Button>
                )}
              />
              {errors.thumbnail && (
                <Typography color="error">{errors.thumbnail.message}</Typography>
              )}
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
