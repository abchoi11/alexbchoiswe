import React from "react";
import NavigationBar from "../components/Navbar/NavigtionBar";
import Header from "../components/Header/Header";
import Project from "../components/Projects/Project/Project";
import ps from "../images/pick-six.png"
import personal from "../images/personal.png"
import tetris from "../images/tetris.png"

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
          "SciQuel is a startup from the Harvard Innovation Lab that aims to make scientific journals more accessible",
          "Built high-usage and responsive components utilizing React.js and React Bootstrap with internal trending API",
          "Facilitated with a team of thirty-five web-developers in group discussions and development",
        ]}
        image={ps}
        techStack={["React.js", "React Boostrap", "Python","TensorFlow", "Figma", "Twitter API", "Git/Github", "Firebase"]}
        link={"https://pick-six-ai.web.app/"}
        git={"https://github.com/AskSid/pick-six-ai"}
      />
      <Project
        title={"Personal Portfolio"}
        description={[
          "SciQuel is a startup from the Harvard Innovation Lab that aims to make scientific journals more accessible",
          "Built high-usage and responsive components utilizing React.js and React Bootstrap with internal trending API",
          "Facilitated with a team of thirty-five web-developers in group discussions and development",
        ]}
        image={personal}
        techStack={["React.js", "React Boostrap", "Figma", "Git/Github", "Firebase"]}
        git="https://github.com/abchoi11/alexbchoiswe"
      />
      <Project
        title={"Tetris"}
        description={[
          "SciQuel is a startup from the Harvard Innovation Lab that aims to make scientific journals more accessible",
          "Built high-usage and responsive components utilizing React.js and React Bootstrap with internal trending API",
          "Facilitated with a team of thirty-five web-developers in group discussions and development",
        ]}
        image={tetris}
        techStack={["Java", "JavaFx", "Git/Github"]}
      />
    </div>
  );
}

export default Projects;
