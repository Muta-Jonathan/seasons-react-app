import React from "react";
import { createRoot } from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    return window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay latitude={this.state.lat} />;
    }
    return <Spinner message="Please ' Allow ' Location Request!" />;
  }
}

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
