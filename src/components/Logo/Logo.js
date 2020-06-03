import React from "react";
import Tilt from "react-tilt";
import "./logo.css";
import brain from "./boooo.png";

const Logo = ({ m, ht, wi }) => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: Number(m) }} //55
        style={{ height: Number(ht), width: Number(wi) }} //150
      >
        <div className="Tilt-inner">
          <img alt="logo" src={brain} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
