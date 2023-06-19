import React from "react";

class ShowCurrentTime extends React.Component {
  state = { time: new Date().toLocaleTimeString() };

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  render() {
    return <div className="current-time">{this.state.time}</div>;
  }
}

export default ShowCurrentTime;
