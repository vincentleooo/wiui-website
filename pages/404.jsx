import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/WIP.module.css";
import Footer from "../components/Footer"

export default function Custom404() {
  return (
    <div className="shortBody">
      <Head>
        <title>404 - Not Found</title>
        <meta
          name="description"
          content="404 Landing Page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      <main className={styles.main}>
        <h1 className={styles.title}>404 - Page Not Found</h1>
        <p className={styles.caption}>
          Either the page does not exist or it is under construction :(
        </p>
      </main>

      <footer className={styles.footer}><Footer /></footer>
    </div>
  );
}
