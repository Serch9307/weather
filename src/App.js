import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Error from "./components/Error";

function App() {
  // App state
  const [search, updateSearch] = useState({
    city: "",
    country: "",
  });
  const [consult, updateConsult] = useState(false);
  const [weather, updateWeather] = useState({});
  const [error, updateError] = useState(false);

  const { country, city } = search;

  const consultAPI = async () => {
    const appId = "35ccc859f4088dba7c2a2197c553dae3";
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city},${country}&appid=${appId}`;

    const answer = await fetch(url);
    const result = await answer.json();
    //validate if not found consult
    updateError(result.cod === "404");
    updateWeather(result);
    updateConsult(false);
  };

  useEffect(() => {
    if (consult) {
      consultAPI();
    }
    // eslint-disable-next-line
  }, [consult]);

  let component;
  if (error) {
    component = <Error message="Not found information" />;
  } else {
    component = <Weather weather={weather} />;
  }

  return (
    <Fragment>
      <Header title="React Weather App"></Header>
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                updateSearch={updateSearch}
                updateConsult={updateConsult}
              />
            </div>
            <div className="col m6 s12">{component}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
