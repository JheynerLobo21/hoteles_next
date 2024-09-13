"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { FormLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  style,
  titleModal,
  form,
  reviewField,
  containerAddHotels,
  containerBtnNewReview,
  btnNewReview,
} from "@/styles/styles";

// Definición del esquema de validación con yup
const schema = yup.object({
  title: yup
    .string()
    .required("El título es obligatorio")
    .min(1, "Debe tener al menos 1 carácter")
    .max(255, "Debe tener como máximo 255 caracteres"),
  description: yup
    .string()
    .required("La descripción es obligatoria")
    .min(1, "Debe tener al menos 1 carácter")
    .max(500, "Debe tener como máximo 500 caracteres"),
  category: yup
    .string()
    .required("La categoría es obligatoria"),
}).required();

export default function ValidateForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Función que se ejecuta al enviar el formulario
  const onSubmit = (data: any) => {
    console.log("Datos del formulario:", data);
  };

  return (
    <Container maxWidth="sm" sx={{marginTop:"200px"}}>
      <Box sx={containerAddHotels}>
        <Box sx={style}>
          <Typography sx={titleModal} variant="h6">
            Formulario
          </Typography>
          <Box component={"form"} sx={form} onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <FormLabel htmlFor="title-review" sx={reviewField}>
                Nombre del hotel
                <TextField
                  id="title"
                  type="text"
                  {...register("title")}
                  error={!!errors.title}
                  helperText={errors.title?.message}
                  required
                />
              </FormLabel>
            </Box>

            <Box>
              <FormLabel htmlFor="description-review" sx={reviewField}>
                Descripción del hotel
                <TextField
                  id="description"
                  type="text"
                  multiline
                  maxRows={4}
                  {...register("description")}
                  error={!!errors.description}
                  helperText={errors.description?.message}
                  required
                />
              </FormLabel>
            </Box>

            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth error={!!errors.category}>
                <InputLabel id="category-label">Categoría</InputLabel>
                <Select
                  labelId="category-label"
                  id="category"
                  {...register("category")}
                >
                  <MenuItem value={"1"}>Categoría 1</MenuItem>
                  <MenuItem value={"2"}>Categoría 2</MenuItem>
                  <MenuItem value={"3"}>Categoría 3</MenuItem>
                </Select>
                <Typography color="error">
                  {errors.category?.message}
                </Typography>
              </FormControl>
            </Box>

            <Box sx={containerBtnNewReview}>
              <Button variant="contained" sx={btnNewReview} type="submit">
                Enviar
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
