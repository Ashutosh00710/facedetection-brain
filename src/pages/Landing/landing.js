import React from "react";
import Logo from "../../components/Logo/Logo";
import { Link } from "react-router-dom";

const LandingPage = () => (
  <div>
    <h1 className="f1">Welcome to Face Detection Brain</h1>
    <div className="centre mt5">
      <Logo hi="450" wi="450" m="55" />
    </div>
    <div className="f4">
      <Link className="f5 link dim black underline pa2 pointer" to="/signin">
        Sign In
      </Link>{" "}
      or{" "}
      <Link className="f5 link dim black underline pa2 pointer" to="/register">
        Register
      </Link>{" "}
      to try
    </div>
  </div>
);

export default LandingPage;
