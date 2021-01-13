import React from "react";
import "./itemListContainer.css";

function ItemListContainer({ greeting }) {
  return (
    <div className="itemListContainer">
      <h3>{greeting}</h3>
      <div className="itemList"></div>
    </div>
  );
}

export default ItemListContainer;
