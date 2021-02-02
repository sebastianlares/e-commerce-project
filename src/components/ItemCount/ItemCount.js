import React, { useState, useEffect } from "react";
import "./itemCount.css";
import Button from "@material-ui/core/Button";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function ItemCount({ stock, initial, onAdd, alert, setAlert, cartReady }) {
  const [inStock, setInStock] = useState(initial);

  const addToCount = () => {
    if (inStock >= stock) {
      setAlert(true);
      return;
    }
    setInStock(inStock + 1);
  };

  const substractToCount = () => {
    if (inStock <= 0) {
      setAlert(true);
      return;
    }
    setInStock(inStock - 1);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <>
      {cartReady ? (
        <>
          <p className="compra-finalizada">
            Tu elección fue agregada al carrito!
          </p>
          <Link to="/cart">
            <Button
              variant="outlined"
              color="primary"
              style={{ width: "100%", marginTop: "31px" }}
            >
              Terminar mi compra
            </Button>
          </Link>
        </>
      ) : (
        <div className={`container ${stock === 0 && "disabled"}`}>
          <div className="cantidad">
            <p>Cantidad</p> <p>Stock: {stock} u</p>
          </div>
          <div className={`count-container ${alert && "error"}`}>
            <button className="btn" onClick={substractToCount}>
              <RiSubtractLine />
            </button>
            <p className="display-count">{stock === 0 ? stock : inStock}</p>
            <button className="btn" onClick={addToCount}>
              <RiAddLine />
            </button>
          </div>
          <Button
            variant="outlined"
            color="primary"
            style={{ width: "100%" }}
            onClick={() => onAdd(inStock)}
          >
            Agregar al Carrito
          </Button>
        </div>
      )}
    </>
  );
}

export default ItemCount;
