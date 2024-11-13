import React from 'react';
import ReactDOM from'react-dom'
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import App ,{ store } from "./App.jsx";


createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
