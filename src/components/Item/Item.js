import { Link } from "react-router-dom";
import React from "react";
import "./item.css";
import Carousel from "../Carousel/Carousel";
import { useGlobalContext } from "../../globalContext";

function Item({ item }) {
  const { price, title, id, color } = item;
  const { loadingItems } = useGlobalContext();

  return (
    <div className="item">
      {!loadingItems && (
        <Carousel
          images={Object.values(color)[0].pictures}
          id={id}
          setLink={true}
        />
      )}
      <Link to={`/item/${id}`}>
        <p className="item-title">{title}</p>
      </Link>
      <h4>${new Intl.NumberFormat("de-DE").format(price)},00 </h4>
    </div>
  );
}

export default Item;
