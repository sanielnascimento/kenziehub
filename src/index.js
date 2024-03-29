import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { UserProvider } from "./contexts/UserContext";
import { GlobalStyle } from "./styles/global";
import { Reset } from "./styles/reset";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Reset />
    <GlobalStyle />
  <UserProvider>
    <App />
  </UserProvider>
  </BrowserRouter>
);
