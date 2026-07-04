import ReactAnimatedWeather from "react-animated-weather";

export default function Weather(props) {
  if (!props.data) {
    return <p>Search for a city 🌍</p>;
  }

  function getIcon(description) {
    if (!description) return "SUNNY";
    if (description.includes("rain")) return "RAIN";
    if (description.includes("cloud")) return "CLOUDY";
    if (description.includes("clear")) return "CLEAR_DAY";
    if (description.includes("wind")) return "WIND";
    if (description.includes("snow")) return "SNOW";
    return "SUNNY";
  }

  return (
    <div>
      <ul>
        <li>Temperature: {Math.round(props.data.temperature)}°C</li>
        <li>Description: {props.data.description}</li>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {Math.round(props.data.wind)} km/h</li>
      </ul>

      <ReactAnimatedWeather
        icon={getIcon(props.data.description)}
        color="black"
        size={64}
        animate={true}
      />
    </div>
  );
}
