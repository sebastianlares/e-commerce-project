import React, { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useGlobalContext } from "../../globalContext";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { categoryId } = useParams();
  const { setItemDetail } = useGlobalContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      getData();
    }, 1);
    return () => clearTimeout(timeout);
  }, [id]);

  const getData = () => {
    const call = fetch(".././itemData.json");
    call
      .then((res) => {
        const data = res.json();
        return data;
      })
      .then((data) => {
        setLoading(false);
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
      <ItemDetail loading={loading} />
    </div>
  );
}

export default ItemDetailContainer;
