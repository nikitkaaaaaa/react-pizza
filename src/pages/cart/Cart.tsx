import React, { useRef } from "react";

import style from "./cart.module.css";
import arrow_button_buy_product from "../../assets/icons/arrow_button_buy_product.svg";
import close_cart from "../../assets/icons/close_cart.svg";
import empty_cart from "../../assets/icons/empty_cart.svg";
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
  const { data: productsCart = [] } = useGetCartProductsQuery();

  const totlaPrice: number = productsCart.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  const navigate = useNavigate();

  const handleNavigateToPage = (page: string) => {
    closeCart();
    navigate(page === routes.main ? routes.main : routes.order);
  };

  const windowForm = useRef<HTMLDivElement>(null);

  useDisableScroll(showCart); // Отключение скролла при открытии

  useClickOutside(windowForm, closeCart); // Закрытие окна при клике вне его

  return (
    <div>
      <div className={`${style.blur} ${showCart && style.active}`}></div>
      <div
        className={`${style.cart} ${showCart && style.active}`}
        ref={windowForm}
      >
        {/* кол-во товаров в корзине */}
        {productsCart.length >= 1 && (
          <div className="text-xl flex justify-between items-center px-7 py-5">
            <div>
              В корзине{" "}
              <span className="font-bold">{productsCart.length} товара</span>
            </div>

            <img
              src={close_cart}
              alt="close cart"
              className="cursor-pointer"
              onClick={closeCart}
            />
          </div>
        )}
        {/* кол-во товаров в корзине */}

        {/* карточки товаров в корзине */}
        {productsCart.length >= 1 && (
          <div className={style.cart_products}>
            {productsCart.map((item) => (
              <CartCard key={item.id} {...item} />
            ))}
          </div>
        )}
        {/* карточки товаров в корзине */}

        {/*  блок с итоговой ценной и кнопкой перехода к странице оформления заказа */}
        {productsCart.length >= 1 && (
          <div
            className={`${style.cart_button_buy} ${showCart && style.active}`}
          >
            <div className="flex justify-between items-center">
              <div>Итого :</div>
              <div className="font-bold">{totlaPrice} ₽</div>
            </div>
            <div className="flex justify-between items-center">
              <div>Налог 5% :</div>
              <div className="font-bold">{Math.round(totlaPrice * 0.05)} ₽</div>
            </div>
            <button
              className="bg-[#FE5F00] text-white rounded-[18px] py-3 flex justify-center items-center relative"
              onClick={() => handleNavigateToPage(routes.order)}
            >
              <span> Оформить заказ</span>
              <img
                src={arrow_button_buy_product}
                alt="arrow button"
                className="absolute right-20 top-1/2 transform -translate-y-1/2"
              />
            </button>
          </div>
        )}
        {/*  блок с итоговой ценной и кнопкой перехода к странице оформления заказа */}

        {/* контент, при пустой корзины */}
        {productsCart.length < 1 && (
          <div className=" flex flex-col justify-center items-center min-h-screen">
            <img src={empty_cart} alt="empty cart" />
            <div className="text-xl mt-2 mb-1">Корзина пустая</div>
            <div className="text-gray-500 text-center w-[285px]">
              Добавьте хотя бы одну пиццу, чтобы совершить заказ
            </div>

            <button
              className="bg-[#FE5F00] w-[230px] h-[48px] text-white rounded-[18px] py-3 flex justify-center items-center relative mt-6 "
              onClick={() => handleNavigateToPage(routes.main)}
            >
              <span> Вернуться назад</span>
              <img
                src={arrow_button_buy_product}
                alt="arrow button"
                className="absolute left-7 top-1/2 transform -translate-y-1/2 rotate-180"
              />
            </button>
          </div>
        )}
        {/* контент, при пустой корзины */}
      </div>
    </div>
  );
};

export default Cart;
