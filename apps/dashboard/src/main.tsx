import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import "./styles/glass.css";

import {Toaster} from "sonner";

import {
  RepositoryProvider,
} from "./state/repositoryStore";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>

    <RepositoryProvider>

      <App />

      <Toaster
        richColors
        position="bottom-right"
      />  

    </RepositoryProvider>

  </React.StrictMode>
);