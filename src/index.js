import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import App from "./App";
import HttpsRedirect from "react-https-redirect";
import "react-datepicker/dist/react-datepicker.css";

import { QueryClient, QueryClientProvider } from "react-query";

import { ToastContainer } from "react-toastify";
export const queryClient = new QueryClient({defaultOptions:{queries:{staleTime:1000*60*10}}});

ReactDOM.render(
  <Provider store={store}>
    <HttpsRedirect>
      <ToastContainer />
      <QueryClientProvider client={queryClient}>

      <App />
      </QueryClientProvider>

    </HttpsRedirect>
  </Provider>,
  document.getElementById("root")
);
