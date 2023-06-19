import React from "react";
import "./SeasonDisplay.css";
import ShowCurrentTime from "./ShowCurrentTime";

const seasonConfig = {
  summer: { text: "Let's hit the beach 🏖️!", iconName: "sun" },
  winter: { text: "Buur, it is chilly 🥶", iconName: "train" },
};

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "summer" : "winter";
  } else {
    return latitude > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <ShowCurrentTime />
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
