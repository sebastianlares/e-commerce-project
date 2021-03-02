import React from "react";
import Button from "@material-ui/core/Button";
import { useGlobalContext } from "../../globalContext";
import "./buyButton.css";

function BuyButton({ setBuyDB, updateFbItems }) {
  const {
    phoneNumber,
    currentUser,
    removeAllItems,
    itemsOnCart,
  } = useGlobalContext();

  const setData = () => {
    console.log(currentUser);
    setBuyDB();
    updateFbItems(itemsOnCart);
    removeAllItems();
  };

  return (
    <>
      {Object.keys(phoneNumber).length === 0 || currentUser === null ? (
        <Button variant="outlined" id="disabledButton">
          Finalizar Compra
        </Button>
      ) : (
        <Button variant="outlined" id="buyButton" onClick={setData}>
          Finalizar Compra
        </Button>
      )}
    </>
  );
}

export default BuyButton;
