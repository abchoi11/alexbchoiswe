import React from "react";
import NavigationBar from "../components/Navbar/NavigtionBar";
import Header from "../components/Header/Header";
import Project from "../components/Projects/Project/Project";
import ps from "../images/pick-six.png";
import personal from "../images/personal.png";
import tetris from "../images/tetris.png";
import Footer from "../components/Footer/Footer";

function Projects(props) {
  return (
    <div>
      <NavigationBar />
      <Header
        title={"Projects"}
        quote={
          '"Our responsibility begins with the power to imagine… Where there’s no power to imagine there’s no responsibility that can arise"'
        }
        author={"Kafka on the Shore | Haruki Murakami"}
      />
      <Project
        title={"Pick Six AI"}
        description={[
          "Built and trained machine learning neural network to rank 500+ players positionally and overall based on regression model",
          "Developed multi-page UI/UX design in Figma and constructed complete interactive frontend in React.js and React Bootstrap",
          "Integrated the Twitter API in order to automate the documentation and filter over 500+ player updates/statistics from relevant news sources",
        ]}
        image={ps}
        techStack={[
          "React.js",
          "React Boostrap",
          "Python",
          "TensorFlow",
          "Figma",
          "Twitter API",
          "Git/Github",
          "Firebase",
        ]}
        link={"https://pick-six-ai.web.app/"}
        git={"https://github.com/AskSid/pick-six-ai"}
      />
      <Project
        title={"Personal Portfolio"}
        description={[
          "Designed multi-page UI/UX design in Figma and graphically illustrated images in ProCreate",
          "Implemented said design for a scalable, interactive front-end in React.js ",
        ]}
        image={personal}
        techStack={[
          "React.js",
          "React Boostrap",
          "Figma",
          "Git/Github",
          "Firebase",
        ]}
        git="https://github.com/abchoi11/alexbchoiswe"
      />
      <Project
        title={"Tetris"}
        description={[
          "Coded a fully functional Tetris program via Object-Oriented-Design in Java",
          "Game includes moment-by-moment piece checking, advanced row-clearing algorithm with T-Spins, and three modes of difficulty",
        ]}
        image={tetris}
        techStack={["Java", "JavaFx", "Git/Github"]}
      />
      <Footer />
    </div>
  );
}

export default Projects;
