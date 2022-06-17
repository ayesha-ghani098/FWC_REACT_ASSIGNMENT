import React, { Fragment } from "react";

// Custom Components
import Header from "../../components/Bars/Header";
import { ItemsList } from "../../components/List/ItemsList";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <ItemsList />
      </div>
    </Fragment>
  );
};

export default Home;
