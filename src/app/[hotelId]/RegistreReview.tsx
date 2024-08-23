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
import styles from '@/app/page.module.css';

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
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),

      });
      console.log(response.status)
      const newReview = await response.json();
      addReview(newReview);
      handleClose();
    }
  };

  return (
    <div className={styles.addReview}>
      <Button onClick={handleOpen} className={styles.btnAddReview}>
        Agregar Reseña
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={styles.contentModal}>
        <CloseIcon className={styles.close} onClick={handleClose}/>
          <Typography className={styles.titleModal} id="modal-modal-title" variant="h6" component="h2">
            Registre una reseña
          </Typography>
          <form className={styles.form} onSubmit={handleAddReview}>
            <div>
              <label htmlFor="title-review" className={styles.titReview}>
                Título de la reseña
                <TextField id="title" type="text" onChange={handleForm} />
              </label>
            </div>
            <div>
              <label htmlFor="description-review" className={styles.descripReview}>
                Descripción de la reseña
                <TextField
                  id="description"
                  type="text"
                  multiline
                  maxRows={4}
                  onChange={handleForm}
                />
              </label>
            </div>
            <div>
              <label htmlFor="score-review" className={styles.scoreReview}>
                Valoración de la reseña
                <Rating
                  name="simple-controlled"
                  value={formData.rating}
                  onChange={handleRatingChange}
                  id="rating"
                />
              </label>
            </div>
            <div className={styles.containerBtnNewReview}>
              <Button
                variant="contained"
                className={styles.btnNewReview}
                type="submit"
              >
                Agregar
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
