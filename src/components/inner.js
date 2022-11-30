import React, { useContext } from "react";
import messageContext from "../contexts/messageContext";

const Inner = () => {
  const [message, setMessage] = useContext(messageContext);
  return (
    <>
      <h4>Inner: </h4>
      <button onClick={() => setMessage(Math.random().toString())}>
        Change Message
      </button>
    </>
  );
};

export default Inner;
