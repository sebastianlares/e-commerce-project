import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";

function CartWidget() {
  return (
    <div>
      <a href="#">
        <RiShoppingCartLine style={{ height: 25, width: 25 }} />
      </a>
    </div>
  );
}

export default CartWidget;
