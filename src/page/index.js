/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import Header from "./header";

export default () => {
  return (
    <React.StrictMode>
      <Header />
      <main></main>
    </React.StrictMode>
  );
};
