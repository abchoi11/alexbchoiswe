import React, { useEffect } from "react";
import Section from "../components/Experience/Section/Section";
import Header from "../components/Header/Header";
import NavigationBar from "../components/Navbar/NavigtionBar";
import capitalone from "../images/capitalone.png"
import brightspot from "../images/brightspot.png";
import brown from "../images/brown.png";
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
        logo={capitalone}
        title={"Software Engineer Intern"}
        company={"Capital One"}
        date={"May 2024 - August 2024"}
        description={[
          "Developed a full-stack application via a Jenkins pipeline that serves over 200 associates by consolidating project information into a single interface and reducing on-boarding efforts by 25\%",
          "Created Node.js REST API with Postman and Insomnia API build tools to authenticate proper validation and permission handling that fetches, updates, and creates company data via AWS Aurora SQL Database",
          "Developed dynamic micro-frontend using Vue and Vuex, incorporating real-time design changes, and  integrated it with the Node.js back-end API capable of handling high-volume of concurrent requests"
        ]}
      />
      <Section
        logo={brightspot}
        title={"Software Engineer Intern"}
        company={"Brightspot"}
        date={"May 2023 - August 2023"}
        description={[
          "Utilized Java framework and Docker to deliver client-facing CMS service for Brigham Young University networks",
          "Responded and resolved real time bug tickets for CMS that supports over 36,000 users on a daily basis across 900 sites",
        ]}
      />
      <Section
        logo={brown}
        title={"Undergraduate Teaching Assistant"}
        company={"Brown University"}
        date={"January 2023 - January 2025"}
        description={[
          "Created lecture slides visualizing how the RANSAC algorithm bounds in multidimensional spaces and how it applies to image reconstruction",
          "Implemented a RANSAC algorithm visualizer to allow 150+ students to be able to monitor their camera geometry estimation of the fundamental matrix",
        ]}
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
        date={"March 2022 - December 2022"}
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
