import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css"
import "./styles/mainMenu.css"
import "./styles/main_menu(copy).css"
import "./styles/website.css"
import "./styles/product_temp.css"

import { WishlistProvider } from './context/WishlistContext';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <WishlistProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </WishlistProvider>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();