import Link from "next/link";
import styles from "../styles/Index.module.css";

export default function CTAButton(props) {
  return (
    (<div className={props.styles}>
      <Link href={props.path ? props.path : ""}>

        <button className={styles.ctaButton}>{props.title}</button>

      </Link>
    </div>)
  );
}