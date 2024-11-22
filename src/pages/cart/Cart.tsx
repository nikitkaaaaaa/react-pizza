import React, { useEffect, useState } from "react";

import style from "./cart.module.css";
import arrow_button_buy_product from "../../assets/icons/arrow_button_buy_product.svg";
import close_cart from "../../assets/icons/close_cart.svg";
import CartCard from "../../componets/card/CartCard";
import useDisableScroll from "../../hooks/UseDisableScroll";

interface CartProps {
  showCart: boolean;
  closeCart: () => void;
}

const Cart = ({ showCart, closeCart }: CartProps) => {
  const [animateCart, setAnimateCart] = useState(false); // Для анимации

  const productsCart = [
    {
      id: 1,
      imageUrl:
        "https://media.dodostatic.net/image/r:584x584/11EE7D614A46A625AE3FD9EE995314BD.avif",
      title: "Диабло",
      size: "30",
      typeDough: "Традиционное",
      price: 965,
    },
    {
      id: 2,
      imageUrl:
        "https://media.dodostatic.net/image/r:584x584/11EEF9E4417B796B852CA22778AB59F7.avif",
      title: "Двойная пепперони",
      typeDough: "Традиционное",
      price: 365,
      size: "20",
    },
    {
      id: 12,
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif",
      title: "Диабло",
      typeDough: "Тонкое",
      price: 665,
      size: "40",
    },
  ];

  useDisableScroll(showCart); // Отключение скролла при открытии

  useEffect(() => {
    if (showCart) {
      setAnimateCart(true); //  класс для анимации открытия
    } else {
      setAnimateCart(false); // класс для анимации закрытия
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
          >
            <div className="text-xl flex justify-between items-center px-7 py-5">
              <div>
                В корзине <span className="font-bold">3 товара</span>
              </div>

              <img
                src={close_cart}
                alt="close cart"
                className="cursor-pointer"
                onClick={() => setAnimateCart(false)}
              />
            </div>
            <div>
              {productsCart.map((item) => (
                <CartCard key={item.id} {...item} />
              ))}
            </div>
            <div className="px-7 py-5 bg-[white] flex flex-col gap-y-5 fixed bottom-0 right-0 z-50 w-[395px]">
              <div className="flex justify-between items-center">
                <div>Итого :</div>
                <div className="font-bold">2245 ₽</div>
              </div>
              <div className="flex justify-between items-center">
                <div>Налог 5% :</div>
                <div className="font-bold">121 ₽</div>
              </div>
              <button className="bg-[#FE5F00] text-white rounded-[18px] py-3 flex justify-center items-center relative">
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
