import React from "react";
import Item from "../Item/Item";
import "./itemList.css";

function ItemList({ data, loading }) {
  console.log(loading, "----ITEMLIST LOADING");
  return (
    <section className="item-list">
      {data.map((item) => {
        const { id } = item;
        return <Item item={item} key={id} loading={loading} />;
      })}
    </section>
  );
}

export default ItemList;
