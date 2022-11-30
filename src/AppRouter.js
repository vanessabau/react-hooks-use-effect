import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useParams,
  Navigate,
} from "react-router-dom";
//import Navbar from "./navbar/index";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About-Page";

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { username } = useParams();

  return (
    <div>
      <h3>User: {username}</h3>
    </div>
  );
}

function AppRouter() {
  const [loggedIn, setLoggedIn] = useState(false);
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    textDecoration: "underline",
    color: "lavenderblush",
  };

  let activeClassName = "underline";

  const onClickHandle = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <BrowserRouter>
      <div className="navbar">
        <ul id="horizontal-list">
          <li>
            <NavLink
              to="/"
              exact="true"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              exact="true"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/john/doe"
              exact="true"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              User John Doe
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users/:username"
              exact="true"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              UserPage
            </NavLink>
          </li>
        </ul>
      </div>
      <h3>logged in: {loggedIn.toString()}</h3>
      <button onClick={onClickHandle}>{loggedIn ? "logout" : "login"}</button>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about" exact element={<AboutPage />} />
        <Route
          path="/users/:username"
          element={loggedIn ? <Child /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
