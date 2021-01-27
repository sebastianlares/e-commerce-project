import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import "./itemListContainer.css";

function ItemListContainer({ greeting }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setData([]);
    const timeout = setTimeout(() => {
      getData();
    }, 2000);
    return () => clearTimeout(timeout);
  }, [categoryId]);

  const getData = () => {
    const call = fetch(".././itemData.json");
    call
      .then((res) => {
        const itemList = res.json();
        return itemList;
      })
      .then((itemList) => {
        setLoading(false);
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
    <div className="item-list-container">
      <p className="container-greeting">{greeting}</p>
      {/* <ItemCount
        stock={3}
        initial={1}
        onAdd={onAdd}
        alert={alert}
        setAlert={setAlert}
      /> */}
      <ItemList data={data} loading={loading} />
    </div>
  );
}

export default ItemListContainer;
