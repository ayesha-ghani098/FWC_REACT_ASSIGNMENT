import React from "react";

// Context
import ContextProvider from "./context/context";

// Style and Assets
import "./App.css";

// Custom Components
import Home from "./containers/Home/Home";

const App = () => {
  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  );
};

export default App;
