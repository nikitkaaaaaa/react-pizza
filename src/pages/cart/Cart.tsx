import React, { useEffect, useRef, useState } from "react";

import style from "./cart.module.css";
import arrow_button_buy_product from "../../assets/icons/arrow_button_buy_product.svg";
import close_cart from "../../assets/icons/close_cart.svg";
import CartCard from "../../componets/card/CartCard";
import useDisableScroll from "../../hooks/UseDisableScroll";
import { useGetCartProductsQuery } from "../../api/cartApi/cartApi";
import useClickOutside from "../../hooks/UseCloseBlcok";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/routes";

interface CartProps {
  showCart: boolean;
  closeCart: () => void;
}

const Cart = ({ showCart, closeCart }: CartProps) => {
  const [animateCart, setAnimateCart] = useState(false);

  const { data: productsCart = [] } = useGetCartProductsQuery();

  const windowForm = useRef<HTMLDivElement>(null);

  const totlaPrice: number = productsCart.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  const navigate = useNavigate();

  const handleNavigateToOrderPage = () => {
    setAnimateCart(false);
    handleAnimationEnd();
    navigate(routes.order);
  };

  useDisableScroll(showCart); // Отключение скролла при открытии

  useClickOutside(windowForm, () => setAnimateCart(false)); // Закрытие окна при клике вне его

  useEffect(() => {
    if (showCart) {
      setAnimateCart(true);
    } else {
      setAnimateCart(false);
    }
  }, [showCart]);

  const handleAnimationEnd = () => {
    if (!animateCart) {
      closeCart();
    }
  };

  return (
    <div>
      {(showCart || animateCart) && (
        <div className={`${style.blur} ${animateCart ? style.show : ""}`}>
          <div
            className={`${style.cart} ${animateCart ? style.show : ""}`}
            onTransitionEnd={handleAnimationEnd} // Событие завершения анимации
            ref={windowForm}
          >
            <div className="text-xl flex justify-between items-center px-7 py-5">
              <div>
                В корзине{" "}
                <span className="font-bold">{productsCart.length} товара</span>
              </div>

              <img
                src={close_cart}
                alt="close cart"
                className="cursor-pointer"
                onClick={() => setAnimateCart(false)}
              />
            </div>
            <div className={style.cart_products}>
              {productsCart.map((item) => (
                <CartCard key={item.id} {...item} />
              ))}
            </div>

            <div className={style.cart_button_buy}>
              <div className="flex justify-between items-center">
                <div>Итого :</div>
                <div className="font-bold">{totlaPrice} ₽</div>
              </div>
              <div className="flex justify-between items-center">
                <div>Налог 5% :</div>
                <div className="font-bold">
                  {Math.round(totlaPrice * 0.05)} ₽
                </div>
              </div>
              <button
                className="bg-[#FE5F00] text-white rounded-[18px] py-3 flex justify-center items-center relative"
                onClick={handleNavigateToOrderPage}
              >
                <span> Оформить заказ</span>
                <img
                  src={arrow_button_buy_product}
                  alt="arrow button"
                  className="absolute right-20 top-1/2 transform -translate-y-1/2"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
