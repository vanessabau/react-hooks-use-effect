import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    color: "lavenderblush",
  };

  let activeClassName = "active";

  return (
    <div className="navbar">
      <ul id="horizontal-list">
        <li className="li-style">
          <NavLink
            to="/"
            exact="true"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li className="li-style">
          <NavLink
            to="/about"
            exact="true"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            About
          </NavLink>
        </li>
        <li className="li-style">
          <NavLink
            to="/user/john/doe"
            exact="true"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            User John Doe
          </NavLink>
        </li>
        <li className="li-style">
          <NavLink
            to="/users/username"
            exact="true"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            UserPage
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
