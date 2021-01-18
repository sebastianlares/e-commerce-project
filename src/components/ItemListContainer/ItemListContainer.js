import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import "./itemListContainer.css";

function ItemListContainer({ greeting }) {
  const [alert, setAlert] = useState(false);

  const onAdd = (stock) => {
    if (stock === 0) {
      setAlert(true);
      return;
    }
    window.alert(`Unidades agregadas`);
  };

  return (
    <div className="item-list-container">
      <p className="container-greeting">{greeting}</p>
      {/* <ItemCount
        stock={3}
        initial={1}
        onAdd={onAdd}
        alert={alert}
        setAlert={setAlert}
      /> */}
      <ItemList />
    </div>
  );
}

export default ItemListContainer;
