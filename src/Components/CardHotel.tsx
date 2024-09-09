"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Hotel } from "@/types/interfaceHotel";
import styles from "@/app/page.module.css";
import { Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import { titleHotel } from "@/styles/styles";
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
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Grid container spacing={2} direction={{ md: "row" }}>
        <Grid item xs={12} md={3} sx={{ padding: 2 }}>
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
            <EditHotel editHotel={editHotel ?? (() => {})} hotel={hotel} />
            <Box sx={{ display: "flex" }}>
              <Link href={`/${hotel.id}`}>
                <Typography variant="h2" sx={titleHotel}>
                  {hotel.title}
                </Typography>
              </Link>
              <BasicRating rating={hotel.rating} />
            </Box>
            <Typography component="span" variant="body2">
              {hotel.description}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
}