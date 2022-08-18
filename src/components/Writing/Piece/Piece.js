import React from "react";
import styles from "./Piece.module.css";

function Piece({title, image, genre, publication, quote, link}) {
  return (
    <div className={styles.main}>
      <img className={styles.image} src={image} />
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <p>{genre} | {publication}</p>
        <p>
          {quote}
        </p>
        <a href={link} target="_blank">Read More</a>
      </div>
    </div>
  );
}

export default Piece;
