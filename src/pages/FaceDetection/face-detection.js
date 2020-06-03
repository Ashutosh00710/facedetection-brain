import React, { Component } from "react";
import Clarifai from "clarifai";

import Logo from "../../components/Logo/Logo";
import FaceRecognition from "../../components/FaceRecognition/FaceRecognition";
import ImageLinkForm from "../../components/ImageLinkForm/ImageLinkForm";
import Rank from "../../components/Rank/Rank";

const app = new Clarifai.App({
  apiKey: "381f39cddaa04d4c9b6281bda1006169", // --> Unique API key
});

class FaceDetectionPage extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      imageUrl: "",
      box: {},
    };
  }

  displayFacebox = (box) => {
    console.log(box);
    this.setState({ box: box });
  };

  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) => {
        this.displayFacebox(this.calculateFaceLocation(response));
      })
      .catch((err) => console.log(err));
  };

  render() {
    return this.props.currentUser ? (
      <div>
        <Logo />
        <Rank name={this.props.currentUser.displayName} />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
    ) : null;
  }
}

export default FaceDetectionPage;
