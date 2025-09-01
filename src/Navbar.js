import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss"

function Navbar() {
  return (
    <div className="navbar-container">
      <ul className="tab-container">
        <li className="tab">
          <Link to="/">Home</Link>
        </li>
        <li className="tab">
          <Link to="/forecast">Forecast</Link>
        </li>
        <li className="tab">
          <Link to="/radar">Radar</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
