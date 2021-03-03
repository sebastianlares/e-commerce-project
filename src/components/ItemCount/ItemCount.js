import React, { useState, useEffect } from "react";
import "./itemCount.css";
import Button from "@material-ui/core/Button";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import GoToCartButton from "../GoToCartButton/GoToCartButton";

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

  useEffect(() => {
    const timeout = setTimeout(() => {}, 1000);
    return () => clearTimeout(timeout);
  });

  return (
    <>
      <div className={`container ${stock === 0 && "disabled"}`}>
        <>
          <div className="stock-container">
            <div className={`count-container ${alert && "error"}`}>
              <button className="btn" onClick={substractToCount}>
                <RiSubtractLine />
              </button>
              <p className="display-count">
                {stock === 0 ? <p>Producto fuera de stock</p> : inStock}
              </p>
              <button className="btn" onClick={addToCount}>
                <RiAddLine />
              </button>
            </div>
          </div>

          <Button
            id="orange-color"
            variant="outlined"
            style={{ width: "100%" }}
            onClick={() => onAdd(inStock)}
          >
            Agregar al Carrito
          </Button>
          {cartReady && <GoToCartButton />}
        </>
      </div>
    </>
  );
}

export default ItemCount;
