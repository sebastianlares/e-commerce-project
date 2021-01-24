import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [itemDetail, setItemDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const filterItemDetail = (arr = []) => {
    const itemSearch = arr.find(
      (item) => item.id === Math.round(Math.random() * 13)
    );
    return itemSearch;
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
        const detailData = filterItemDetail(data);
        setItemDetail(detailData);
      });
  };

  return (
    <div className="detail-container">
      <ItemDetail itemDetail={itemDetail} loading={loading} />
    </div>
  );
}

export default ItemDetailContainer;
