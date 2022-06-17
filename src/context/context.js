import React from "react";

// Context
import ItemsContextProvider from "./itemsContext";

const ContextProvider = (props) => {
  return <ItemsContextProvider>{props.children}</ItemsContextProvider>;
};
export default ContextProvider;
