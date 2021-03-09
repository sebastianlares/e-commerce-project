import React, { useState } from "react";
import Cart from "../../components/Cart/Cart";
import { useGlobalContext } from "../../globalContext";
import "./cartContainer.css";
import { RiDeleteBack2Fill } from "react-icons/ri";
import BuyButton from "../../components/BuyButton/BuyButton";
import InfoAlert from "../../components/InfoAlert/InfoAlert";
import { getFireStore } from "../../firebase/index";
import firebase from "firebase/app";
import GoToButton from "../../components/GoToButton/GoToButton";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import RequestError from "../../components/RequestError/RequestError";

function CartContainer() {
  const [showButtons, setShowButtons] = useState(false);
  const {
    itemsOnCart,
    removeAllItems,
    total,
    phoneNumber,
    currentUser,
    setOrderId,
    loadingItems,
    setLoadingItems,
    errorRequest,
    setErrorRequest,
  } = useGlobalContext();

  const setBuyDB = () => {
    setLoadingItems(true);

    const buyerInfo = buyerData();
    const db = getFireStore();
    const orders = db.collection("orders");

    const newOrder = {
      buyer: buyerInfo.buyer,
      items: buyerInfo.items,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: buyerInfo.totalAmount,
    };
    orders
      .add(newOrder)
      .then(({ id }) => {
        setOrderId(id);
      })
      .then(() => {
        setLoadingItems(false);
        setShowButtons(true);
      })
      .catch((e) => {
        setErrorRequest({ cart: true });
      });
  };

  const buyerData = () => {
    const buyer = {
      name: currentUser.displayName,
      email: currentUser.email,
      phone: phoneNumber,
    };
    const items = itemsOnCart.map((i) => {
      const { item } = i;
      const { color } = item;
      return {
        id: item.id,
        title: item.title,
        price: new Intl.NumberFormat("de-DE").format(item.price),
        quantity: i.quantity,
        size: color[1],
        color: color[0],
      };
    });
    const totalAmount = total();
    return { buyer, items, totalAmount };
  };

  const updateFbItems = (items) => {
    const db = getFireStore();
    const itemsRef = db.collection("ItemList");
    items.map((i) => {
      const { item } = i;
      const { color } = item;
      const colorIndex = color[0];
      const sizeIndex = color[1];
      console.log(colorIndex, sizeIndex);
      const decreaseValue = firebase.firestore.FieldValue.increment(
        -i.quantity
      );

      itemsRef
        .doc(`${item.id}`)
        .update({
          [`color.${colorIndex}.stock.${sizeIndex}`]: decreaseValue,
        })
        .catch((e) => {
          setErrorRequest({ cart: true });
        });
    });
  };

  return (
    <div className="cart-container">
      <h1>Mi Carrito</h1>
      {loadingItems && itemsOnCart.length === 0 ? (
        <LoadingSpinner />
      ) : errorRequest.cart ? (
        <RequestError />
      ) : showButtons && itemsOnCart.length === 0 ? (
        <div className="buy-container">
          <p>Tu compra fue finalizada con éxito!</p>
          <p>
            En tu perfíl vas a econtrar toda la información necesaria acerca de
            tu compra.
          </p>
          <GoToButton location={"Ir al Perfil"} route={"userProfile"} />
          <GoToButton route="" location={"  Ir a Inicio"} />
          <GoToButton route={"productos"} location={"Ir a Productos"} />
        </div>
      ) : itemsOnCart.length === 0 ? (
        <div>
          <h2>Parece ser que no tenés items agregados al carrito!</h2>
          <div className="cart-container-links">
            <GoToButton route="" location={"Volver a Inicio"} />

            <GoToButton route={"productos"} location={"Ir a Productos"} />
          </div>
        </div>
      ) : (
        <>
          <section className="total-items-detail">
            {itemsOnCart.map((item) => {
              const { id } = item;
              return <Cart key={id} singleItem={item} />;
            })}
          </section>
          <section className="total-price">
            <p>
              Total: ${total()}
              ,00
            </p>
            <RiDeleteBack2Fill onClick={() => removeAllItems()} />
          </section>
          <div className="final-buy">
            {(Object.keys(phoneNumber).length === 0 ||
              currentUser === null) && <InfoAlert />}

            <BuyButton setBuyDB={setBuyDB} updateFbItems={updateFbItems} />
          </div>
        </>
      )}
    </div>
  );
}

export default CartContainer;
