import React from "react";
import styles from "./Header.module.css";

function Header({ title, quote, author }) {
  return (
    
    <div className={styles.main}>
      <h1 className={styles.heading}>{title}</h1>
      <p className={styles.quote}> {quote}</p>
      <p className={styles.quote}>{author}</p>
    </div>
  );
}

export default Header;
