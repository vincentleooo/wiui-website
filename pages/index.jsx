import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Index.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Index() {
  const [mobile, setMobile] = useState(undefined);

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResponsive() {
        // Set window width/height to state
        setMobile(window.matchMedia("(min-width: 800px)").matches);
      }

      // Add event listener
      window.addEventListener("resize", handleResponsive);

      // Call handler right away so state gets updated with initial window size
      handleResponsive();

      // Remove event listener on cleanup
      return () => {
        window.removeEventListener("resize", handleResponsive);
      };
    }
  }, []);

  return (
    <div>
      <Head>
        <title>What Is Up, Indonesia?</title>
        <meta
          name="description"
          content="Spoon-feeding IDN sociopolitics in ENG, one ugly post at a time 🍉"
        />
        <meta property="og:title" content="What Is Up, Indonesia?" />
        <meta
          property="og:image"
          content="https://i.ibb.co/BGpYTWg/Screenshot-2022-06-21-at-22-38-17.png"
        />
        <meta
          property="og:description"
          content="Spoon-feeding IDN sociopolitics in ENG, one ugly post at a time 🍉"
        />
        <meta property="og:url" content="https://whatisupindonesia.com" />
        <meta property="og:image:width" content="2560" />
        <meta property="og:image:height" content="1600" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {mobile && (
          <>
            <FirstComponent></FirstComponent>
            <Divider />
            <LeftText
              content={<FirstContent />}
              image={<FirstImage height="500px" />}
            ></LeftText>
            <Divider />
            <RightText
              content={<SecondContent />}
              image={<SecondImage height="500px" />}
            ></RightText>
            <Divider />
            <LeftText
              content={<ThirdContent />}
              image={<ThirdImage height="500px" />}
            ></LeftText>
            <Divider />
            <RightText
              content={<FourthContent />}
              image={<FourthImage height="500px" />}
            ></RightText>
            <Divider />
            <LeftText
              content={<FifthContent />}
              image={<FifthImage height="500px" />}
            ></LeftText>
            <Divider />
            {/* <RightText
              content={<SixthContent />}
              image={<SixthImage height="500px" />}
            ></RightText>
            <Divider /> */}
            <LastComponent />
          </>
        )}
        {!mobile && (
          <>
            <FirstComponent height="200px"></FirstComponent>
            <Divider />
            <LeftText
              content={<FirstContent />}
              image={<FirstImage height="200px" />}
            ></LeftText>
            <Divider />
            <RightText
              content={<SecondContent />}
              image={<SecondImage height="200px" />}
            ></RightText>
            <Divider />
            <LeftText
              content={<ThirdContent />}
              image={<ThirdImage height="200px" />}
            ></LeftText>
            <Divider />
            <RightText
              content={<FourthContent />}
              image={<FourthImage height="200px" />}
            ></RightText>
            <Divider />
            <LeftText
              content={<FifthContent />}
              image={<FifthImage height="200px" />}
            ></LeftText>
            <Divider />
            {/* <RightText
              content={<SixthContent />}
              image={<SixthImage height="200px" />}
            ></RightText>
            <Divider /> */}
            <LastComponent />
          </>
        )}
      </main>
    </div>
  );
}

function CTAButton(props) {
  return (
    <div className={props.styles}>
      <Link href={props.path ? props.path : ""}>
        <a href={props.path ? props.path : ""}>
          <button className={styles.ctaButton}>{props.title}</button>
        </a>
      </Link>
    </div>
  );
}

function CTAButtonWiuipedia(props) {
  return (
    <div className={props.styles}>
      <Link href={props.path ? props.path : ""}>
        <a href={props.path ? props.path : ""}>
          <button className={styles.ctaButtonWiuipedia}>{props.title}</button>
        </a>
      </Link>
    </div>
  );
}

function DoubleCTAButton(props) {
  return (
    <div className={`${props.styles} ${styles.ctaButtonGrid}`}>
      <Link href={props.path1 ? props.path1 : ""}>
        <div className={styles.doubleCTAFirst}>
          <a href={props.path1 ? props.path1 : ""}>
            <button className={styles.ctaButtonSpecial}>{props.title1}</button>
          </a>
        </div>
      </Link>
      <Link href={props.path1 ? props.path1 : ""}>
        <a href={props.path1 ? props.path1 : ""}>
          <button
            className={`${styles.ctaButtonSpecial} ${styles.doubleCTAFirstAlt}`}
          >
            {props.title1}
          </button>
        </a>
      </Link>
      <Link href={props.path2 ? props.path2 : ""}>
        <a href={props.path2 ? props.path2 : ""}>
          <button className={styles.ctaButton}>{props.title2}</button>
        </a>
      </Link>
    </div>
  );
}

