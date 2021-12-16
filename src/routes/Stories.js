import React from "react";
import { Outlet } from "react-router-dom";
function Stories() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Stories;
