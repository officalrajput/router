import React from "react";

import LinkData from "./LinkData";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <LinkData></LinkData>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
