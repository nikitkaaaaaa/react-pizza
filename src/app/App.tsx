import React, { useEffect, useState } from "react";

import "./global.css";
import Header from "../componets/header/Header";
import Main from "../pages/main/Main";
import Cart from "../pages/cart/Cart";
import { Route, Routes, useLocation } from "react-router-dom";
import routes from "../routes/routes";
import Order from "../pages/order/Order";
import Orders from "../pages/orders/Orders";

const App = () => {
  const [showCart, setShowCart] = useState<boolean>(false);

  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === routes.orders ||
      location.pathname === routes.order
    ) {
      document.body.style.backgroundColor = "#f4f1ee";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }, [location]);

  return (
    <>
      <div className="container">
        <Header openCart={() => setShowCart(true)} />
      </div>

      <hr className="mt-6 mb-10" />

      <Routes>
        <Route path={routes.main} element={<Main />}></Route>
        <Route path={routes.order} element={<Order />}></Route>
        <Route path={routes.orders} element={<Orders />}></Route>
      </Routes>

      <Cart showCart={showCart} closeCart={() => setShowCart(false)} />
    </>
  );
};

export default App;
