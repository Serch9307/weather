import React from "react";
import PropTypes from "prop-types";

const Weather = ({ weather }) => {
  // extract the values
  const { name, main } = weather;
  if (main === undefined || main.temp === undefined) return null;

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>The weather of {name} is:</h2>
        <p className="temperatura">
          {main.temp} <span> &#x2103; </span>
        </p>
        <p>
          Maximum Temperature:
          {main.temp_max} <span> &#x2103; </span>
        </p>
        <p>
          Minimum Temperature:
          {main.temp_min} <span> &#x2103; </span>
        </p>
      </div>
    </div>
  );
};

Weather.propTypes = {
  weather: PropTypes.object.isRequired,
};

export default Weather;
