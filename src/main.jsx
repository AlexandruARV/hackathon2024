import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {ProviderQuizz} from './contexts/ProviderQuizz.jsx'
import { ProviderUser } from "./contexts/ProviderUser.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProviderUser>
      <ProviderQuizz>
      <App />
      </ProviderQuizz>
    </ProviderUser>
  </React.StrictMode>
);
