import React, {useEffect} from "react";
import NavigationBar from "../components/Navbar/NavigtionBar";
import Header from "../components/Header/Header";

function Writing(props) {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
    </div>
  );
}

export default Writing;
