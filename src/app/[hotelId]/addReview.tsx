'use client'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import CloseIcon from '@mui/icons-material/Close';
import Modal from "@mui/material/Modal";
import { FormLabel } from "@mui/material";
import React from "react";
import { style, btnAddReview, addNewReview, close, titleModal, form, reviewField, divScoreReview, scoreReview, btnNewReview, containerBtnNewReview } from "@/styles/styles";
import { Review } from "@/types/interfaceHotel";
import { PencilIcon } from "@heroicons/react/24/outline";


  interface Prop{
    hotelId: number;
    addReview: (review: Review) => void;
  }

export default function AddReview({hotelId, addReview}: Prop) {
    const LinkIcon = PencilIcon; 
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = React.useState<Review>({
        id: Math.round(Math.random() * 1000),
        title: "",
        description: "",
        rating: 0,
        hotelId: hotelId,
      });
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);

  const handleRatingChange = (event: React.SyntheticEvent, newValue: number | null) => {
    setFormData((prevState) => ({
      ...prevState,
      rating: newValue || 0,
    }));
  };

  const handleAddReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title && formData.description && formData.rating) {
      addReview(formData);
      handleClose();
    }
  };

  const handleForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return(
    <Box sx={addNewReview}>
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
        <CloseIcon sx={close} onClick={handleClose}/>
          <Typography sx={titleModal} id="modal-modal-title" variant="h6" component="h2">
            Registre una reseña
          </Typography>
          <Box component={'form'} sx={form} onSubmit={handleAddReview}>
            <Box>
              <FormLabel htmlFor="title-review" sx={reviewField}>
                Título de la reseña
                <TextField id="title" type="text" onChange={handleForm} required/>
              </FormLabel>
            </Box>
            <Box>
              <FormLabel htmlFor="description-review" sx={reviewField}>
                Descripción de la reseña
                <TextField
                  id="description"
                  type="text"
                  multiline
                  maxRows={4}
                  onChange={handleForm}
                  required
                />
              </FormLabel>
            </Box>
            <Box sx={divScoreReview}>
              <FormLabel htmlFor="score-review" sx={scoreReview}>
                Valoración de la reseña
                <Rating
                  name="simple-controlled"
                  value={formData.rating}
                  onChange={handleRatingChange}
                  id="rating"
                />
              </FormLabel>
            </Box>
            
            <Box sx={containerBtnNewReview}>
              <Button
                variant="contained"
                sx={btnNewReview}
                type="submit"
              >
                Agregar
              </Button>
            </Box>
          </Box>
        </Box>
        </Modal>
        </Box>
  )
}

