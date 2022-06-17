import React, { createContext, useEffect, useState } from "react";

// Dummy Data
import { itemss } from "../constants/content/data";

// Creating Context
export const ItemsContext = createContext();
export const ItemsActionContext = createContext();

const ItemsContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    setItems(itemss);
  }, []);

  // Adding Items to Cart
  const addItem = (id, amount) => {
    // checking if item already selected
    const existingItem = selectedItems.filter((item) => item.id === id);
    if (existingItem.length > 0) {
      let temp_state = [...selectedItems];
      let index = temp_state.findIndex((item) => item.id === id);
      let temp_element = { ...temp_state[index] };
      temp_element.amount = temp_element.amount + amount;
      temp_state[index] = temp_element;
      setSelectedItems(temp_state);
    } else {
      const item = items.filter((item) => item.id === id);
      let Item = {
        id: id,
        name: item[0].name,
        price: item[0].price,
        amount: amount,
      };
      setSelectedItems([...selectedItems, Item]);
    }
  };

  // Increase Amount of Item in Cart

  const increaseAmount = (id) => {
    let temp_state = [...selectedItems];
    let index = temp_state.findIndex((item) => item.id === id);
    let temp_element = { ...temp_state[index] };
    temp_element.amount = temp_element.amount + 1;
    temp_state[index] = temp_element;
    setSelectedItems(temp_state);
  };

  // Decrease Amount of Item in Cart

  const decreaseAmount = (id) => {
    let temp_state = [...selectedItems];
    let index = temp_state.findIndex((item) => item.id === id);
    let temp_element = { ...temp_state[index] };
    temp_element.amount = temp_element.amount - 1;
    if (temp_element.amount === 0) {
      setSelectedItems(selectedItems.filter((item) => item.id !== id));
    } else {
      temp_state[index] = temp_element;
      setSelectedItems(temp_state);
    }
  };

  return (
    <ItemsContext.Provider value={{ items, selectedItems }}>
      <ItemsActionContext.Provider
        value={{
          addItem,
          setItems,
          setSelectedItems,
          increaseAmount,
          decreaseAmount,
        }}
      >
        {props.children}
      </ItemsActionContext.Provider>
    </ItemsContext.Provider>
  );
};

export default ItemsContextProvider;
