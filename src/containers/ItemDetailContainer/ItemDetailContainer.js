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
    itemListCollection
      .get()
      .then((querySnapshot) => {
        let array = querySnapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });
        return array;
      })
      .then((array) => {
        setLoading(false);
        filterItemDetail(array);
      });
  }, []);

  const filterItemDetail = (arr = []) => {
    let itemSearch;
    itemSearch = arr.filter((item) => {
      return item.id === id;
    });
    setLoading(false);
    setItemDetail(itemSearch[0]);
  };

  return (
    <div className="detail-container">
      <h3
        className="comfy"
        style={{ display: `${loading ? "none" : "block"}` }}
      >
        Estate cómodo <span>todo</span> el día
      </h3>
      <ItemDetail loading={loading} />
    </div>
  );
}

export default ItemDetailContainer;
