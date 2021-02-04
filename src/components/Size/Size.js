import React from "react";
import { useGlobalContext } from "../../globalContext";
import "./Size.css";

function Size() {
  const {
    itemsOnCart,
    setItemsOnCart,
    itemDetail,
    setTalle,
  } = useGlobalContext();
  const { stock } = itemDetail;

  const filterItemBySize = (e) => {
    const talle = e.target.value;
    setTalle(talle);
    console.log(test);
  };
  return (
    <div className="talles">
      <p>Talle</p>
      {stock && (
        <select name="sizes" id="sizes" onClick={(e) => filterItemBySize(e)}>
          {Object.entries(stock).map((key, index) => {
            const talleUnico = key[0];
            return (
              <option key={index} value={talleUnico}>
                {talleUnico}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
}

export default Size;
