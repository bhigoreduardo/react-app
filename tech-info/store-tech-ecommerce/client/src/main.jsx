import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

import AuthProvider from "./contexts/auth.jsx";
import CartProvider from "./contexts/cart.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster />

    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
