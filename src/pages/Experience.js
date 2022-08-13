import React from "react";
import Section from "../components/Experience/Section/Section";
import Header from "../components/Header/Header";
import NavigationBar from "../components/Navbar/NavigtionBar";
import sciquel from "../images/sciquel.png";
import mentors from "../images/mentors.png";
import fs from "../images/fs.png";

function Experience(props) {
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
          "SciQuel is a startup from the Harvard Innovation Lab that aims to make scientific journals more accessible",
          "Built high-usage and responsive components utilizing React.js and React Bootstrap with internal trending API",
          "Facilitated with a team of thirty-five web-developers in group discussions and development",
        ]}
      />
      <Section
        logo={mentors}
        title={"Web Developer"}
        company={"Ivy CS Mentors"}
        date={"May 2022 - June 2022"}
        description={[
          "SciQuel is a startup from the Harvard Innovation Lab that aims to make scientific journals more accessible",
          "Built high-usage and responsive components utilizing React.js and React Bootstrap with internal trending API",
          "Facilitated with a team of thirty-five web-developers in group discussions and development",
        ]}
      />
      <Section
        logo={fs}
        title={"Software Engineer"}
        company={"Full Stack at Brown"}
        date={"March 2022 - May 2022"}
        description={[
          "SciQuel is a startup from the Harvard Innovation Lab that aims to make scientific journals more accessible",
          "Built high-usage and responsive components utilizing React.js and React Bootstrap with internal trending API",
          "Facilitated with a team of thirty-five web-developers in group discussions and development",
        ]}
        end={true}
      />
    </div>
  );
}

export default Experience;
