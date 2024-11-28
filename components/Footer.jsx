import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    (<div>
      <main className={styles.main}>
        <ul className={styles.links}>
          <li>
            <Link href="https://www.instagram.com/whatisupindonesia/">Instagram</Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/watch?v=uq3NP5Asx5c">YouTube</Link>
          </li>
          <li>
            <Link href="https://twitter.com/wiuindonesia?lang=en">Twitter</Link>
          </li>
          <li>
            <Link href="https://archiveofourown.org/users/WhatIsUpIndonesia/profile">AO3</Link>
          </li>
        </ul>
        <p>
          Lonely? Join Our <Link href="https://discord.gg/jesM7fkBdH">Community!</Link>
        </p>
      </main>
      <div className={styles.copyrightDiv}>
        <p className={styles.copyright}>
          Copyright &copy; 2022 by What Is Up, Indonesia? (WIUI). All rights
          reserved.
        </p>
      </div>
    </div>)
  );
}
