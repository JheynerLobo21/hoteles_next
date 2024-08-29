"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import CloseIcon from '@mui/icons-material/Close';
import { Review } from "@/types/interfaceHotel";
import { btnAddReview } from "@/styles/styles";
import styles from '@/app/page.module.css';
import { form, close } from "@/styles/styles";
import { reviewField, scoreReview, containerBtnNewReview, btnNewReview, titleModal, divScoreReview} from "@/styles/styles"


const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 3,
  p: 4,
  color: 'black',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

interface Prop {
  hotelId: number;
  addReview: (review: Review) => void;
}

export default function RegistreReview({ hotelId, addReview }: Prop) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = React.useState<Review>({
    id: Math.round(Math.random() * 1000),
    title: "",
    description: "",
    rating: 0,
    hotelId: hotelId,
  });

  const handleForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

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
  

  return (
    <div className={styles.addReview}>
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
          <Typography component={'form'} sx={form} onSubmit={handleAddReview}>
            <div>
              <Typography component={'label'} htmlFor="title-review" sx={reviewField}>
                Título de la reseña
                <TextField id="title" type="text" onChange={handleForm} required/>
              </Typography>
            </div>
            <div>
              <Typography component={'label'} htmlFor="description-review" sx={reviewField}>
                Descripción de la reseña
                <TextField
                  id="description"
                  type="text"
                  multiline
                  maxRows={4}
                  onChange={handleForm}
                  required
                />
              </Typography>
            </div>
            <Typography component={'div'} sx={divScoreReview}>
              <Typography component={'label'} htmlFor="score-review" sx={scoreReview}>
                Valoración de la reseña
                <Rating
                  name="simple-controlled"
                  value={formData.rating}
                  onChange={handleRatingChange}
                  id="rating"
                />
              </Typography>
            </Typography>
            
            <Typography component={'div'} sx={containerBtnNewReview}>
              <Button
                variant="contained"
                sx={btnNewReview}
                type="submit"
              >
                Agregar
              </Button>
            </Typography>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
