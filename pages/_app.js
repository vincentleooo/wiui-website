import "../styles/globals.css";
import { MDXProvider } from "@mdx-js/react";
import styles from "../styles/Articles.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="shortBody">
      <Header />
      <div className="mainDiv">
        <MDXProvider
          components={{
            p: (props) => <p {...props} className={styles.para} />,
            h1: (props) => <h1 {...props} className={styles.h1} />,
          }}
        >
          <Component {...pageProps} />
        </MDXProvider>
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
