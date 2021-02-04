import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import React from "react";
import "./goToCartButton.css";

function GoToCartButton() {
  return (
    <>
      <p className="compra-finalizada">Tu elección fue agregada al carrito!</p>
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
  );
}

export default GoToCartButton;
