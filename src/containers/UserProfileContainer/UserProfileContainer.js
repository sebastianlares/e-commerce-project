import React, { useState, useEffect } from "react";
import UserProfile from "../../components/UserProfile/UserProfile";
import "./userProfileContainer.css";
import { getFireStore } from "../../firebase/index";
import { useGlobalContext } from "../../globalContext";
import firebase from "firebase/app";

function UserProfileContainer() {
  const [userOrderData, setUserOrderData] = useState([]);
  const [deleteOrder, setDeleteOrder] = useState({ id: "", bool: false });
  const { loadingItems, setLoadingItems, currentUser } = useGlobalContext();
  const { email } = currentUser;

  useEffect(() => {
    setLoadingItems(true);

    const db = getFireStore();
    const userOrders = db
      .collection("orders")
      .where("buyer.email", "==", `${email}`);
    userOrders
      .get()
      .then((querySnap) => {
        let array = querySnap.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });
        return array;
      })
      .then((array) => {
        setLoadingItems(false);
        setUserOrderData(array);
      });
  }, [email]);

  useEffect(() => {
    if (deleteOrder.bool === true) {
      setLoadingItems(true);
      const db = getFireStore();
      const itemsToUpdate = db.collection("ItemList");
      userOrderData.map((i) => {
        const { items } = i;
        console.log(items);
        const { color, id, quantity, size } = items[0];
        console.log(items[0].id, color, size);
        const increaseValue = firebase.firestore.FieldValue.increment(quantity);

        itemsToUpdate
          .doc(`${id}`)
          .update({
            [`color.${color}.stock.${size}`]: increaseValue,
          })
          .then((res) => console.log(res));
      });
      const userOrders = db
        .collection("orders")
        .where("buyer.email", "==", `${email}`);
      db.collection("orders")
        .doc(deleteOrder.id)
        .delete()
        .then(() => {
          setDeleteOrder({ id: "", bool: false });
        })
        .catch((e) => console.log(e));

      userOrders
        .get()
        .then((querySnap) => {
          let array = querySnap.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          });
          return array;
        })
        .then((array) => {
          setLoadingItems(false);
          setUserOrderData(array);
        });
    }
  }, [deleteOrder.id]);

  return (
    <>
      <div className="user-container">
        <UserProfile
          loading={loadingItems}
          userOrderData={userOrderData}
          setDeleteOrder={setDeleteOrder}
        />
      </div>
    </>
  );
}

export default UserProfileContainer;
