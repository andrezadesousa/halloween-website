/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import Header from "./header";
import Home from "./home";

export default () => {
  return (
    <React.StrictMode>
      <Header />
      <main className="main">
        <Home />
      </main>
    </React.StrictMode>
  );
};
