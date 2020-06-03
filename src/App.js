import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Particles from "react-particles-js";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import Navigation from "./components/Navigation/Navigation";
import SignInPage from "./pages/SignIn/SignIn";
import RegisterPage from "./pages/Register/Register";
import FaceDetectionPage from "./pages/FaceDetection/face-detection";
import "./App.css";

const particlesOptions = {
  // --> Parameters for particle in background
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation currentUser={this.state.currentUser} />
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              this.state.currentUser ? (
                <Redirect to="/detect" />
              ) : (
                <SignInPage />
              )
            }
          />
          <Route
            path="/register"
            render={() =>
              this.state.currentUser ? (
                <Redirect to="/detect" />
              ) : (
                <RegisterPage />
              )
            }
          />
          <Route
            path="/detect"
            component={() => (
              <FaceDetectionPage currentUser={this.state.currentUser} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
