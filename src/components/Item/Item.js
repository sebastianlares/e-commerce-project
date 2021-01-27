import { Link } from "react-router-dom";
import React from "react";
import "./item.css";

function Item({ item, loading }) {
  console.log(loading, "---------ITEM LOADING");
  const { price, title, pictureURL, id } = item;
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
          <Link to={`/item/${id}`}>
            <img src={pictureURL} alt={title} />
          </Link>
          <Link to={`/item/${id}`}>
            <p className="item-title">{title}</p>
          </Link>
          <h4>${price},00 </h4>
        </>
      )}
    </div>
  );
}

export default Item;
