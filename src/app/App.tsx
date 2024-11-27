import React, { useState } from "react";

import "./global.css";
import Header from "../componets/header/Header";
import Main from "../pages/main/Main";
import Cart from "../pages/cart/Cart";
import { Route, Routes } from "react-router-dom";
import routes from "../routes/routes";
import Order from "../pages/order/Order";

const App = () => {
  const [showCart, setShowCart] = useState<boolean>(false);

  return (
    <>
      <div className="container">
        <Header openCart={() => setShowCart(true)} />
      </div>

      <hr className="mt-3 mb-12" />

      <Routes>
        <Route path={routes.main} element={<Main />}></Route>
        <Route path={routes.order} element={<Order />}></Route>
      </Routes>

      <Cart showCart={showCart} closeCart={() => setShowCart(false)} />
    </>
  );
};

export default App;
