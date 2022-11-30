import React, { useContext } from "react";
import messageContext from "../contexts/messageContext";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <h2>Message: {useContext(messageContext)}</h2>
    </div>
  );
};
export default HomePage;
