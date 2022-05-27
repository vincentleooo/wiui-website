import styles from "./Title.module.css";
import Image from "next/image"

export default function TitleNewsletter(props) {
  return (
    <div>
      <h1 className={styles.title}>{props.title}<span style={{fontSize: "1.2rem"}}>&nbsp;</span><Image src="/images/wiuithepeople.png" className={styles.image} height={38} width={12}></Image></h1>
      <p className={styles.caption}>{props.caption ? props.caption : ""}</p>
    </div>
  );
}