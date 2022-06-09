import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {PositionProvider} from "./contexts/positionContext";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PositionProvider>
        <App />
      </PositionProvider>
    </BrowserRouter>
  </React.StrictMode>
);
