import React, { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [itemDetail, setItemDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { categoryId } = useParams();

  useEffect(() => {
    const timeout = setTimeout(() => {
      getData();
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [id]);

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

  const filterItemDetail = (arr = []) => {
    let itemSearch = arr.filter((item) => {
      return item.id === parseInt(id);
    });
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
      <ItemDetail itemDetail={itemDetail} loading={loading} />
    </div>
  );
}

export default ItemDetailContainer;
