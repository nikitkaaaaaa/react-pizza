import React, { useRef, useState } from "react";

import style from "./header.module.css";
import logo from "../../assets/icons/logo.svg";
import cart from "../../assets/icons/cart.svg";
import lupa from "../../assets/icons/lupa.svg";
import clear_text from "../../assets/icons/clear_text.svg";
import { Link, useLocation } from "react-router-dom";
import routes from "../../routes/routes";
import SearchProducts from "../searchProducts/SearchProducts";
import useClickOutside from "../../hooks/UseCloseBlcok";

interface HeaderProps {
  openCart: () => void;
}
const Header = ({ openCart }: HeaderProps) => {
  const location = useLocation();

  const [value, setValue] = useState<string>("");

  const [showSearchBlock, setShowSearchBlock] = useState<boolean>(false);

  const divRef = useRef<HTMLDivElement>(null);

  useClickOutside(divRef, () => setShowSearchBlock(false)); // закрытие окна при клике вне его

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
      {location.pathname != routes.orders &&
        location.pathname != routes.order && (
          <div className="w-[760px]  relative " ref={divRef}>
            <input
              type="text"
              className="w-full h-[45px] outline-none bg-[#F9F9F9] rounded-[15px] px-12"
              placeholder="Поиск пиццы..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onClick={() => setShowSearchBlock(true)}
            />
            <img
              src={lupa}
              alt="lupa"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 "
            />
            {value.length >= 3 && (
              <img
                src={clear_text}
                alt="clear text"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setValue("")}
              />
            )}

            {/* Блок поиска продуктов */}
            <SearchProducts value={value} showSearchBlock={showSearchBlock} />
            {/* Блок поиска продуктов */}
          </div>
        )}
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
