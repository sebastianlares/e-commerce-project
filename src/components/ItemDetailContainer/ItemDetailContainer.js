import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [itemDetail, setItemDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      getData();
      setLoading(false);
    }, 1);
    return () => clearTimeout(timeout);
  }, []);

  const filterItemDetail = (arr = []) => {
    console.log(arr);
    const numer = Math.ceil(Math.random() * 13 - 1);
    let itemSearch = arr.filter((item) => {
      return item.id === numer;
    });

    setItemDetail(itemSearch[0]);
  };

  const getData = () => {
    const call = fetch(".././data.json");

    call
      .then((res) => {
        const data = res.json();
        return data;
      })
      .then((data) => {
        filterItemDetail(data);
      });
  };
  console.log(itemDetail);
  return (
    <div className="detail-container">
      <ItemDetail itemDetail={itemDetail} loading={loading} />
    </div>
  );
}

export default ItemDetailContainer;
