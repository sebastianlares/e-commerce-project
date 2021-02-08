import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadingItems, setLoadingItems] = useState(true);
  const [itemsOnCart, setItemsOnCart] = useState([]);
  const [itemDetail, setItemDetail] = useState({});
  const [data, setData] = useState([]);
  const [amountGreaterThanStock, setAmountGreaterThanStock] = useState(false);

  const { stock } = itemDetail;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addItemToCart = (item = [], quantity) => {
    setItemsOnCart([...itemsOnCart, { item, quantity }]);

    if (itemsOnCart.some((i) => i.item.id === item.id)) {
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

  const removeItemFromCart = (id) => {
    console.log(id);
    const newItems = itemsOnCart.filter((item) => item.item.id !== id);
    console.log(newItems);
    setItemsOnCart(newItems);
  };

  const removeAllItems = () => {
    setItemsOnCart([]);
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
        amountGreaterThanStock,
        setAmountGreaterThanStock,
        data,
        setData,
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
