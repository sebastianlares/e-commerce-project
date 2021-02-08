import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import { getFireStore } from "../../firebase/index";
import "./itemListContainer.css";
import { useGlobalContext } from "../../globalContext";

function ItemListContainer({ greeting }) {
  const { loadingItems, setLoadingItems, setData, data } = useGlobalContext();
  const { categoryId } = useParams();

  useEffect(() => {
    if (data === undefined) {
      setLoadingItems(true);
    }
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
        setLoadingItems(false);
        if (categoryId === undefined) categoryFilter(array);
        else setData(array);
      });
  }, []);

  const categoryFilter = (arr = []) => {
    const filteredCategory = arr.filter(
      (items) => items.categoryId === categoryId
    );
    setData(filteredCategory);
  };

  return (
    <>
      <div className="item-list-container">
        <p className="container-greeting">{greeting}</p>
        {loadingItems ? (
          <div className="sk-listContainer">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
          </div>
        ) : (
          <>
            <ItemList data={data} />
          </>
        )}
      </div>
    </>
  );
}

export default ItemListContainer;
