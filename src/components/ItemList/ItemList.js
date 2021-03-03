import React from "react";
import Item from "../Item/Item";
import { Link } from "react-router-dom";

import "./itemList.css";

function ItemList({ data, categoryId }) {
  return (
    <>
      <div
        className="list-links"
        style={{ marginLeft: `${data.length === 1 ? "466px" : "123px"}` }}
      >
        <Link to={"/productos"}>Productos </Link>
        <span> / </span>

        <Link to={`/${categoryId}`}>{categoryId} </Link>
      </div>
      <section
        className="item-list"
        style={{
          gridTemplateColumns: `${
            data.length === 1 ? "repeat(1, 1fr)" : "repeat(3, 1fr)"
          }`,
        }}
      >
        {data.map((item) => {
          const { id } = item;
          return <Item item={item} key={id} />;
        })}
      </section>
    </>
  );
}

export default ItemList;
