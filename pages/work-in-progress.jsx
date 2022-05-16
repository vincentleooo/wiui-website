import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/WIP.module.css";
import Footer from "../components/Footer"

export default function WIP() {
  return (
    <div className="shortBody">
      <Head>
        <title>Work In Progress 🚧</title>
        <meta
          name="description"
          content="Work In Progress Page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      <main className={styles.main}>
        <h1 className={styles.title}>Page under construction</h1>
        <p className={styles.caption}>Thank you for your patience in the meanwhile!</p>
        <ConstructionImage />
      </main>

      <footer className={styles.footer}><Footer /></footer>
    </div>
  );
}

function ConstructionImage() {
  return (
    <div className={styles.images} style={{ height: "300px" }}>
      <Image
        className={styles.foundWebsite}
        src="/images/construction.png"
        layout="fill"
        width="100%"
        height="100%"
        objectFit="contain"
        alt="Found website meme"
      ></Image>
    </div>
  );
}
