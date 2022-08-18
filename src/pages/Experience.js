import React, { useEffect } from "react";
import Section from "../components/Experience/Section/Section";
import Header from "../components/Header/Header";
import NavigationBar from "../components/Navbar/NavigtionBar";
import sciquel from "../images/sciquel.png";
import mentors from "../images/mentors.png";
import fs from "../images/fs.png";
import Footer from "../components/Footer/Footer";

function Experience(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavigationBar />
      <Header
        title={"Experience"}
        quote={
          '"To love the glory of virtuous deeds is a sure proof of the love of virtue"'
        }
        author={"Of the Dignity or Meanness of Human Nature | David Hume"}
      />
      <Section
        logo={sciquel}
        title={"Software Engineer Intern"}
        company={"SciQuel"}
        date={"May 2022 - August 2022"}
        description={[
          "Built Home Page and Header dropdown components utilizing React.js and React Bootstrap compatible with internal trending article API",
          "Presented performance reviews in twice-weekly meetings with team of 35 software-engineers/managers",
        ]}
      />
      <Section
        logo={mentors}
        title={"Web Developer"}
        company={"Ivy CS Mentors"}
        date={"May 2022 - June 2022"}
        description={[
          "Led sole responsibility of web-development resulting in $3,000 of customer transactions",
          "Consistently adapted to feedback on UI/UX design for new premium service resulting in an uptick in of 20% in gross profit",
        ]}
      />
      <Section
        logo={fs}
        title={"Software Engineer"}
        company={"Full Stack at Brown"}
        date={"March 2022 - May 2022"}
        description={[
          "Tasked with development of mobile login page paired with Firebase Google and Facebook user authentication",
          "Consistently adapted to feedback from manager on design choices and UI design in team of 6 SWE/managers",
        ]}
        end={true}
      />
      <Footer />
    </div>
  );
}

export default Experience;
