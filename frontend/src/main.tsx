import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import {GoogleOAuthProvider} from '@react-oauth/google'



const clientId = /*import.meta.env.CLIENTIDGOOGLE;*/ '486554963789-o1tll6o89r8s0boj0l8m4fh9guc6fc13.apps.googleusercontent.com'

console.log(clientId)


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId={clientId}>
      <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
