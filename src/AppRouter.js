import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useParams,
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
  return (
    <BrowserRouter>
      <div className="navbar">
        <ul id="horizontal-list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/users/:username">UserPage</NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about" exact element={<AboutPage />} />
        <Route path="/users/:username" element={<Child />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
