import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [itemDetail, setItemDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const filterItemDetail = (arr = []) => {
    console.log(arr);
    let itemSearch = arr.find((item) => {
      return item.id === Math.floor(Math.random() * 13);
    });
    console.log(itemSearch);
    setItemDetail(itemSearch);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      getData();
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const getData = () => {
    const call = fetch("./data.json");

    call
      .then((res) => {
        const data = res.json();
        return data;
      })
      .then((data) => {
        filterItemDetail(data);
      });
  };

  return (
    <div className="detail-container">
      <ItemDetail itemDetail={itemDetail} loading={loading} />
    </div>
  );
}

export default ItemDetailContainer;
