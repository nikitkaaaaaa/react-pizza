import React, { useState } from "react";

import style from "./order.module.css";
import arrow_order_item from "../../assets/icons/arrow_order_item.svg";

const Orders = () => {
  const [showOrdersItem, setShowOrdersItem] = useState<boolean>(false);

  const [showOrdersItem2, setShowOrdersItem2] = useState<boolean>(false);

  return (
    <div className="container">
      <div className="font-bold text-4xl mb-12">Мои заказы</div>

      <div className="w-[750px] mb-5">
        <div
          className={`h-[90px] bg-[white] flex justify-between items-center px-6   ${
            showOrdersItem
              ? "rounded-t-[30px] border-b"
              : "rounded-[30px] border-b border-b-white"
          }`}
          onClick={() => setShowOrdersItem((prev) => !prev)}
        >
          <div className="flex items-center gap-5">
            <div className="text-xl font-bold">Заказ #16</div>
            <div className="text-gray-500">2024, в 20:31</div>
          </div>
          <div className="flex gap-5 items-center">
            <button className="h-[35px] rounded-[20px] text-[#1BB486] bg-[#EAF8F4] text-sm p-2">
              Оплачено
            </button>
            <img
              src={arrow_order_item}
              alt="arrow"
              className={`cursor-pointer transition-transform duration-75 ${
                showOrdersItem ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </div>
        <div
          className={`${style.test}  ${
            showOrdersItem ? "max-h-60" : "max-h-0"
          }`}
        >
          <div className="px-6 py-5 border-b ">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3.5">
                <img
                  src="https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif"
                  alt=""
                  className="size-[65px]"
                />
                <div>
                  <div className="font-bold mb-1.5">Чизбургер-пиццa</div>
                  <div className="text-sm text-gray-500">
                    30 см, Традиционное тесто
                  </div>
                </div>
              </div>
              <div>
                <div className="font-bold mb-1.5">965 ₽ </div>
                <div className="text-sm text-gray-500">2 шт</div>
              </div>
            </div>
          </div>

          <div className="px-6 py-3 text-lg">
            Итого: <span className="font-bold">2245 ₽</span>
          </div>
        </div>
      </div>

      <div className="w-[750px] mb-5">
        <div
          className={`h-[90px] bg-[white] flex justify-between items-center px-6   ${
            showOrdersItem2
              ? "rounded-t-[30px] border-b"
              : "rounded-[30px] border-b border-b-white"
          }`}
          onClick={() => setShowOrdersItem2((prev) => !prev)}
        >
          <div className="flex items-center gap-5">
            <div className="text-xl font-bold">Заказ #16</div>
            <div className="text-gray-500">2024, в 20:31</div>
          </div>
          <div className="flex gap-5 items-center">
            <button className="h-[35px] rounded-[20px] text-[#1BB486] bg-[#EAF8F4] text-sm p-2">
              Оплачено
            </button>
            <img
              src={arrow_order_item}
              alt="arrow"
              className={`cursor-pointer transition-transform duration-75 ${
                showOrdersItem2 ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </div>
        <div
          className={`${style.test}  ${
            showOrdersItem2 ? "max-h-60" : "max-h-0"
          }`}
        >
          <div className="px-6 py-5 border-b ">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3.5">
                <img
                  src="https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif"
                  alt=""
                  className="size-[65px]"
                />
                <div>
                  <div className="font-bold mb-1.5">Чизбургер-пиццa</div>
                  <div className="text-sm text-gray-500">
                    30 см, Традиционное тесто
                  </div>
                </div>
              </div>
              <div>
                <div className="font-bold mb-1.5">965 ₽ </div>
                <div className="text-sm text-gray-500">2 шт</div>
              </div>
            </div>
          </div>
          <div className="px-6 py-5 border-b ">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3.5">
                <img
                  src="https://media.dodostatic.net/image/r:292x292/11EE7D6108E3A1C9952CD3A7F39A4D02.avif"
                  alt=""
                  className="size-[65px]"
                />
                <div>
                  <div className="font-bold mb-1.5">Чизбургер-пиццa</div>
                  <div className="text-sm text-gray-500">
                    30 см, Традиционное тесто
                  </div>
                </div>
              </div>
              <div>
                <div className="font-bold mb-1.5">965 ₽ </div>
                <div className="text-sm text-gray-500">2 шт</div>
              </div>
            </div>
          </div>

          <div className="px-6 py-3 text-lg">
            Итого: <span className="font-bold">2245 ₽</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
