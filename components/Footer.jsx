import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <main className={styles.main}>
        <ul className={styles.links}>
          <li>
            <Link href="/work-in-progress">Instagram</Link>
          </li>
          <li>
            <Link href="/work-in-progress">YouTube</Link>
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
    </>
  );
}
