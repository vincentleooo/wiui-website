import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <main className={styles.main}>
        <ul className={styles.links}>
          <li>
            <Link href="https://www.instagram.com/whatisupindonesia/">Instagram</Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/watch?v=uq3NP5Asx5c">YouTube</Link>
          </li>
          <li>
            <Link href="/work-in-progress">Twitter</Link>
          </li>
          <li>
            <Link href="/work-in-progress">AO3</Link>
          </li>
        </ul>
        <p>
          Lonely? Join Our <Link href="work-in-progress">Community!</Link>
        </p>
      </main>
      <div className={styles.copyrightDiv}>
        <p className={styles.copyright}>
          Copyright &copy; 2022 by What Is Up, Indonesia? (WIUI). All rights
          reserved.
        </p>
      </div>
    </div>
  );
}
