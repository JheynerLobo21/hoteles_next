
import styles from "./page.module.css";
import { Suspense } from "react";
import Hotels from "./Hotels";
import Loading from '../Components/loading'
import { Box, Typography } from "@mui/material";
import { titleApp, mainApp } from "@/styles/styles";

export default function Home() {
  return (
    <Box sx={mainApp}>
      <Typography variant='h1' sx={titleApp}>Hoteles</Typography>
      <Suspense fallback={<Loading/>}>
        <Hotels/>
      </Suspense>
    </Box>
  );
}
