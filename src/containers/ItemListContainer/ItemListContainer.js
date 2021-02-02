import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import "./itemListContainer.css";
import { useGlobalContext } from "../../globalContext";

function ItemListContainer({ greeting }) {
  const [data, setData] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);
  const { setLoadingItems } = useGlobalContext();
  const { categoryId } = useParams();
  // const [test, setTest] = useState();

  useEffect(() => {
    const timeout = setTimeout(() => {
      getData();
    }, 2000);
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
  // useEffect(() => {
  //   if (test === "Buzo") {
  //     getData();
  //   }
  // }, [test]);
  // const handlerCLick = (e) => {
  //   console.log(e.target.value);
  //   setTest(e.target.value);
  // };

  const categoryFilter = (arr = []) => {
    const filteredCategory = arr.filter(
      (items) => items.categoryId === categoryId
    );
    // setLoadingItems(false);
    setData(filteredCategory);
  };
  // console.log(categoryId);

  return (
    <>
      <div className="item-list-container">
        {/* <input type="text" onChange={handlerCLick} /> */}
        <p className="container-greeting">{greeting}</p>
        <ItemList data={data} />
      </div>
    </>
  );
}

export default ItemListContainer;
