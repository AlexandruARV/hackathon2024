import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProviderUser } from "./contexts/ProviderUser.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProviderUser>
      <App />
    </ProviderUser>
  </React.StrictMode>
);
