import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
// import Form from './Form.js';
import JokeGenerator from "./JokeGenerator";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Form /> */}
    <JokeGenerator />
  </React.StrictMode>,
  document.getElementById("root")
);
