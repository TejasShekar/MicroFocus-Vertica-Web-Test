import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {PositionProvider} from "./contexts/positionContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PositionProvider>
      <App />
    </PositionProvider>
  </React.StrictMode>
);
