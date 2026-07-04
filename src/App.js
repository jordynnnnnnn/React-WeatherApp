import "./styles.css";
import { useState } from "react";
import Search from "./Search";
import Weather from "./Weather";
import axios from "axios";

export default function App() {
  let [weather, setWeather] = useState(null);

  function CityForecast(city) {
    let apiKey = "ca3401aa9fo6993fde3bf6t53aa16d30";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(url).then((response) => {
      setWeather({
        temperature: response.data.temperature.current,
        humidity: response.data.temperature.humidity,
        wind: response.data.wind.speed,
        description: response.data.condition.description,
      });
    });
  }

  return (
    <div className="App">
      <h1>🌧️ Weather Search Engine 🌧️</h1>

      <Search onSearch={CityForecast} />

      <Weather data={weather} />
    </div>
  );
}
