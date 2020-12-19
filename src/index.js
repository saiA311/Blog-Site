import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./component/App.jsx";
import { StateProvider } from "./component/contextapi";
import { initialState, reducer } from "./component/reducer";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
