import React from "react";
import { Outlet } from "react-router";

const CoutryLayout = () => {
  return (
    <div className="country__wrapper">
      <Outlet />
    </div>
  );
};

export default CoutryLayout;
