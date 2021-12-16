import React from "react";
import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="bg-white p-6 text-slate-600 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        <Link to="/">Site Name</Link>
      </h1>
      <nav className="flex gap-6">
        <NavLink
          className={({ isActive }) => (isActive ? "text-purple-600" : "")}
          to="/"
        >
          Home{" "}
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-purple-600" : "")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-purple-600" : "")}
          to="/stories"
        >
          Stories
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-purple-600" : "")}
          to="/profile"
        >
          Profile
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
