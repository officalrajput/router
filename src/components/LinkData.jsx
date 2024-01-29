import React from "react";
import { NavLink } from "react-router-dom";

const LinkData = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            {" "}
            <NavLink to="/">Home</NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink to="/About">About</NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink to="/Contact">Contact</NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink to="/Live">Live</NavLink>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LinkData;
