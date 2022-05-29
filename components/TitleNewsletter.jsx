/* eslint-disable @next/next/no-img-element */
import styles from "./Title.module.css";

export default function TitleNewsletter(props) {
  return (
    <div>
      <h1 className={styles.title}>WIUI The <span style={{whiteSpace: "nowrap"}}>People<div style={{width: "0.3rem", display: "inline-block"}}></div><img style={{display: "inline-block"}} src="/images/wiuithepeople.png" alt="WIUI emoji" className={styles.image} ></img></span></h1>
      <p className={styles.caption}>{props.caption ? props.caption : ""}</p>
    </div>
  );
}