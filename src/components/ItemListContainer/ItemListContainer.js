import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./itemListContainer.css";

function ItemListContainer({ greeting }) {
  return (
    <div className="itemListContainer">
      <h3>{greeting}</h3>
      <ItemCount stock={3} initial={1} />
      <div className="itemList"></div>
    </div>
  );
}

export default ItemListContainer;
