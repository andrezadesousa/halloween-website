/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import "./index.css";

import { NavLink } from "../../components/navLink";

export default () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          Halloween
        </a>

        <div className={`nav__menu ${showLinks ? "active" : "inactive"}`} id="nav-menu">
          <ul className="nav__list" onClick={()=>{setShowLinks(!showLinks)}}>
            <NavLink link="#home" title="Home" />
            <NavLink link="#about" title="About Us" />
            <NavLink link="#portfolio" title="Portfolio" />
            <NavLink link="#contact" title="Contact Us" />
          </ul>

          <div onClick={()=>{setShowLinks(!showLinks)}} className="nav__close" id="nav-close">
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div onClick={()=>{setShowLinks(!showLinks)}} className="nav__toggle" id="nav-toggle">
          <i className="ri-apps-2-line"></i>
        </div>
      </nav>
    </header>
  );
};
