import React from "react";

// Styled Components
import { InputNumber } from "antd";

const NumberInput = (props) => {
  return (
    <InputNumber
      {...props}
      min={1}
      max={10}
      value={props.defaultValue}
      onChange={props.onChange}
    />
  );
};

export default NumberInput;
