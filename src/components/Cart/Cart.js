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
  const { removeItemFromCart, addItemToCart } = useGlobalContext();
  const { item, quantity } = singleItem;
  const { price, title, id, stock } = item;

  // const increaseQuantity = (item, amount) => {
  //   if (amount >= stock) return;
  //   const newAmount = amount + 1;
  //   addItemToCart(item, newAmount);
  // };

  return (
    <div className="cart">
      <Link to={`/item/${id}`}>
        <p className="cart-title">Producto: {title}</p>
      </Link>
      <div className="quantity-div">
        <p id="quantity">Cantidad: {quantity}</p>
        <div className="quantity-button">
          <button>
            <RiArrowDropUpLine />
          </button>
          <button>
            <RiArrowDropDownLine />
          </button>
        </div>
      </div>
      <p id="price">${price * quantity},00</p>
      <button onClick={() => removeItemFromCart(id)}>
        <RiDeleteBin6Fill />
      </button>
    </div>
  );
}

export default Cart;
