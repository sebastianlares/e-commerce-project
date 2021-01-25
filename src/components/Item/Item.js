import React from "react";
import "./item.css";

function Item({ item, loading }) {
  const { price, title, pictureURL } = item;
  return (
    <div className="item">
      {loading ? (
        <div className="sk-chase">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
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
