import React from "react";
import "./cart.css";
import { useGlobalContext } from "../../globalContext";

function Cart() {
  const {
    itemsOnCart,
    removeAllItems,
    removeItemFromCart,
  } = useGlobalContext();

  return (
    <div className="cart">
      {itemsOnCart.map((cartItem) => {
        const { item } = cartItem;
        const { id, title, price, quantity } = item;
        return (
          <div key={id}>
            <p>{title}</p>
            <p>{price}</p>
            <p>{quantity}</p>
            <button onClick={() => removeItemFromCart(id)}>delete item</button>
          </div>
        );
      })}
      <button onClick={() => removeAllItems()}>Remove All</button>
    </div>
  );
}

export default Cart;
