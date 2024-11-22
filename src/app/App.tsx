import React, { useState } from "react";

import "./global.css";
import Header from "../componets/header/Header";
import Main from "../pages/main/Main";
import Cart from "../pages/cart/Cart";

const App = () => {
  const [showCart, setShowCart] = useState<boolean>(false);

  return (
    <>
      <div className="container">
        <Header openCart={() => setShowCart(true)} />
      </div>

      <hr className="my-6" />

      <div className="container">
        <Main />
        <Cart showCart={showCart} closeCart={() => setShowCart(false)} />
      </div>
    </>
  );
};

export default App;
