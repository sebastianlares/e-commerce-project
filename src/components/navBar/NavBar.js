import React from "react";
import CartWidget from "./cartWidget/CartWidget";
import "./navBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  const links = ["Home", "Productos", "Nosotros", "Contacto"];
  return (
    <div className="navbar">
      <div className="brand-name">
        <Link to="/" style={{ border: "none" }}>
          <h3 className="simpleShop">SimpleCloths</h3>
        </Link>
      </div>
      <ul>
        {links.map((link, index) => {
          return (
            <Link to={link}>
              <li key={index}>{link}</li>
            </Link>
          );
        })}
      </ul>
      <CartWidget />
    </div>
  );
}

export default NavBar;
