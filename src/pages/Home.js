import React from "react";
import styles from "./Home.module.css";
import logo from "../images/logo.png";
import flowers from "../images/flowers.png";
import brain from "../images/brain.png";
import pen from "../images/pen.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png"
import mail from "../images/mail.png"
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <Row className="g-0">
        <Col lg={9}>
          <h1 className={styles.heading}>
            Hi, I’m Alex Choi. I like to make CS creative.
          </h1>
          <p className={styles.subheading}>
            I’m pursuing degrees in both Computer Science and English @ Brown
            University and looking to join in building some of the most
            cutting-edge technology
          </p>
        </Col>
        <Col lg={3}>
          <div className={styles.socialsContainer}>
            <a
              className={styles.socialslink}
              href="https://www.linkedin.com/in/alexander-choi-46a47a204/"
            >
              <div className={styles.circle}>
                <img className={styles.socials} src={linkedin} />
              </div>
            </a>
            <a
              className={styles.socialslink}
              href="https://github.com/abchoi11"
            >
              <div className={styles.circle}>
                <img className={styles.socials} src={github} />
              </div>
            </a>
            <a
              className={styles.socialslink}
              href="mailto:alexander_b_choi@brown.edu"
            >
              <div className={styles.circle}>
                <img className={styles.socials} src={mail} />
              </div>
            </a>
          </div>
        </Col>
      </Row>
      <img className={styles.logo} src={logo} />
      <Row className={styles.links}>
        <Col lg={4}>
          <Link className={styles.link} to="/experience">
            {" "}
            <img className={styles.drawings} src={flowers} />
          </Link>
          <p>
            <Link className={styles.link} to="/experience">
              Experience
            </Link>
          </p>
        </Col>
        <Col lg={4}>
          <Link className={styles.link} to="/projects">
            {" "}
            <img className={styles.drawings} src={brain} />
          </Link>

          <Link className={styles.link} to="/projects">
            Projects
          </Link>
        </Col>
        <Col lg={4}>
          <Link className={styles.link} to="/writing">
            <img className={styles.drawings} src={pen} />
          </Link>
          <Link className={styles.link} to="/writing">
            Writing
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
