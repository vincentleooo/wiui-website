import styles from "./Form.module.css";
import IframeResizer from "iframe-resizer-react";

export default function Form(props) {
  return (
    <div className={styles.main} id={props.id ? props.id : ""}>
      <div className={styles.formWrapper}>
        <label htmlFor="bd-email" className={styles.header}>
          NEWSLETTER SIGN UP!
        </label>
        <p style={{margin: "1rem auto 0 auto", fontSize: "1.2rem"}}><i><b>WIUI The People Newsletter</b></i></p>
        <p>
          Btw, as soon as you click &quot;subscribe&quot; there will be an option to
          upgrade your subscription where you can choose to pay for our
          newsletter (any amount!) You can definitely get it for free, but we
          would appreciate if you would give your appreciation & support in a
          form of $$$ too ❤️
        </p>
        <IframeResizer
          log
          heightCalculationMethod="lowestElement"
          src="https://buttondown.email/wiuithepeople?as_embed=true"
          style={{
            width: "90%",
            maxWidth: "720px",
            height: "290px",
            border: "0px",
            backgroundColor: "rgb(243, 244, 246)",
            borderRadius: "10px",
          }}
          id="iframe"
        />
      </div>
    </div>
  );
}
