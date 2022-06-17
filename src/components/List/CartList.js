import React, { useContext } from "react";

// Context
import { ItemsContext } from "../../context/itemsContext";

// Styled Components
import { Row } from "antd";

// Custom Components
import CartItem from "../Card/CartItem";

const CartList = () => {
  const { selectedItems } = useContext(ItemsContext);
  return (
    <Row>
      {selectedItems.length > 0 ? (
        selectedItems.map((item, index) => {
          return <CartItem key={item.id} item={item} />;
        })
      ) : (
        <p>No Items Selected</p>
      )}
    </Row>
  );
};

export { CartList };
