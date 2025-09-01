import React from "react";
import "./Radar.scss";

function Radar() {
  return (
    <div className="radar-container">
      <h1>Radar</h1>
      <iframe src="https://embed.windy.com/embed2.html?lat=39.5&lon=-98.35&zoom=4&level=surface&overlay=radar"></iframe>
    </div>
  );
}

export default Radar;
