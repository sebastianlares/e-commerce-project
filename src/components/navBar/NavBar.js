import React from "react";
import CartWidget from "./cartWidget/CartWidget";
import "./navBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="brand-name">
        <h3 className="simpleShop">SimpleCloths</h3>
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Productos</a>
        </li>
        <li>
          <a href="#">Nosotros</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
}

export default NavBar;
