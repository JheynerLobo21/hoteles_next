
import styles from "./page.module.css";
import { Suspense } from "react";
import Hotels from "./Hotels";
import Loading from './loading'

export default function Home() {
  return (
    <main className={styles.main}>
      <Suspense fallback={<Loading/>}>
        <Hotels/>
      </Suspense>
    </main>
  );
}
