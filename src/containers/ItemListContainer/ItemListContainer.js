import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import { getFireStore } from "../../firebase/index";
import "./itemListContainer.css";
import { useGlobalContext } from "../../globalContext";

function ItemListContainer({ greeting }) {
  const [data, setData] = useState([]);
  const { loadingItems, setLoadingItems } = useGlobalContext();
  const { categoryId } = useParams();
  // const [test, setTest] = useState();

  // useEffect(() => {
  //   setLoadingItems(true);
  //   const db = getFireStore();
  //   const itemListCollection = db.collection("ItemList");
  //   itemListCollection.get().then((querySnapshot) => {
  //     console.log(querySnapshot);
  //     let array = querySnapshot.docs.map((doc) => {
  //       return {
  //         id: doc.id,
  //         ...doc.data(),
  //       };
  //     });
  //     setData(array);
  //   });
  // }, []);
  // console.log(data);
  useEffect(() => {
    setLoadingItems(true);
    const timeout = setTimeout(() => {
      getData();
    }, 1);
    return () => clearTimeout(timeout);
  }, []);

  const getData = () => {
    const call = fetch(".././itemData.json");
    call
      .then((res) => {
        const itemList = res.json();
        return itemList;
      })
      .then((itemList) => {
        setLoadingItems(false);
        if (categoryId !== undefined) categoryFilter(itemList);
        else setData(itemList);
      });
  };
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
