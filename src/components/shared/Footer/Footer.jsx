import React from "react";
import { logo } from "../../../assets/index";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="mt-5 p-4">
        <hr />
        <img src={logo} alt="" />
    </footer>
  );
};

export default Footer;
