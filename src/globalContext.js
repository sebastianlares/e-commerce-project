import React, { useState, useContext, useEffect } from "react";
import { auth } from "../src/firebase/index";
import { signInWithGoogle } from "../src/firebase/index";

const getLocalStorage = (item) => {
  if (item === "orderId") {
    let orderId = localStorage.getItem("orderId");
    if (orderId) {
      return (orderId = JSON.parse(localStorage.getItem("orderId")));
    } else return [];
  } else if (item === "phone") {
    let phone = localStorage.getItem("phone");
    if (phone) {
      return (phone = JSON.parse(localStorage.getItem("phone")));
    } else return {};
  } else if (item === "cartItems") {
    let cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      return (cartItems = JSON.parse(localStorage.getItem("cartItems")));
    } else return [];
  }
};

const AppContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [loadingItems, setLoadingItems] = useState(false);
  const [itemsOnCart, setItemsOnCart] = useState(getLocalStorage("cartItems"));
  const [itemDetail, setItemDetail] = useState({});
  const [data, setData] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [phoneNumber, setPhoneNumber] = useState(getLocalStorage("phone"));
  const [orderId, setOrderId] = useState(getLocalStorage("orderId"));
  const [showEdit, setShowEdit] = useState(false);
  console.log(itemsOnCart);

  useEffect(() => {
    localStorage.setItem("phone", JSON.stringify(phoneNumber));
  }, [phoneNumber]);

  useEffect(() => {
    localStorage.setItem("orderId", JSON.stringify(orderId));
  }, [orderId]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(itemsOnCart));
  }, [itemsOnCart]);

  const { stock } = itemDetail;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      setCurrentUser(userAuth);
    });
  }, []);

  const addItemToCart = (item = [], quantity) => {
    setItemsOnCart([...itemsOnCart, { item, quantity }]);

    if (
      itemsOnCart.some(
        (i) =>
          i.item.color[0] === item.color[0] &&
          i.item.id === item.id &&
          i.item.color[1] === item.color[1]
      )
    ) {
      const itemIndex = itemsOnCart.findIndex((i) => i.item.id === item.id);
      const newArray = itemsOnCart.filter((i) => i.item.id !== item.id);
      let amount = quantity + itemsOnCart[itemIndex].quantity;
      if (amount > stock) amount = stock;
      newArray.push({
        item,
        quantity: amount,
      });
      setItemsOnCart(newArray);
    }
  };

  const removeItemFromCart = (id, color) => {
    const itemIndex = itemsOnCart.findIndex(
      (item) => item.item.id === id && item.item.color[0] === color
    );
    const removedItem = itemsOnCart.splice(itemIndex, 1);
    const newArray = itemsOnCart.filter((i) => i !== removedItem);
    // console.log(newArray);
    setItemsOnCart(newArray);
  };

  const removeAllItems = () => {
    setItemsOnCart([]);
  };

  const total = () => {
    return new Intl.NumberFormat("de-DE").format(
      itemsOnCart.reduce((total, singleItem) => {
        const { item } = singleItem;
        return total + (item.price - item.price * 0.2) * singleItem.quantity;
      }, 0)
    );
  };

  const signIn = () => {
    signInWithGoogle();
  };

  const openSubmenu = () => {
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains(`${"category"}`)) {
      if (!e.target.classList.contains(`${"subMenu"}`)) {
        if (!e.target.classList.contains(`${"link"}`)) {
          closeSubmenu();
        }
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        loadingItems,
        setLoadingItems,
        addItemToCart,
        setItemsOnCart,
        itemsOnCart,
        itemDetail,
        setItemDetail,
        removeItemFromCart,
        removeAllItems,
        data,
        setData,
        currentUser,
        total,
        signIn,
        setPhoneNumber,
        phoneNumber,
        orderId,
        setOrderId,
        isSubmenuOpen,
        handleSubmenu,
        openSubmenu,
        showEdit,
        setShowEdit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, GlobalProvider };
