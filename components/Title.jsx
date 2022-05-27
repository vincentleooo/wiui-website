import styles from "./Title.module.css";

export default function Title(props) {
  return (
    <div>
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.caption}>{props.caption ? props.caption : ""}</p>
    </div>
  );
}