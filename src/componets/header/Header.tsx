import React from "react";

import style from "./header.module.css";
import logo from "../../assets/icons/logo.svg";
import cart from "../../assets/icons/cart.svg";
import lupa from "../../assets/icons/lupa.svg";
import { Link } from "react-router-dom";
import routes from "../../routes/routes";

interface HeaderProps {
  openCart: () => void;
}
const Header = ({ openCart }: HeaderProps) => {
  return (
    <div className={style.header}>
      {/* Логотип и описание */}
      <div className="flex items-center">
        <Link to={routes.main}>
          <img src={logo} alt="logo" />
        </Link>
        <div className="ml-3">
          <div className="text-lg font-bold">REACT PIZZA</div>
          <div className="text-gray-500">самые вкусные пиццы у нас</div>
        </div>
      </div>
      {/* Логотип и описание */}

      {/* Поле ввода */}
      <div className="w-[60%] px-3 relative">
        <input
          type="text"
          className="w-full p-2 outline-none bg-[#F9F9F9] rounded-xl px-10 py-2.5 text-gray-500"
          placeholder="Поиск пиццы..."
        />
        <img
          src={lupa}
          alt="lupa"
          className="absolute left-6 top-1/2 transform -translate-y-1/2 "
        />
      </div>
      {/* Поле ввода */}

      {/* Кнопки Заказы и Корзина */}
      <div className="flex gap-3 items-center  ">
        <Link to={routes.orders}>
          <div className="px-3.5 text-[#FE5F00] border border-[#FE5F00] rounded-lg h-[40px] flex flex-col justify-center">
            <button>Заказы</button>
          </div>
        </Link>
        <div
          className="px-2.5  text-[#FE5F00] border border-[#FE5F00] rounded-lg h-[40px] flex flex-col justify-center cursor-pointer"
          onClick={openCart}
        >
          <img src={cart} alt="cart" />
        </div>
      </div>
      {/* Кнопки Заказы и Корзина */}
    </div>
  );
};

export default Header;
