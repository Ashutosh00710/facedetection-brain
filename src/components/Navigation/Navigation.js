import React from "react";
import { auth } from "../../firebase/firebase.utils";
import { Link } from "react-router-dom";

const Navigation = ({ currentUser }) => (
  <div>
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      {currentUser ? (
        <div
          className="f5 link dim black underline pa2 pointer"
          onClick={() => auth.signOut()}
        >
          Sign Out
        </div>
      ) : (
        <div>
          <Link
            className="f5 link dim black underline pa3 pointer"
            to="/register"
          >
            Register
          </Link>
          <Link className="f5 link dim black underline pa3 pointer" to="/">
            Home
          </Link>
        </div>
      )}
    </nav>
  </div>
);

export default Navigation;
