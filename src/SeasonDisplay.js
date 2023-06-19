import React from "react";

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "Summer" : "winter";
  } else {
    return latitude > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth());
  console.log(season);
  return <div>SeasonDisplay</div>;
};

export default SeasonDisplay;
