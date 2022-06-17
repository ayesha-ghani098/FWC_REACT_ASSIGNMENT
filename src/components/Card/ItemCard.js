import React, { useContext, useState } from "react";

// Context
import { ItemsActionContext } from "../../context/itemsContext";

// Styled Components
import { Col } from "antd";

// Custom Components
import { BasicButton } from "../Button/Button";
import NumberInput from "../Input/Input";

const ItemCard = (props) => {
  const { name, tagLine, price, id } = props.item;
  const [amount, setAmount] = useState(1);
  const { addItem } = useContext(ItemsActionContext);

  const handleAddItem = () => {
    addItem(id, amount);
    setAmount(1);
  };

  return (
    <Col span={24}>
      <div className="item-card">
        <div className="left">
          <h3>{name}</h3>
          <p>{tagLine}</p>
          <p>{price}</p>
        </div>
        <div className="right">
          <div>
            <NumberInput
              defaultValue={amount}
              onChange={(value) => setAmount(value)}
            />
          </div>
          <BasicButton onClick={() => handleAddItem()} label="Add To Cart" />
        </div>
      </div>
    </Col>
  );
};

export default ItemCard;
