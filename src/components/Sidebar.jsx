import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div
      className="sidebar bg-dark text-white p-3"
      style={{ width: "240px", minHeight: "100vh" }}
    >
      <h3 className="mb-4">Recipe Search</h3>

      <div className="d-flex flex-column gap-3">
        <NavLink to="/" className="sidebar-link">
          Home
        </NavLink>

        <NavLink to="/recipes" className="sidebar-link">
          Recipes
        </NavLink>

        <NavLink to="/favourites" className="sidebar-link">
          Favourites
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
