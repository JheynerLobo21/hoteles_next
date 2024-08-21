"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import { Review } from "@/types/interfaceHotel";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 3,
  p: 4,
};

interface Prop {
  hotelId: number;
}

export default function RegistreReview({ hotelId }: Prop) {
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

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title && formData.description && formData.rating) {
      console.log(formData);
      const reviewData = async () => {
        const data = {
          title: formData.title,
          id: formData.id,
          hotelId: formData.hotelId,
          description: formData.description,
          rating:formData.rating
        };
  
        const response = await fetch("https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/reviews/", {
          method: "POST",
          body: JSON.stringify(data),
        });
        console.log(response.status)
        return response.json();
        
      };
        reviewData().then((data) => {
          alert("Review creado");
        });
        handleClose();

      
    }
  };

  return (
    <div className="add-review">
      <Button onClick={handleOpen} className="btn-add-review">
        Agregar Review
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="content-modal">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Registre una review
          </Typography>
          <form className="form" onSubmit={handleAddReview}>
            <div>
              <label htmlFor="title-review" id="tit-review">
                Título del review
                <TextField id="title" type="text" onChange={handleForm} />
              </label>
            </div>
            <div>
              <label htmlFor="description-review" id="descrip-review">
                Descripción del review
                <TextField
                  id="description"
                  type="text"
                  multiline
                  minRows={4}
                  onChange={handleForm}
                />
              </label>
            </div>
            <div>
              <label htmlFor="score-review" id="score-review">
                Valoración del review
                <Rating
                  name="simple-controlled"
                  value={formData.rating}
                  onChange={handleRatingChange}
                  id="rating"
                />
              </label>
            </div>
            <div className="container-btn-new-review">
              <Button
                variant="contained"
                className="btn-new-review"
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
