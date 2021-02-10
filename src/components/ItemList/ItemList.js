import React from "react";
import Item from "../Item/Item";
import "./itemList.css";

function ItemList({ data }) {
  return (
    <section
      className="item-list"
      style={{
        gridTemplateColumns: `${data.length === 1 && "repeat(1, 1fr)"}`,
      }}
    >
      {data.map((item) => {
        const { id } = item;
        return <Item item={item} key={id} />;
      })}
    </section>
  );
}

export default ItemList;
