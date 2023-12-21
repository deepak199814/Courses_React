import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode> React Router v5 doesn't work with React 18 StrictMode https://github.com/remix-run/react-router/issues/7870
  <Router>
    <App />
  </Router>
  // </React.StrictMode>
);
