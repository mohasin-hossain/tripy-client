import React from "react";
import { plane, money, travel, signup } from "../../assets/index";
import "./Process.css";

const Process = () => {
  return (
    <section className="pb-5 container" id="about">
      <div className="text-center py-5">
        <h3>Things you need to do</h3>
        <p>
          We ensure that you’ll embark on a perfectly planned, safe vacation at
          a price you can afford.{" "}
        </p>
      </div>
      <div className="process-overview gap-5">
        <div>
          <img src={signup} alt="signup" />
          <h6 className="mt-3">SignUp</h6>
          <p>Completes all the work associated with planning and processing</p>
        </div>
        <div>
          <img src={money} alt="money" />
          <h6 className="mt-3">Worth of Money</h6>
          <p>
            After successful access then book from exclusive deals & pricing
          </p>
        </div>
        <div>
          <img src={travel} alt="travel" />
          <h6 className="mt-3">Exciting Travel</h6>
          <p>Start and explore a wide range of exciting travel experience.</p>
        </div>
      </div>
    </section>
  );
};

export default Process;
