import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./contents/user.context";
import { ApiProvider } from "./contents/api.context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Envolvemos la app con los Providers para que cualquier ruta acceda al estado */}
      <UserProvider>
        <ApiProvider>
          <App />
        </ApiProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);