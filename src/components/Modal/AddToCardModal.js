import React from "react";
import { BasicButton } from "../Button/Button";

// Custom Components
import { CartList } from "../List/CartList";

const AddToCardModal = (props) => {
  const { handleCancel } = props;
  return (
    <div>
      <CartList />
      <div>
        <BasicButton onClick={() => handleCancel()} label="Close" />
        <BasicButton label="Order" />
      </div>
    </div>
  );
};

export default AddToCardModal;
