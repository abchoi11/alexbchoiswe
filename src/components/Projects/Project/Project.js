import React, {useEffect} from "react";
import styles from "./Project.module.css";
import { Container, Row, Col } from "react-bootstrap";
import github from "../../../images/github.png";
import { AiOutlineLink } from "react-icons/ai";

function Project({ title, description, image, techStack, link, git}) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <Row>
          <Col lg={6}>
            <div className={styles.top}>
              <h2 className={styles.title}>{title}</h2>
              <a href={link} target="_blank">
                <AiOutlineLink className={styles.link}/>
              </a>
            </div>
            <ul className={styles.list}>
              {description.map((d) => (
                <li className={styles.bullet}>{d}</li>
              ))}
            </ul>
          </Col>
          <Col lg={6}>
            <img className={styles.image} src={image} />
          </Col>
        </Row>
        <div className={styles.ts}>
          <a href={git} className={styles.repo} target="_blank">
            <img className={styles.github} src={github} />
          </a>
          {techStack.map((t) => (
            <>
              <div className={styles.bubble}>
                <p className={styles.tech}>{t}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
