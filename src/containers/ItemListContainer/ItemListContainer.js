import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import { getFireStore } from "../../firebase/index";
import "./itemListContainer.css";
import { useGlobalContext } from "../../globalContext";
import Button from "@material-ui/core/Button";

function ItemListContainer({ greeting }) {
  const { loadingItems, setLoadingItems, setData, data } = useGlobalContext();
  const { categoryId } = useParams();

  useEffect(() => {
    setData([]);
    setLoadingItems(true);

    const db = getFireStore();
    let itemListCollection = [];
    if (categoryId === undefined) {
      itemListCollection = db.collection("ItemList").orderBy("title").limit(6);
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
        setLoadingItems(false);
        setData(array);
      });
  }, [categoryId]);

  // console.log(categoryId);
  // const categoryFilter = (arr = []) => {
  //   const filteredCategory = arr.filter(
  //     (items) => items.categoryId === categoryId
  //   );
  //   setData(filteredCategory);
  // };

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
        return array;
      })
      .then((array) => {
        setData(array);
      });
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
            <p>COLECCIÓN 2020</p>
            <ItemList data={data} />
            {data.length === 6 && (
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
