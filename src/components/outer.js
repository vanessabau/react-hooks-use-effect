import React, { useContext } from "react";
import messageContext from "../contexts/messageContext";

import Inner from "./inner";
const Outer = () => {
  return (
    <>
      <h3>Outer: {useContext(messageContext)[0]}</h3>
      <Inner></Inner>
    </>
  );
};

export default Outer;
