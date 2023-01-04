import React from "react";
import {banner} from "../../assets/index";
import './Banner.css'

const Banner = () => {
  return (
    <div id="home" className="banner container">
      <div className="banner-text">
        <h1>Get started your exciting journey with us.</h1>
        <p>
          A Team of experienced tourism professionals will provide you with the
          best advice and tips for your desire place.{" "}
        </p>
        <button className="btn btn-outline-success">Discover now</button>
      </div>
      <div>
        <img src={banner} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
