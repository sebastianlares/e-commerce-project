import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import { itemData } from "../../data/itemData";
import "./itemList.css";

function ItemList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        resolve(itemData);
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timeout);
    });
    getData.then((res) => {
      setData(res);
    });
    getData.then((err) => console.log(err));
  }, []);

  return (
    <section className="item-list">
      {data.map((item, id) => {
        return <Item item={item} key={id} loading={loading} />;
      })}
    </section>
  );
}

export default ItemList;
