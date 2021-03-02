import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import React from "react";
import "./goToCartButton.css";

function GoToCartButton() {
  return (
    <>
      <Link to="/cart" style={{ marginTop: "10px" }}>
        <Button
          id="orange"
          variant="outlined"
          color="primary"
          style={{ width: "100%", marginTop: "0" }}
        >
          Terminar mi compra
        </Button>
      </Link>
    </>
  );
}

export default GoToCartButton;
