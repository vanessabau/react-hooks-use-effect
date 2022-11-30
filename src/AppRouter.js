import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import messageContext from "./contexts/messageContext";
import Navbar from "./navbar/index";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About-Page";
import FormPage from "./pages/Form-Page";

function AppRouter() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [age, setAge] = useState(null);
  const [message, setMessage] = useState("I am being shared");

  const onClickHandle = () => {
    setLoggedIn(!loggedIn);
  };

  const onChangeHandle = (e) => {
    setAge(e.target.value);
  };

  return (
    <BrowserRouter>
      <messageContext.Provider value={[message, setMessage]}>
        <Navbar />
        <h3>logged in: {loggedIn.toString()}</h3>
        <button className="login-button" onClick={onClickHandle}>
          {loggedIn ? "logout" : "login"}
        </button>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" exact element={<AboutPage />} />
          <Route
            path="/users/:username"
            element={
              loggedIn ? (
                <FormPage age={age} onChangeHandle={onChangeHandle} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </messageContext.Provider>
    </BrowserRouter>
  );
}

export default AppRouter;
