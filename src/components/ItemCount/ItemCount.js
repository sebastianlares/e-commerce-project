import React, { useState, useEffect } from "react";
import "./itemCount.css";
import Button from "@material-ui/core/Button";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";

function ItemCount({ stock, initial }) {
  const [inStock, setInStock] = useState(initial);
  const [alert, setAlert] = useState(false);

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

  const onAdd = () => {
    if (inStock === 0) {
      setAlert(true);
      return;
    }
    window.alert(`Unidades agregadas`);
  };

  return (
    <div className={`container ${stock === 0 && "disabled"}`}>
      <div className={`countContainer ${alert && "error"}`}>
        <button className="btn" onClick={substractToCount}>
          <RiSubtractLine />
        </button>
        <p className="displayCount">{stock === 0 ? stock : inStock}</p>
        <button className="btn" onClick={addToCount}>
          <RiAddLine />
        </button>
      </div>
      <Button
        variant="outlined"
        color="primary"
        style={{ width: "100%" }}
        onClick={() => onAdd()}
      >
        Agregar al Carrito
      </Button>
    </div>
  );
}

export default ItemCount;
