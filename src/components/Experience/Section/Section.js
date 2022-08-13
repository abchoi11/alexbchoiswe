import React from "react";
import styles from "./Section.module.css";
import { Container, Row, Col } from "react-bootstrap";
import sciquel from "../../../images/sciquel.png";

function Section({ logo, title, company, date, description, end}) {

  const line = end ? null : <div className={styles.line}></div>
    
  return (
    <Container>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.circle}>
            <img className={styles.logo} src={logo} />
          </div>
          {line}
        </div>
        <div className={styles.right}>
          <h2>{title}</h2>
          <h4>{company}</h4>
          <h4>{date}</h4>
          <ul className={styles.list}>
            {description.map((d) => (
              <li className={styles.bullet}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default Section;
