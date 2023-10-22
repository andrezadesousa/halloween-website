import React from "react";
import "./index.css";

export const Title = ({ subtitle, title}) => {
  return (
    <div className="home__titles">
      <h2 className="home__subtitle">{subtitle}</h2>
      <h1 className="home__title">{title}</h1>
    </div>
  );
};
