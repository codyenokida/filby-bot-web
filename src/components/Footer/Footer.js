import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.blurb}>
        <p>
          Created with{" "}
          <span role="img" aria-label="emoji">
            💛
          </span>
        </p>
        <p>By FILBY Bots</p>
      </div>

      <div className={styles.linksContainer}>
        <a
          href="https://www.instagram.com/cooodes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TWITTER
        </a>
      </div>
    </footer>
  );
};

export default Footer;
