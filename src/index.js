import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Weather from "./Weather";
import Search from "./Search";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
