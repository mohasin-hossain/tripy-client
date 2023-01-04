import React from "react";
import { hiking, kayaking, sailing, skiing } from "../../assets/index";
import './Activities.css';

const Activities = () => {
  return (
    <div id="activities" className="container mt-5">
      <h3 className="mb-5 text-center">Activities For Everyone</h3>
      <div className="activities">
        <div className="activities-item">
          <img src={hiking} alt="Hiking" />
          <h3>Hiking</h3>
        </div>
        <div className="activities-item">
          <img src={kayaking} alt="Kayaking" />
          <h3>Kayaking</h3>
        </div>
        <div className="activities-item">
          <img src={sailing} alt="Sailing" />
          <h3>Sailing</h3>
        </div>
        <div className="activities-item">
          <img src={skiing} alt="Skiing" />
          <h3>Skiing</h3>
        </div>
      </div>
    </div>
  );
};

export default Activities;
