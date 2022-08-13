import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./Navbar.module.css"
import signature from "../../images/signature.png"

function NavigationBar(props) {
  return (
    <div className={styles.nav}>
      <Navbar collapseOnSelect expand="lg" >
        <Container>
          <Navbar.Brand>
            <Link className={styles.home} to="/">
              <img className={styles.signature} src={signature} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className={styles.link} to="/experience">Experience</Link>
              <Link className={styles.link} to="/projects">Projects</Link>
              <Link  className={styles.link} to="/writing">Writing</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
}

export default NavigationBar;
