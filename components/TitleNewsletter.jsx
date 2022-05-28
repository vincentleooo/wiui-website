/* eslint-disable @next/next/no-img-element */
import styles from "./Title.module.css";

export default function TitleNewsletter(props) {
  return (
    <div>
      <h1 className={styles.title}>{props.title}&#8288;<span style={{fontSize: "1.2rem"}}>&nbsp;</span><img style={{display: "inline-block"}} src="/images/wiuithepeople.png" alt="WIUI emoji" className={styles.image} ></img></h1>
      <p className={styles.caption}>{props.caption ? props.caption : ""}</p>
    </div>
  );
}