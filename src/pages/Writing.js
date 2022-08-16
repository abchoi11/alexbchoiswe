import React, { useEffect } from "react";
import styles from "./Writing.module.css";
import NavigationBar from "../components/Navbar/NavigtionBar";
import Header from "../components/Header/Header";
import Piece from "../components/Writing/Piece/Piece";
import { Container, Row, Col } from "react-bootstrap";
import hobby from '../images/hobby.png'
import scallion from '../images/scallion.jpg'
import meditate from '../images/meditate.jpg'
import apollo from '../images/apollo.jpg'
import Footer from "../components/Footer/Footer";

function Writing(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavigationBar />
      <Header
        title={"Writing"}
        quote={
          '"Words mean more than what is set down on paper. It takes the human voice to infuse them with the shades of deeper meaning"'
        }
        author={"I Know Why The Caged Bird Sings | Maya Angelou"}
      />
      <Container>
        <Row>
          <Col lg={4}>
            <Piece
              title={"From Hobby to Side Hustle"}
              genre={"Narrative"}
              publication={"Brown Univ. post- Magazine"}
              image={hobby}
            />
          </Col>
          <Col lg={4}>
            <Piece
              title={"Scallion Pancakes"}
              genre={"Poetry"}
              publication={"elementia"}
              image={scallion}
            />
          </Col>
          <Col lg={4}>
            <Piece
              title={"cry me to nirvana"}
              genre={"Poetry"}
              publication={"Cathartic Youth Literary Magazine"}
              image={meditate}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Piece
              title={"Apollo"}
              genre={"Poetry"}
              publication={"Cathartic Youth Literary Magazine"}
              image={apollo}
            />
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

export default Writing;
