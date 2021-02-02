import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadingItems, setLoadingItems] = useState(true);
  const [itemsOnCart, setItemsOnCart] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addItemToCart = (item, quantity) => {
    const cartItem = { item, quantity };
    return cartItem;
  };

  const removeItemFromCart = (item) => {
    itemsOnCart.filter((i) => i.id !== item.id);
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
