'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import styles from './styles.module.css'
interface Prop {
    rating:number
}

export default function BasicRating({rating}:Prop) {

  return (
    <Box
    className={styles.rate}
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend"></Typography>
      <Rating name="read-only" value={rating} readOnly size='large'/>
    </Box>
  );
}
