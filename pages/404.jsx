import Head from "next/head";
import styles from "../styles/WIP.module.css";

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>404 - Not Found</title>
        <meta
          name="description"
          content="404 Landing Page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>404 - Page Not Found</h1>
        <p className={styles.caption}>
          Either the page does not exist or it is under construction :(
        </p>
      </main>
    </div>
  );
}