function Divider() {
  return (
    <div className={styles.divider}>
      <hr />
    </div>
  );
}

function FirstComponent({ height }) {
  return (
    <div className={`${styles.frontPage} ${styles.firstComp}`}>
      <h1 className={styles.sup}>Sup, Wuiboos!</h1>
      <div className={styles.images} style={{ height: height }}>
        <Image
          className={styles.foundWebsite}
          src="/images/front-page-memes/found-website.webp"
          layout="fill"
          width="100%"
          height="100%"
          objectFit="contain"
          alt="Found website meme"
          priority="true"
        ></Image>
      </div>
      <p className={styles.confused}>
        Confused about Indonesia’s sociopolitics?
        <br />
        You’ve come to the right place.
      </p>
      {/* <CTAButton
        title="Sign up for newsletter"
        styles={styles.firstCTAButton}
        path="/newsletter#newsletter-sign-up"
      ></CTAButton> */}
    </div>
  );
}

function LastComponent() {
  return (
    <div className={styles.frontPage} id="wuiboos-corner">
      <h1 className={styles.sup} style={{ marginBottom: "0" }}>
        Wuiboos Corner
      </h1>
      <p className={styles.confused}>
        The WIUI community has become a safe-space for many english-speaking
        young Indonesians to make friends <del>and even romantic love</del>.
        <br />
        <br />
        Connect with critical, fun, like-minded individuals here!
      </p>
      <div className={styles.wuiboosCorner}>
        <div className={styles.wuiboosCornerChild}>
          <Discord />
          <span style={{ fontSize: "1.2rem" }}>&nbsp;</span>
          <CTAButton
            title="Join Our Discord"
            path="https://discord.com/invite/EtBnwSt"
            styles={styles.firstCTAButton}
          ></CTAButton>
        </div>
        <div className={styles.wuiboosCornerChild}>
          <WeeGombal />
          <span style={{ fontSize: "1.2rem" }}>&nbsp;</span>
          <CTAButton
            title="Community-run Finsta"
            path="https://www.instagram.com/weeweegombal/"
            styles={styles.firstCTAButton}
          ></CTAButton>
        </div>
      </div>
    </div>
  );
}

function LeftText({ content, image }) {
  return (
    <div className={`${styles.frontPage} ${styles.leftTextDiv}`}>
      {content}
      {image}
    </div>
  );
}

function RightText({ content, image }) {
  return (
    <div className={`${styles.frontPage} ${styles.rightTextDiv}`}>
      {image}
      {content}
    </div>
  );
}

function FirstContent() {
  return (
    <div>
      <h1 className={styles.text}>WHAT IS “WHAT IS UP, INDONESIA? (WIUI)”?</h1>
      <p className={styles.caption}>
        Simply put, we’re a media platform that spoon-feeds Indonesian
        sociopolitics in english and memes.
      </p>
      <p
        className={styles.caption}
        style={{ fontSize: "1rem", lineHeight: "1.2rem" }}
      >
        *currently still not an official newssite or professional. Prone to bias
        & error, so please verify everything and do your own research!
      </p>
      <CTAButton
        title="Read More"
        styles={styles.firstCTAButton}
        path="/about"
      ></CTAButton>
    </div>
  );
}

function SecondContent() {
  return (
    <div>
      <h1 className={styles.text}>Politics made you anxious?</h1>
      <p className={styles.caption}>
        Checkout WIUI’s collab with Ibunda.id to provide you with free
        counseling with a peer counselor. Yes, for real.
      </p>
      <DoubleCTAButton
        title1="Free 'counseling'"
        title2="Learn more"
        styles={styles.firstCTAButton}
        path1="https://www.ibunda.id/freecurhat/wiui"
        path2="/free-counseling"
      ></DoubleCTAButton>
    </div>
  );
}

// function ThirdContent() {
//   return (
//     <div>
//       <h1 className={styles.text}>WE HAVE A NEWSLETTER NOW!</h1>
//       <p className={styles.caption}>
//         Receive up to date and easy to understand news and commentary in your
//         inboxes every week!
//         <br />
//         <br />
//         Of course, in a fun WIUI fashion.
//       </p>
//       <DoubleCTAButton
//         title1="Learn More"
//         title2="I Trust U. Sign Me Up"
//         styles={styles.firstCTAButton}
//         path1="/newsletter"
//         path2="/newsletter#newsletter-sign-up"
//       ></DoubleCTAButton>
//     </div>
//   );
// }

