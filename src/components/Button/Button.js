import React from "react";

// Styled Components
import { Button } from "antd";

const BasicButton = (props) => {
  const { onClick, label } = props;
  return (
    <Button onClick={onClick} type="dashed">
      {label}
    </Button>
  );
};

export { BasicButton };
