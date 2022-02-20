import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { AuthContextProvider } from "./store/auth-context";

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthContextProvider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
