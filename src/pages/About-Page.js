import React, { useContext } from "react";
import messageContext from "../contexts/messageContext";
import Outer from "../components/outer";

const AboutPage = () => {
  return (
    <div>
      <h1>Welcome to the about page</h1>
      <h2>Message: {useContext(messageContext)}</h2>
      <Outer></Outer>
    </div>
  );
};
export default AboutPage;
