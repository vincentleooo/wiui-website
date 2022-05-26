import "../styles/globals.css";
import { MDXProvider } from "@mdx-js/react";
import styles from "../styles/Articles.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link"

// Taken from https://github.com/leerob/leerob.io/blob/main/components/MDXComponents.tsx#L13
const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} className={styles.link}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" className={styles.link} {...props} />;
};

function MyApp({ Component, pageProps }) {
  return (
    <div className="shortBody">
      <Header />
      <div className="mainDiv">
        <MDXProvider
          components={{
            p: (props) => <p {...props} className={styles.para} />,
            h1: (props) => <h1 {...props} className={styles.h1} />,
            h2: (props) => <h2 {...props} className={styles.h2} />,
            a: CustomLink,
            ul: (props) => <ul {...props} className={styles.ul} />,
            ol: (props) => <ol {...props} className={styles.ol} />,
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
