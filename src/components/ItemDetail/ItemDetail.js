import React from "react";
import "./itemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { useGlobalContext } from "../../globalContext";

function ItemDetail({ loading }) {
  const [alert, setAlert] = useState(false);
  const [itemAmount, setItemAmount] = useState(1);
  const [cartReady, isCartReady] = useState(false);
  const { categoryId } = useParams();

  const { addItemToCart, itemDetail } = useGlobalContext();
  const { pictureURL, title, description, price, stock } = itemDetail;

  const onAdd = (stock) => {
    if (stock === 0) {
      setAlert(true);
      return;
    }
    addItemToCart(itemDetail, stock);
    setItemAmount(stock);
    isCartReady(true);
  };

  return (
    <div
      className="item-detail"
      style={{
        gridTemplateColumns: `${loading ? "repeat(1, 1fr)" : "repeat(2, 1fr"}`,
      }}
    >
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
          <div className="description">
            <div className="category-links">
              <Link to="/productos">Productos </Link>
              <span>/ </span>
              <Link to={`/category/${categoryId}`}>{categoryId} </Link>
              <span>/ </span> {title}
            </div>
            <h3>{title}</h3>
            <div className="discount">
              <p>${price},00 </p>
              <p>${price - price * 0.2},00</p>
              <p>20% OFF</p>
            </div>

            <p className="discount-two">
              10% de descuento pagando por transferencia bancaria ó efectivo.
            </p>
            <div className="countContainer">
              <ItemCount
                initial={1}
                alert={alert}
                stock={stock}
                onAdd={onAdd}
                setAlert={setAlert}
                cartReady={cartReady}
              />
            </div>

            <p className="descr">{description}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default ItemDetail;
