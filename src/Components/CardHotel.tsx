"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Hotel } from "@/types/interfaceHotel";
import styles from "@/app/page.module.css";
import { Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import { titleHotel, titleRate, containerImgHotel } from "@/styles/styles";
import Image from "next/image";
import Link from "next/link";
import BasicRating from "@/Components/Rating";
import { Box } from "@mui/material";
import EditHotel from "@/app/Hotels/EditHotel";

interface Prop {
  hotel: Hotel;
  editHotel?: (hotel: Hotel) => void;
}

export default function CardHotel({ hotel, editHotel }: Prop) {
  return (
    <Paper elevation={3} >
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
              <EditHotel editHotel={editHotel ?? (() => {})} hotel={hotel} />
            )}
            <Box sx={titleRate}>
              <Link href={`/${hotel.id}`}>
                <Typography variant="h2" sx={titleHotel}>
                  {hotel.title}
                </Typography>
              </Link>
              <BasicRating rating={hotel.rating} />
            </Box>
            <Typography component="span" sx={{padding:"5px 10px 5px 10px"}}>
              {hotel.description}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
}