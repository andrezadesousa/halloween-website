/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import { Title } from "../../components/title";

import PointImage from "../../images/home-point.png";
import ShadowImage from "../../images/home-shadow.png";
import MoonImage from "../../images/home-moon.png";
import TreesImage from "../../images/home-trees.png";
import PumpkinImage from "../../images/home-pumpkin.png";
import StonesImage from "../../images/home-stones.png";
import GrassImage from "../../images/home-grass.png";

import { Images } from "../../mock/images";

import ButtonImage from "../../images/button.svg";

export default () => {
  return (
    <section className="home">
      <div className="home__container">
        {/*{Images.map((imagesLink) => {
          return (
            <img
              key={imagesLink.id}
              src={imagesLink.image}
              className={imagesLink.classImage}
              alt="HomeImage"
            ></img>
          );
        })}
        */}
        <img src={PointImage} alt="homeImage" className="home__points"></img>
        <img src={ShadowImage} alt="homeImage" className="home__shadow"></img>
        <img src={MoonImage} alt="homeImage" className="home__moon"></img>
        <img src={TreesImage} alt="homeImage" className="home__tree"></img>
        <img src={PumpkinImage} alt="homeImage" className="home__pumpkin"></img>
        <img src={StonesImage} alt="homeImage" className="home__stone"></img>
        <img src={GrassImage} alt="homeImage" className="home__grass"></img>
  
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
