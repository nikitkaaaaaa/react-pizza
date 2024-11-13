import React from "react";

import style from "./header.module.css";
import logo from "../../assets/icons/logo.svg";
import cart from "../../assets/icons/cart.svg";
import lupa from "../../assets/icons/lupa.svg";

const Header = () => {
  return (
    <div className={style.header}>
      {/* Логотип и описание */}
      <div className="flex items-center">
        <img src={logo} alt="logo" />
        <div className="ml-3">
          <div className="text-lg font-semibold">REACT PIZZA</div>
          <div className="text-gray-500">самые вкусные пиццы у нас</div>
        </div>
      </div>
      {/* Логотип и описание */}

      {/* Поле ввода */}
      <div className="w-[60%] px-3 relative">
        <input
          type="text"
          className="border w-full p-2 outline-none bg-[#F9F9F9] rounded-lg px-8 text-gray-500"
          placeholder="Поиск пиццы..."
        />
        <img
          src={lupa}
          alt="lupa"
          className="absolute left-5 top-1/2 transform -translate-y-1/2 "
        />
      </div>
      {/* Поле ввода */}

      {/* Кнопки Заказы и Корзина */}
      <div className="flex gap-3 items-center  ">
        <div className="px-3.5 text-[#FE731F] border border-[#FE731F] rounded-lg h-[40px] flex flex-col justify-center">
          <button>Заказы</button>
        </div>
        <div className="px-2  text-[#FE731F] border border-[#FE731F] rounded-lg h-[40px] flex flex-col justify-center">
          <img src={cart} alt="cart" />
        </div>
      </div>
      {/* Кнопки Заказы и Корзина */}
    </div>
  );
};

export default Header;
