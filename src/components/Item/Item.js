import React, { useState, useEffect } from "react";
import "./item.css";

function Item({ itemData }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        resolve();
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timeout);
    });
    getData.then((res) => {
      setData(itemData);
    });
    getData.then((err) => console.log(err));
  });

  const { price, title, pictureURL } = data;
  return (
    <div className="item">
      {loading ? (
        <div class="sk-chase">
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
        </div>
      ) : (
        <>
          <img src={pictureURL} alt={title} />
          <p className="item-title">{title}</p>
          <h4>${price},00 </h4>
        </>
      )}
    </div>
  );
}

export default Item;
