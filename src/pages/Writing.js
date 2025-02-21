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
import aapi from '../images/aapi.png'
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
              quote={"I’ve chosen to do things for the sake of doing them and take back control of my hobbies for the sake of myself. \""}
              link={"https://www.browndailyherald.com/article/2022/03/hobby-choi"}
            />
          </Col>
          <Col lg={4}>
            <Piece
              title={"파전 (pajeon)"}
              genre={"Poetry"}
              publication={"elementia"}
              image={scallion}
              quote={"\"the tiredness of my bones seeps into the tissue of my marrow\""}
              link={"https://www.jocolibrary.org/teens/elementia/article/pajeon-pajeon"}
            />
          </Col>
          <Col lg={4}>
            <Piece
              title={"cry me to nirvana"}
              genre={"Poetry"}
              publication={"Cathartic Youth Literary Magazine"}
              image={meditate}
              quote={"\"fields of a darkened sorrow \n i reap nonetheless \n for there’s no grain \n that is truly bountiful forever \""}
              link={"https://www.catharticlitmagazine.com/magazine/cry-me-to-nirvana-by-alex-choi-18-virginia"}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Piece
              title={"apollo"}
              genre={"Poetry"}
              publication={"Cathartic Youth Literary Magazine"}
              image={apollo}
              quote={"\"pull on my heart like guitar strings just make sure the melody is as sweet as your touch \""}
              link={"https://www.catharticlitmagazine.com/magazine/apollo-by-alex-choi-18-virginia"}
            />
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

export default Writing;
