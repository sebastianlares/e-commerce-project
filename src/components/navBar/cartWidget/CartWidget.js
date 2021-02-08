import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { useGlobalContext } from "../../../globalContext";
import "./cartWidget.css";

function CartWidget() {
  const { itemsOnCart } = useGlobalContext();
  return (
    <div className="cartWidget-container">
      <RiShoppingCartLine style={{ height: 25, width: 25 }} />
      <div className="cartWidget-count">
        <p>
          {itemsOnCart.reduce((total, singleItem) => {
            return total + singleItem.quantity;
          }, 0)}
        </p>
      </div>
    </div>
  );
}

export default CartWidget;
