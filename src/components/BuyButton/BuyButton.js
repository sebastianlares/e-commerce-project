import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { useGlobalContext } from "../../globalContext";
import "./buyButton.css";

function BuyButton({ setBuyDB, updateFbItems }) {
  const [updateItems, setupdateItems] = useState(false);
  const {
    phoneNumber,
    currentUser,
    removeAllItems,
    itemsOnCart,
  } = useGlobalContext();

  useEffect(() => {
    if (updateItems === true) {
      setBuyDB();
      updateFbItems(itemsOnCart);
      removeAllItems();
    }
  }, [updateItems]);

  const setData = () => {
    setupdateItems(true);
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
