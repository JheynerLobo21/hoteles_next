import * as yup from "yup";

export const schema = yup.object({
    title: yup
      .string()
      .required("El título es obligatorio")
      .min(1, "El título debe tener al menos 1 carácter")
      .max(255, "El título debe tener como máximo 255 caracteres"),
    description: yup
      .string()
      .required("La descripción es obligatoria")
      .min(1, "La descripción debe tener al menos 1 carácter")
      .max(1000, "La descripción debe tener como máximo 255 caracteres"),
    rating: yup
      .number()
      .required("La valoración es obligatoria")
      .min(1, "La valoración mínima es 1")
      .max(5, "La valoración máxima es 5"),
    thumbnail: yup
      .mixed()
      .required("La imagen es obligatoria"), 
    id: yup.number().positive().required().integer(),
  }).required();

  export const reviewSchema = yup.object({
    title: yup
      .string()
      .required("El título es obligatorio")
      .min(10, "El título debe tener al menos 10 carácter")
      .max(255, "El título debe tener como máximo 255 caracteres"),
    description: yup
      .string()
      .required("La descripción es obligatoria")
      .min(10, "La descripción debe tener al menos 10 carácter")
      .max(1000, "La descripción debe tener como máximo 255 caracteres"),
    rating: yup
      .number()
      .required("La valoración es obligatoria")
      .min(1, "La valoración mínima es 1")
      .max(5, "La valoración máxima es 5"),
    hotelId: yup.number().positive().required().integer(),
    id: yup.number().positive().required().integer(),
  }).required();