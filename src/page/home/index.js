/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import { Title } from "../../components/title";
import { Images } from "../../mock/images";

import ButtonImage from "../../images/button.svg";

export default () => {
  return (
    <section className="home">
      <div className="home__container">
        {Images.map((imagesLink) => {
          return (
            <img
              key={imagesLink.id}
              src={imagesLink.image}
              className={imagesLink.classImage}
              alt="HomeImage"
            />
          );
        })}
        <Title subtitle="TRICK OR TREAT" title="HALLOWEEN" />
      </div>

      <div className="home__data">
        <p className="home__description">
          Halloween is celebrated every October 31 at night, walk through the
          city with your friends and enjoy trick or treating, spend a terrifying
          night under the full moon.
        </p>

        <a href="/" className="home__button">
          <img src={ButtonImage} alt="Button"></img>
          <span>CLICK HERE</span>
        </a>
      </div>
    </section>
  );
};
