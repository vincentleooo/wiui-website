import Image from "next/legacy/image";
import styles from "./ArticleImage.module.css";

export default function MDXImage(props) {
  if (props.title !== undefined) {
    return (
      <div style={{ margin: "2rem 0" }}>
        <figure style={{ marginInlineStart: "0", marginInlineEnd: "0" }}>
          <div className={styles.imageContainer}>
            <Image
              src={props.src}
              alt={props.alt}
              layout="fill"
              height="100%"
              objectFit="cover"
              className={styles.image}
              unoptimized={props.gif ? props.gif : false}
            />
          </div>
          <figcaption className={styles.figCaption}>{props.title}</figcaption>
        </figure>
      </div>
    );
  } else {
    return (
      <div style={{ margin: "2rem auto" }}>
        <div className={styles.imageContainer}>
          <Image
            src={props.src}
            alt={props.alt}
            layout="fill"
            height="100%"
            objectFit="cover"
            className={styles.image}
            unoptimized={props.gif ? props.gif : false}
          />
        </div>
      </div>
    );
  }
}
