import React, { useContext } from "react";

// Styled Components
import { Col } from "antd";

// Custom Components
import { BasicButton } from "../Button/Button";
import { ItemsActionContext } from "../../context/itemsContext";

const CartItem = (props) => {
  const { name, price, amount, id } = props.item;
  const { increaseAmount, decreaseAmount } = useContext(ItemsActionContext);

  const handleIncrement = () => {
    increaseAmount(id);
  };

  const handleDecrement = () => {
    decreaseAmount(id);
  };

  return (
    <Col span={24}>
      <div className="item-card">
        <div className="left">
          <h3>{name}</h3>
          <div className="price-amount">
            <p>{price}</p>
            <p>x {amount}</p>
          </div>
        </div>
        <div className="right">
          <BasicButton onClick={() => handleDecrement()} label="-" />
          <BasicButton onClick={() => handleIncrement()} label="+" />
        </div>
      </div>
    </Col>
  );
};

export default CartItem;
