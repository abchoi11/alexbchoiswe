import React from "react";
import NavigationBar from "../components/Navbar/NavigtionBar";
import Header from "../components/Header/Header";
import Project from "../components/Projects/Project/Project";
import ps from "../images/pick-six.png";
import bot from "../images/bot.png";
import bdb from "../images/bdb.png";
import shot from "../images/shot.png";
import personal from "../images/personal.png";
import seam from "../images/seam.png";
import decision from "../images/decision.png";
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
        title={"Big Data Bowl 2023"}
        description={[
          "Calculated a self-correcting comparative elo model for analyzing both offensive and defensive lineman performance -- analyzed over 350,000 matchups",
          "Developed spatial classification model that outputs probability of sacks, hurries, and hits based on positional input",
        ]}
        image={bdb}
        techStack={[
          "Python",
          "TensorFlow",
          "Pandas",
          "Git/Github",
        ]}
        link={"https://www.kaggle.com/code/alexchoi11/pushing-the-line-analyzing-individual-linemen#3.-Formation-and-Spatial-Model-"}
        git={"https://github.com/abchoi11/Big-Data-Bowl-2023"}
      />
      <Project
        title={"Art of the Shot"}
        description={[
          "Utilized MediaPipe pose estimation model in order to extract bodily coordinates and calculate real-time angle measurements",
          "Created normalized model of “optimal” shot performance by averaging 15 NBA players shot form and bounding for variance",
          "Calculated real-time and post-processed graphs with  Matplotlib and Seaborn in order to compare user’s shot to preprocessed model",
        ]}
        image={shot}
        techStack={["Python", "Numpy", "MediaPipe", "Seaborn", "Git/Github"]}
      />
      <Project
        title={"Bruno on Track"}
        description={[
          "Developed Java serializing server with Spark in order to filter courses and update requirements logic system",
          "Spearheaded interactive TypeScript-React front-end coupled with both Firebase Google authentication and Firestore database in order to create, store and load user data on login",
        ]}
        image={bot}
        techStack={[
          "Java",
          "Spark",
          "TypeScript",
          "Firebase",
          "React.ts",
          "Bootstrap",
          "Figma",
          "Git/Github",
        ]}
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
        title={"Seam Carver"}
        description={[
          "Generated DP algorithm to find and remove the ’least important seams’ to resize images dynamically",
        ]}
        image={seam}
        techStack={["Python", "numpy"]}
      />
      <Project
        title={"Decision Tree"}
        description={[
          "Developed recursive algorithm to generate Decision Tree with Object-Oriented-Design in Java",
          "Trained decision tree with CSV files — able to then generate a 99.7% data set accuracy",
        ]}
        image={decision}
        techStack={["Java"]}
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
