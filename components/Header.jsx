// Thank you to Ibadehin Mojeed of LogRocket for the code guide for multilevel
// dropdown menu
// (https://blog.logrocket.com/creating-multilevel-dropdown-menu-react/).

import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  {
    name: "About Us",
    path: "/about",
    className: "",
  },
  { name: "Articles", path: "/articles", className: "articles" },
  {
    name: "Newsletter!",
    path: "/newsletter",
    className: styles.newsletter,
  },
  {
    name: "Indo Politics 101",
    path: "/indo-politics-101",
    className: "",
  },
  {
    name: "Wiuipedia",
    path: "/wiuipedia",
    className: styles.wiuipedia,
  },
  {
    name: "Party Profiles",
    path: "/party-profiles",
    className: "",
  },
  {
    name: "Wuiboos Corner",
    path: "#wuiboos-corner",
    className: styles.wuiboosCorner,
  },
];

const navLinksNarrow = [
  {
    name: "About Us",
    path: "/about",
    className: "",
  },
  {
    name: "Contents",
    path: "wuiboos-corner",
    className: styles.wuiboosCorner,
    submenu: [
      { name: "Articles", path: "/articles", className: "articles" },
      {
        name: "Newsletter!",
        path: "/newsletter",
        className: styles.newsletter,
      },
      {
        name: "Indo Politics 101",
        path: "/indo-politics-101",
        className: "",
      },
      {
        name: "wiuipedia",
        path: "/wiuipedia",
        className: styles.wiuipedia,
      },
      {
        name: "Party Profiles",
        path: "/party-profiles",
        className: "",
      },
    ],
  },
  {
    name: "Wuiboos Corner",
    path: "#wuiboos-corner",
    className: styles.wuiboosCorner,
  },
];

const navLinksMobile = [
  {
    name: "",
    path: "",
    className: "",
    submenu: [
      {
        name: "About Us",
        path: "/about",
        className: "",
      },
      { name: "Articles", path: "/articles", className: "articles" },
      {
        name: "Newsletter!",
        path: "/newsletter",
        className: styles.newsletter,
      },
      {
        name: "Indo Politics 101",
        path: "/indo-politics-101",
        className: "",
      },
      {
        name: "Wiuipedia",
        path: "/wiuipedia",
        className: styles.wiuipedia,
      },
      {
        name: "Party Profiles",
        path: "/party-profiles",
        className: "",
      },
      {
        name: "Wuiboos Corner",
        path: "#wuiboos-corner",
        className: styles.wuiboosCorner,
      },
    ],
  },
];

const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul className={`${styles.dropdown} ${dropdown ? styles.show : ""}`}>
      {submenus.map((submenu, index) => (
        <li key={index} className={submenu.className}>
          <Link href={submenu.path}>
            <a>{submenu.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
const MobileDropdown = ({ submenus, dropdown }) => {
  return (
    <ul
      className={`${styles.mobileDropdown} ${
        dropdown ? styles.mobileShow : ""
      }`}
    >
      {submenus.map((submenu, index) => (
        <li key={index} className={submenu.className}>
          <Link href={submenu.path}>
            <a>{submenu.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

function MainLogo(props) {
  return (
    <Link href="./">
      <Image
        className={styles.logo}
        src="/images/wiui-main.webp"
        layout="fixed"
        width={props.width}
        height={props.height}
        alt="WIUI's main logo"
      ></Image>
    </Link>
  );
}

export default function Header() {
  const [narrow, setNarrow] = useState(undefined);
  const [mobile, setMobile] = useState(undefined);
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResponsive() {
        // Set window width/height to state
        setNarrow(window.matchMedia("(min-width: 1200px)").matches);
        setMobile(window.matchMedia("(min-width: 600px)").matches);
      }

      // Add event listener
      window.addEventListener("resize", handleResponsive);

      // Call handler right away so state gets updated with initial window size
      handleResponsive();

      const handler = (event) => {
        if (dropdown && ref.current && !ref.current.contains(event.target)) {
          setDropdown(false);
        }
      };
      document.addEventListener("mousedown", handler);
      document.addEventListener("touchstart", handler);

      // Remove event listener on cleanup
      return () => {
        window.removeEventListener("resize", handleResponsive);
        document.removeEventListener("mousedown", handler);
        document.removeEventListener("touchstart", handler);
      };
    }
  }, [dropdown]);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <MainLogo
          className={styles.logoContainer}
          width={50}
          height={50}
        ></MainLogo>
        <nav className={styles.navBar}>
          {narrow &&
            mobile &&
            navLinks.map((link, index) => {
              return (
                <ul key={index}>
                  <Link href={link.path}>
                    <li className={link.className}>
                      <a>{link.name}</a>
                    </li>
                  </Link>
                </ul>
              );
            })}
          {!narrow &&
            mobile &&
            navLinksNarrow.map((link, index) => {
              return (
                <ul key={index}>
                  {link.submenu ? (
                    <li ref={ref}>
                      <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}
                      >
                        <a>
                          {link.name}
                          {" ▾"}
                        </a>
                      </button>
                      <Dropdown submenus={link.submenu} dropdown={dropdown} />
                    </li>
                  ) : (
                    <Link href={link.path}>
                      <li className={link.className}>
                        <a>{link.name}</a>
                      </li>
                    </Link>
                  )}
                </ul>
              );
            })}
          {!narrow &&
            !mobile &&
            navLinksMobile.map((link, index) => {
              return (
                <ul key={index}>
                  {link.submenu ? (
                    <li ref={ref}>
                      <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}
                        style={{padding: "0", cursor: "pointer"}}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                        >
                          <g fill="var(--color-default)">
                            <path d="M8 14h7a1 1 0 000-2H8a1 1 0 000 2zM1 4h14a1 1 0 000-2H1a1 1 0 000 2zM1 9h14a1 1 0 000-2H1a1 1 0 000 2z"></path>
                          </g>
                        </svg>
                      </button>
                      <MobileDropdown
                        submenus={link.submenu}
                        dropdown={dropdown}
                      />
                    </li>
                  ) : (
                    <Link href={link.path}>
                      <li className={link.className}>
                        <a>{link.name}</a>
                      </li>
                    </Link>
                  )}
                </ul>
              );
            })}
        </nav>
      </div>
    </div>
  );
}
