import Head from "next/head";
import Image from "next/image";
import styles from "../styles/WIP.module.css";

export default function WIP() {
  return (
    <div>
      <Head>
        <title>Politics 101 Coming Soon! 🚧</title>
        <meta
          name="description"
          content="Work In Progress Page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Politics 101 is coming soon!</h1>
        <p className={styles.caption}>Thank you for your patience in the meanwhile!</p>
        <ConstructionImage />
      </main>
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
