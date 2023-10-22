import React from "react";
import "./index.css";

export const NavLink = ({link, title}) => {
  return (
    <li className="nav__item">
      <a href={link} className="nav__link">
        {title}
      </a>
    </li>
  );
};
