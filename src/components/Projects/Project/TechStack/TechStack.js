import React from "react";
import styles from "./TechStack.module.css";

function TechStack(techStack) {
  return (
    <div className={styles.main}>
      {/* {techStack.map((t) => (
        <>
          <div className={styles.bubble}>
            <p className={styles.tech}>{t}</p>
          </div>
        </>
      ))} */}
      <p>{techStack[1]}</p>
      {console.log(techStack)}
    </div>
  );
}

export default TechStack;
