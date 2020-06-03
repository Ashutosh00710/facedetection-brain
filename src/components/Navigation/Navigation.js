import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

const Navigation = ({ currentUser }) => (
  <div>
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      {currentUser ? (
        <div
          className="f5 link dim black underline pa2 pointer"
          to="/"
          onClick={() => auth.signOut()}
        >
          Sign Out
        </div>
      ) : (
        <Link
          to="/register"
          className="f5 link dim black underline pa2 pointer"
        >
          Register
        </Link>
      )}
    </nav>
  </div>
);

export default Navigation;
