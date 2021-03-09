import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import { getFireStore } from "../../firebase/index";
import "./itemListContainer.css";
import { useGlobalContext } from "../../globalContext";
import Button from "@material-ui/core/Button";
import RequestError from "../../components/RequestError/RequestError";

function ItemListContainer({ greeting }) {
  const {
    loadingItems,
    setLoadingItems,
    setData,
    data,
    errorRequest,
    setErrorRequest,
  } = useGlobalContext();
  const { categoryId } = useParams();

  useEffect(() => {
    setLoadingItems(true);
    const db = getFireStore();
    let itemListCollection = [];
    if (categoryId === "topVentas") {
      itemListCollection = db
        .collection("ItemList")
        .where("topSells", "==", true);
    } else if (categoryId === undefined) {
      itemListCollection = db
        .collection("ItemList")
        .orderBy("title")
        .limit(6);
    } else {
      itemListCollection = db
        .collection("ItemList")
        .where("categoryId", "==", `${categoryId}`);
    }

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
        if (!array.length) {
          setLoadingItems(false);
          setErrorRequest({ itemList: true });
          return;
        } else {
          setLoadingItems(false);
          setData(array);
        }
      })
      .catch((e) => {
        setErrorRequest({ itemList: true });
      });
  }, [categoryId, errorRequest.itemList]);

  const loadMoreItems = () => {
    const db = getFireStore();
    const itemListCollection = db.collection("ItemList").orderBy("title");
    itemListCollection
      .get()
      .then((qSnap) => {
        let array = qSnap.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });
        console.log(array);
        return array;
      })
      .then((array) => {
        setData(array);
      })
      .catch((e) => {
        setErrorRequest({ itemList: true });
      });
  };

  return (
    <>
      <div className="item-list-container">
        <h2 className="container-greeting">{greeting}</h2>
        <p>COLECCIÓN 2020</p>
        {loadingItems ? (
          <div className="sk-listContainer">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
          </div>
        ) : errorRequest.itemList ? (
          <RequestError />
        ) : (
          <>
            <ItemList data={data} categoryId={categoryId} />
            {data.length === 6 && categoryId !== "topVentas" && (
              <Button
                onClick={loadMoreItems}
                className="more-items"
                variant="outlined"
                color="primary"
                style={{
                  width: "10%",
                  marginTop: "36px",
                  alignSelf: "center",
                  borderColor: "d48a4c",
                }}
                id="load-more"
              >
                Ver más items
              </Button>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default ItemListContainer;
