import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { breadchumbs } from '@/styles/styles';
import { Box } from '@mui/material';


interface Prop {
    hotelTitle: string
    hotelId: number
}

export default function BasicBreadcrumbs({hotelTitle, hotelId}:Prop) {
  return (
    <Box sx={breadchumbs}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
            List hotels
        </Link>
          <Typography color="text.primary">Hotel: {hotelTitle}</Typography>
        
      </Breadcrumbs>
    </Box>
  );
}
