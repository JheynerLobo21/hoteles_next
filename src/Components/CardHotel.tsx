"use client";
import * as React from "react";
import { Paper, Typography, Button, Grid, Stack, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Hotel } from "@/types/interfaceHotel";
import styles from "@/app/page.module.css";
import {
  titleHotel,
  titleRate,
  containerImgHotel,
  btnDeleteButton,
} from "@/styles/styles";
import BasicRating from "@/Components/Rating";
import EditHotel from "@/app/Hotels/EditHotel";
// import { TrashIcon } from "@heroicons/react/24/outline";
// import { useDeleteHotel } from "@/hooks/mutations/Hotels/useDeleteHotel";

interface Prop {
  hotel: Hotel;
  editHotel?: (hotel: Hotel) => void;
}

export default function CardHotel({ hotel, editHotel }: Prop) {
  //const LinkIcon = TrashIcon;
  // const { mutate: deleteHotel } = useDeleteHotel();

  // const handleDelete = (id: number) => {
  //   deleteHotel(id);
  // };

  return (
    <Paper elevation={3} sx={{marginTop:"20px", width:"100%"}}>
      <Grid container spacing={1} direction={{ md: "row" }}>
        <Grid item xs={12} md={3} sx={containerImgHotel}>
          <Image
            className={styles.imgHotel}
            src={hotel.thumbnail}
            alt={hotel.description}
            width={200}
            height={200}
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <Stack spacing={1}>
            {editHotel && (
              <EditHotel editHotel={editHotel} hotel={hotel} />
            )}
            {/* <Button onClick={() => handleDelete(hotel.id)} sx={btnDeleteButton}>
              <LinkIcon className={styles.btnEditButton} />
            </Button> */}
            <Box sx={titleRate}>
              <Link href={`/${hotel.id}`} style={{ textDecoration: "none" } }>
                <Typography variant="h2" sx={titleHotel}>
                  {hotel.title}
                </Typography>
              </Link>
              <BasicRating rating={hotel.rating} />
            </Box>
            <Typography component="span" sx={{ padding: "5px 10px 5px 10px" }}>
              {hotel.description}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
}
