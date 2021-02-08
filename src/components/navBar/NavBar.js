import React from "react";
import CartWidget from "./cartWidget/CartWidget";
import "./navBar.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../globalContext";

function NavBar() {
  const { itemsOnCart } = useGlobalContext();
  const links = [
    { name: "home", id: 1 },
    { name: "productos", id: 2 },
    { name: "nosotros", id: 3 },
    { name: "contacto", id: 4 },
  ];
  console.log(itemsOnCart);
  return (
    <div className="navbar">
      <div className="brand-name">
        <Link to="/" style={{ border: "none" }}>
          <h3 className="simpleShop">SimpleCloths</h3>
        </Link>
      </div>
      {itemsOnCart.length === 0 ? null : (
        <Link to="/cart" id="cartWidget">
          <CartWidget />
        </Link>
      )}

      <ul>
        {links.map((link) => {
          const { name, id } = link;
          return (
            <Link key={id} to={`/${name}`}>
              <>
                <li>{name}</li>
              </>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default NavBar;
