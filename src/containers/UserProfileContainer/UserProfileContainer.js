import React, { useState, useEffect } from "react";
import UserProfile from "../../components/UserProfile/UserProfile";
import "./userProfileContainer.css";
import { getFireStore } from "../../firebase/index";
import { useGlobalContext } from "../../globalContext";
import firebase from "firebase/app";
import SignButton from "../../components/navBar/SignButton/SignButton";

function UserProfileContainer() {
  const [userOrderData, setUserOrderData] = useState([]);
  const [deleteOrder, setDeleteOrder] = useState({ id: "", bool: false });
  const {
    loadingItems,
    setLoadingItems,
    currentUser,
    errorRequest,
    setErrorRequest,
  } = useGlobalContext();
  // const { email } = currentUser;

  useEffect(() => {
    if (currentUser !== null) {
      setLoadingItems(true);
      const db = getFireStore();
      const userOrders = db
        .collection("orders")
        .where("buyer.email", "==", `${currentUser.email}`);
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
        })
        .catch((e) => {
          setErrorRequest({ userProfile: true });
        });
    }
  }, [currentUser !== null && currentUser.email]);

  useEffect(() => {
    if (deleteOrder.bool === true && currentUser !== null) {
      setLoadingItems(true);
      const db = getFireStore();
      const itemsToUpdate = db.collection("ItemList");
      userOrderData.map((i) => {
        const { items } = i;
        const { color, id, quantity, size } = items[0];
        const increaseValue = firebase.firestore.FieldValue.increment(quantity);

        itemsToUpdate.doc(`${id}`).update({
          [`color.${color}.stock.${size}`]: increaseValue,
        });
      });
      const userOrders = db
        .collection("orders")
        .where("buyer.email", "==", `${currentUser.email}`);
      db.collection("orders")
        .doc(deleteOrder.id)
        .delete()
        .then(() => {
          setDeleteOrder({ id: "", bool: false });
        })
        .catch((e) => {
          setErrorRequest({ userProfile: true });
        });

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
        })
        .catch((e) => {
          setErrorRequest({ userProfile: true });
        });
    }
  }, [deleteOrder.id]);

  return (
    <div className="user-container">
      {currentUser === null ? (
        <div className="user-login">
          <p>Para poder acceder al perfil de usuario debés iniciar sesión!</p>
          <SignButton />
        </div>
      ) : (
        <UserProfile
          loading={loadingItems}
          userOrderData={userOrderData}
          setDeleteOrder={setDeleteOrder}
        />
      )}
    </div>
  );
}

export default UserProfileContainer;
