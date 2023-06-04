import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import ScrollTop from "../Shared/ScrollTop";

const Main = () => {
  return (
    <div>
      <ScrollTop />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
