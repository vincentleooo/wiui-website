import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <main className={styles.main}>
        <ul className={styles.links}>
          <li>
            <Link href="https://www.instagram.com/whatisupindonesia/"><a href="https://www.instagram.com/whatisupindonesia/">Instagram</a></Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/watch?v=uq3NP5Asx5c"><a href="https://www.youtube.com/watch?v=uq3NP5Asx5c">YouTube</a></Link>
          </li>
          <li>
            <Link href="https://twitter.com/wiuindonesia?lang=en"><a href="https://twitter.com/wiuindonesia?lang=en">Twitter</a></Link>
          </li>
          <li>
            <Link href="https://archiveofourown.org/users/WhatIsUpIndonesia/profile"><a href="https://archiveofourown.org/users/WhatIsUpIndonesia/profile">AO3</a></Link>
          </li>
        </ul>
        <p>
          Lonely? Join Our <Link href="https://discord.gg/jesM7fkBdH"><a href="https://discord.gg/jesM7fkBdH">Community!</a></Link>
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
