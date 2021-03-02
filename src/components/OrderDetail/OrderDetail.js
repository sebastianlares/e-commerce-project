import React from "react";
import "./orderDetail.css";
import { RiDeleteBack2Fill } from "react-icons/ri";

function OrderDetail({ order, setDeleteOrder }) {
  const { id, items, date, total } = order;
  const getDate = new Date(date.seconds * 1000).toLocaleDateString();
  return (
    <div className="order-detail">
      <section className="info">
        <div
          className="delete-order-btn"
          onClick={() => setDeleteOrder({ id: id, bool: true })}
        >
          <h4>Detalle de compra:</h4>
          <RiDeleteBack2Fill />
        </div>
        <p>Fecha: {getDate}</p>
        <p>Id de compra: {id}</p>
        <p>Precio Total: ${total}</p>
        <p>Estado de compra: En preparación</p>
      </section>

      {items.map((item) => {
        const { id, price, quantity, title } = item;
        return (
          <section key={id} className="order-section">
            <li>Producto: {title}</li>
            <p>Cantidad: {quantity} </p>
            <p>
              Precio final: ${((price - price * 0.2) * quantity).toFixed(2)}0{" "}
            </p>
          </section>
        );
      })}
    </div>
  );
}

export default OrderDetail;
