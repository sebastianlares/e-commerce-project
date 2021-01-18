import React from "react";
import Item from "../Item/Item";
import { itemData } from "../../data/itemData";
import "./itemList.css";

function ItemList() {
  return (
    <section className="item-list">
      {itemData.map((item, id) => {
        return <Item itemData={item} key={id} />;
      })}
    </section>
  );
}

export default ItemList;
