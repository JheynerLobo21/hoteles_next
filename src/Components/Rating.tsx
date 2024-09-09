'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
interface Prop {
    rating:number
}

export default function BasicRating({rating}:Prop) {

  return (
    <Box>
      <Typography component="legend">
      <Rating name="read-only" value={rating} readOnly size='large' />
      </Typography>
    </Box>
  );
}
