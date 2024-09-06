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
import { Hotel } from "@/types/interfaceHotel";
import { PencilIcon } from "@heroicons/react/24/outline";
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  

  interface Prop{
    addHotel: (hotel: Hotel) => void;
  }

export default function AddHotel({ addHotel}: Prop) {
    const LinkIcon = PencilIcon; 
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = React.useState<Hotel>({
        id: Math.round(Math.random() * 1000),
        title: "",
        description: "",
        rating: 0,
        thumbnail:"",

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
      addHotel(formData);
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
            Registre un hotel
          </Typography>
          <Box component={'form'} sx={form} onSubmit={handleAddReview}>
            <Box>
              <FormLabel htmlFor="title-review" sx={reviewField}>
                Nombre del hotel
                <TextField id="title" type="text" onChange={handleForm} required/>
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
                  onChange={handleForm}
                  required
                />
              </FormLabel>
            </Box>
            <Box>
            <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Cargar imagen
      <VisuallyHiddenInput
        type="file"
        onChange={(event) => console.log(event.target.files)}
        multiple
      />
    </Button>
            </Box>
            <Box sx={divScoreReview}>
              <FormLabel htmlFor="score-review" sx={scoreReview}>
                Valoración del hotel
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

