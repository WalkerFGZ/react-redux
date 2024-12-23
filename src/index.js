import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";
import { createRoot } from "react-dom/client";
import store from "./redux/configureStore";

const rootElement = document.getElementById("app");
createRoot(rootElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
