import React from "react";
import { NavLink, withRouter } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <NavLink to="/" className="brand-logo">
          Logo
        </NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/ListContact">ListContact</NavLink>
          </li>
          <li>
            <NavLink to="/AddContact">AddContact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Nav);
