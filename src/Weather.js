import React from "react";

import "./Weather.css";

export default function Weather() {
  let WeatherData = {
    city: "Rouen",
    description: "Clear Sky",
    humidity: 18,
    windspeed: 13,
    imgURL: "https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
  };

  return (
    <div className="Weather">
      <div className="search-form">
        <form className="search">
          <div className="row">
            <div className="col-md-auto">
              <input
                type="search"
                placeholder="Search city..."
                autofocus="on"
                autocomplete="off"
              />
            </div>
            <div className="col-md-auto">
              <div className="row">
                <div className="col-2">
                  <input type="submit" value="🔎" className="searchbutton" />
                </div>
              </div>
            </div>
            <div className="col-md-auto">
              <button className="currentlocationbutton">
                Current location
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="row">
        <div className="temperature">
          <div className="col-12">
            <div className="row">
              <div className="col-2 col-sm-2">
                <img
                  src={WeatherData.imgURL}
                  className="main-emoji"
                  alt={WeatherData.description}
                />
              </div>
              <div className="col-4 col-sm-8">
                <div className="main-data">
                  <div className="row">
                    <div className="col-sm-1">
                      <h1>8</h1>
                    </div>
                    <div className="col-sm">
                      <a href="/" className="">
                        °F /
                      </a>
                      <a href="/" className="active">
                        / °C
                      </a>
                    </div>
                  </div>

                  <ul className="elements">
                    <li>{WeatherData.city}</li>
                    <li className="description">{WeatherData.description}</li>
                    <li>Humidity: {WeatherData.humidity}%</li>
                    <li>Wind: {WeatherData.windspeed}km/h</li>
                  </ul>
                </div>
              </div>
            </div>
            <h2 className="col-2 col-sm-10">
              <div className="location"></div>
              <div className="date"></div>
            </h2>
          </div>
        </div>
      </div>

      <div className="forecast"></div>
      <small>
        {" "}
        <a
          href="https://github.com/morozovanya/react-weather"
          className="developerLink"
        >
          Open-source code
        </a>{" "}
        by Anna Morozova
      </small>
    </div>
  );
}
