import React from "react";
import { useParams } from "react-router-dom";

const FormPage = ({ age, onChangeHandle }) => {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { username } = useParams();

  return (
    <div>
      <h3>User: {username}</h3>
      <input type="text" value={age} onChange={onChangeHandle}></input>
      <h4>Age: {age}</h4>
    </div>
  );
};

export default FormPage;
