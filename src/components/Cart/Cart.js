import React from "react";
import "./cart.css";
import { useGlobalContext } from "../../globalContext";
import { Link } from "react-router-dom";
import {
  RiDeleteBin6Fill,
  RiArrowDropDownLine,
  RiArrowDropUpLine,
} from "react-icons/ri";

function Cart({ singleItem }) {
  const { removeItemFromCart } = useGlobalContext();
  const { item, quantity } = singleItem;
  const { price, title, id, color } = item;

  return (
    <div className="cart">
      <div className="link-wrapper">
        <Link to={`/item/${id}`}>
          <li className="cart-title">{title}</li>
        </Link>
      </div>
      <p>Color: {color[0]}</p>
      <p>Talle: {color[1].toUpperCase()}</p>
      <p id="quantity">Cantidad: {quantity}</p>

      <p id="price">
        $
        {new Intl.NumberFormat("de-DE").format(
          (price - price * 0.2) * quantity
        )}
        ,00
      </p>
      <button onClick={() => removeItemFromCart(id, color)}>
        <RiDeleteBin6Fill />
      </button>
    </div>
  );
}

export default Cart;
