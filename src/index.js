import React from "react";
import ReactDOM from "react-dom";
import { App } from "./container/App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./styles/style.css"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.render(
  <Provider store={store }>
    <App />
  </Provider>,
  document.getElementById("root")
);