function ThirdContent() {
  return (
    <div>
      <h1 className={styles.text}>
        “LOVE UR INSTAGRAM CONTENT BUT IT CAN GET HARD TO READ...”
      </h1>
      <p className={styles.caption}>
        Read the article version of our posts here!
      </p>
      <CTAButton
        title="Articles"
        styles={styles.firstCTAButton}
        path="/articles"
      ></CTAButton>
    </div>
  );
}

function FourthContent() {
  return (
    <div>
      <h1 className={styles.text}>
        “IDK ALL THESE ABBREVIATIONS & POLITICAL JARGONS...”
      </h1>
      <p className={styles.caption}>Try our Indonesian politics glossary!</p>
      <CTAButtonWiuipedia
        title="Wiuipedia"
        styles={styles.firstCTAButton}
        path="/wiuipedia"
      ></CTAButtonWiuipedia>
    </div>
  );
}

function FifthContent() {
  return (
    <div>
      <h1 className={styles.text}>“THERE’S SO MANY POLITICAL PARTIES I-”</h1>
      <p className={styles.caption}>Say less.</p>
      <CTAButton
        title="Party Profiles"
        styles={styles.firstCTAButton}
        path="/party-profiles"
      ></CTAButton>
    </div>
  );
}

// TODO Reconsider having this field
// function SixthContent() {
//   return (
//     <div>
//       <h1 className={styles.text}>“HELP... I LITERALLY KNOW NOTHING...”</h1>
//       <p className={styles.caption}>Check out our crash course!</p>
//       <CTAButton
//         title="Indo Politics 101"
//         styles={styles.firstCTAButton}
//         path="/indo-politics-101"
//       ></CTAButton>
//     </div>
//   );
// }

function FirstImage({ height }) {
  return (
    <div className={styles.images} style={{ height: height }}>
      <Image
        className={styles.foundWebsite}
        src="/images/front-page-memes/wiui-logo.webp"
        layout="fill"
        objectFit="contain"
        alt="WIUI Logo"
      ></Image>
    </div>
  );
}

function SecondImage({ height }) {
  return (
    <div className={styles.images} style={{ height: height }}>
      <Image
        className={styles.foundWebsite}
        src="/images/front-page-memes/ibunda.webp"
        layout="fill"
        objectFit="contain"
        alt="Newsletter meme"
      ></Image>
    </div>
  );
}

function ThirdImage({ height }) {
  return (
    <div className={styles.images} style={{ height: height }}>
      <Image
        className={styles.foundWebsite}
        src="/images/front-page-memes/ig-squint.webp"
        layout="fill"
        objectFit="contain"
        alt="Squinting meme"
      ></Image>
    </div>
  );
}

function FourthImage({ height }) {
  return (
    <div className={styles.images} style={{ height: height }}>
      <Image
        className={styles.foundWebsite}
        src="/images/front-page-memes/acronyms.webp"
        layout="fill"
        objectFit="contain"
        alt="Acronyms meme"
      ></Image>
    </div>
  );
}

function FifthImage({ height }) {
  return (
    <div className={styles.images} style={{ height: height }}>
      <Image
        className={styles.foundWebsite}
        src="/images/front-page-memes/same-different.webp"
        layout="fill"
        objectFit="contain"
        alt="Similarity meme"
      ></Image>
    </div>
  );
}

// TODO Consider having this as well
// function SixthImage({ height }) {
//   return (
//     <div className={styles.images} style={{ height: height }}>
//       <Image
//         className={styles.foundWebsite}
//         src="/images/front-page-memes/strong-zero.webp"
//         layout="fill"
//         objectFit="contain"
//         alt="Zero knowledge meme"
//       ></Image>
//     </div>
//   );
// }

function SixthImage({ height }) {
  return (
    <div className={styles.images} style={{ height: height }}>
      <Image
        className={styles.foundWebsite}
        src="/images/front-page-memes/ibunda.webp"
        layout="fill"
        objectFit="contain"
        alt="Zero knowledge meme"
      ></Image>
    </div>
  );
}

function Discord() {
  return (
    <div className={styles.images} style={{ height: "100px" }}>
      <Image
        className={styles.foundWebsite}
        src="/images/discord-512.webp"
        layout="fill"
        objectFit="contain"
        alt="Discord logo"
      ></Image>
    </div>
  );
}

function WeeGombal() {
  return (
    <div
      className={styles.images}
      style={{
        height: "100px",
        width: "100px",
        borderRadius: "50%",
        overflow: "hidden",
      }}
    >
      <Image
        className={styles.foundWebsite}
        src="/images/weeweegombal.webp"
        layout="fill"
        objectFit="cover"
        alt="Finsta logo"
      ></Image>
    </div>
  );
}
