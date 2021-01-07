import React from "react";
import "./navBar.css";

function NavBar() {
  return (
    <div className="navBar">
      <div className="brandName">
        <h3>
          <a href="#">SimpleShop</a>
        </h3>
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
    </div>
  );
}

export default NavBar;
