
import styles from "./page.module.css";
import { Suspense } from "react";
import Hotels from "./Hotels";
import Loading from '../Components/loading'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.titleApp}>Hoteles</h1>
      <Suspense fallback={<Loading/>}>
        <Hotels/>
      </Suspense>
    </main>
  );
}
