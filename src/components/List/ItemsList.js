import React, { useContext } from "react";

// Context
import { ItemsContext } from "../../context/itemsContext";

// Styled Components
import { Row } from "antd";

// Custom Components
import ItemCard from "../Card/ItemCard";

const ItemsList = () => {
  const { items } = useContext(ItemsContext);
  return (
    <Row>
      {items.length > 0 ? (
        items.map((item) => {
          return <ItemCard key={item.id} item={item} />;
        })
      ) : (
        <p>No Items Available</p>
      )}
    </Row>
  );
};

export { ItemsList };
