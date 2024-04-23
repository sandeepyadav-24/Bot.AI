import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-x25az5sn58pldmhn.us.auth0.com"
      clientId="PcjTPcxUdbIqPYQwhLvzL9tPXJ0GpQ75"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
    ,
  </React.StrictMode>
);
