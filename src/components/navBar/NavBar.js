import React from "react";
import CartWidget from "./cartWidget/CartWidget";
import "./navBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  const links = [
    { name: "Home", id: 1 },
    { name: "Productos", id: 2 },
    { name: "Nosotros", id: 3 },
    { name: "Contacto", id: 4 },
  ];
  return (
    <div className="navbar">
      <div className="brand-name">
        <Link to="/" style={{ border: "none" }}>
          <h3 className="simpleShop">SimpleCloths</h3>
        </Link>
      </div>
      <ul>
        {links.map((link) => {
          const { name, id } = link;
          return (
            <Link to={`${name === "Home" ? "/" : "/category/`${id}`"}`}>
              <li key={id}>{name}</li>
            </Link>
          );
        })}
      </ul>
      <CartWidget />
    </div>
  );
}

export default NavBar;
