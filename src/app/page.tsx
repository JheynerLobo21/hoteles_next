
import styles from "./page.module.css";
import { Suspense } from "react";
import Hotels from "./Hotels";
import Loading from '../Components/loading'
import { Typography } from "@mui/material";
import { titleApp } from "@/styles/styles";

export default function Home() {
  return (
    <main className={styles.main}>
      <Typography component={'h1'} sx={titleApp}>Hoteles</Typography>
      <Suspense fallback={<Loading/>}>
        <Hotels/>
      </Suspense>
    </main>
  );
}
