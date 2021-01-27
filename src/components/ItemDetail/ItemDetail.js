import React from "react";
import "./itemDetail.css";

function ItemDetail({ itemDetail, loading }) {
  const { img, title, descr, price } = itemDetail;

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
          <img src={img} alt={title} />
          <div className="description">
            <h3>{title}</h3>
            <div className="discount">
              <p>${price},00 </p>
              <p>${price - price * 0.2},00</p>
              <p>20% OFF</p>
            </div>

            <p className="discount-two">
              10% de descuento pagando por transferencia bancaria ó efectivo.
            </p>
            <p className="descr">{descr}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default ItemDetail;
