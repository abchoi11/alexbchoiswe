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
          "I've chosen to do things for the sake of doing them and take back
          control of my hobbies for the sake of myself."
        </p>
        <a href="">Read More</a>
      </div>
    </div>
  );
}

export default Piece;
