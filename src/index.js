import React from "react";
import "./styles.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
);
