import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FilterContext from "./Components/context/FilterContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div class="h-screen">
      <App />
    </div>
  </React.StrictMode>
);
