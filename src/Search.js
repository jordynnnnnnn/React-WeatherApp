import React, { useState } from "react";

export default function Search(props) {
  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.onSearch(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a city.." onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );
}
