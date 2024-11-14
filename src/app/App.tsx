import React from "react";

import "./global.css";
import Header from "../componets/header/Header";
import Main from "../pages/main/Main";

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
      </div>

      <hr className="my-9" />

      <div className="container">
        <Main />
      </div>
    </>
  );
};

export default App;
