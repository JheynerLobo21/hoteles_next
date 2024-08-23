import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import styles from './styles.module.css'


interface Prop {
    hotelTitle: string
    hotelId: number
}

export default function BasicBreadcrumbs({hotelTitle, hotelId}:Prop) {
  return (
    <div role="presentation" className={styles.breadchumbs}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
            List hotels
        </Link>
          <Typography color="text.primary">Hotel: {hotelTitle}</Typography>
        
      </Breadcrumbs>
    </div>
  );
}
