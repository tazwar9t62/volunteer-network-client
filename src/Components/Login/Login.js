import React, { useContext } from "react";
import { UserContext } from "../../App";
import firebaseConfig from "./firebase.config";
import * as firebase from "firebase/app";
import "firebase/auth";
import "./Login.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import Header from "../Header/Header";

const LogIn = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signInUser = { name: displayName, email };
        setLoggedInUser(signInUser);
        history.replace(from);
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <Header />
      <Link to="/">
        <div style={{ textAlign: "center" }}>
          <img
            style={{ width: "300px" }}
            src="https://i.ibb.co/zR4wpY3/Group-1329.png"
            alt=""
          />
        </div>
      </Link>
      <div className="log-in shadow">
        <div style={{}} className="button">
          <img
            style={{ width: "25px" }}
            className="mr-5 ml-1"
            src="https://www.iconfinder.com/data/icons/social-media-2210/24/Google-512.png"
            alt="google logo"
          />
          <button className="googleButton" onClick={handleGoogleSignIn}>
            Continue with Google
          </button>
        </div>
        <p className="text-center" style={{ marginTop: "-10rem" }}>
          Don’t have an account?{" "}
          <span className="text-primary">Create an account</span>
        </p>
      </div>
    </>
  );
};

export default LogIn;
