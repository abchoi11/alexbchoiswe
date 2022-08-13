import React from "react";
import NavigationBar from "../components/Navbar/NavigtionBar";
import Header from "../components/Header/Header";

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
    </div>
  );
}

export default Projects;
