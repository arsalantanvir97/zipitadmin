import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import App from "./App";
import HttpsRedirect from "react-https-redirect";

import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <Provider store={store}>
    <HttpsRedirect>
      <ToastContainer />
      <App />
    </HttpsRedirect>
  </Provider>,
  document.getElementById("root")
);
