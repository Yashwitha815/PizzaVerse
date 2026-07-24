import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

import App from "./App";
import { store } from "./app/store";

import "./index.css";
import "./styles/Toast.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 2000,
          style: {
            background: "#ffffff",
            color: "#333333",
            borderRadius: "12px",
            border: "1px solid #e5e7eb",
            padding: "16px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
            fontSize: "15px",
            fontWeight: "500",
          },
          success: {
            iconTheme: {
              primary: "#FF6B35",
              secondary: "#ffffff",
            },
          },
        }}
      />

      <App />
    </Provider>
  </React.StrictMode>,
);
