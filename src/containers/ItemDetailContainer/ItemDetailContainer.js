import React, { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useGlobalContext } from "../../globalContext";
import { useParams } from "react-router-dom";
import { getFireStore } from "../../firebase";

function ItemDetailContainer() {
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const { setItemDetail } = useGlobalContext();

  useEffect(() => {
    setLoading(true);
    const db = getFireStore();
    const itemListCollection = db.collection("ItemList");
    const itemDb = itemListCollection.doc(id);
    itemDb
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("archivo no encontrado");
        }
        setLoading(false);
        setItemDetail({ ...doc.data(), id: doc.id });
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id, setItemDetail]);

  const handleColor = (color) => {
    if (color === "black") {
      return "black";
    } else if (color === "white") {
      return "white";
    } else if (color === "toasted") {
      return "#d39c4d";
    } else if (color === "aero") {
      return "#97bfe9";
    } else if (color === "grey") {
      return "#c0bfbf";
    } else if (color === "cranberry") {
      return "#c41d33d9";
    } else if (color === "light blue") {
      return "#5c9cd5";
    }
  };

  return (
    <div className="detail-container">
      <h3
        className="comfy"
        style={{ display: `${loading ? "none" : "block"}` }}
      >
        Estate cómodo <span>todo</span> el día
      </h3>
      <ItemDetail loading={loading} handleColor={handleColor} />
    </div>
  );
}

export default ItemDetailContainer;
