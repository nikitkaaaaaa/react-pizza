import React, { useState } from "react";

import style from "./order.module.css";
import arrow_order_item from "../../assets/icons/arrow_order_item.svg";
import { useGetOrderProductsQuery } from "../../api/orderApi/orderApi";

const Orders = () => {
  const { data: ordersProducts = [] } = useGetOrderProductsQuery();

  const [openOrdersItem, setOpenOrdersItem] = useState<string[]>([]);

  const handleOpenOrder = (item: string) => {
    if (openOrdersItem.includes(item)) {
      setOpenOrdersItem(openOrdersItem.filter((obj) => obj != item));
    } else {
      setOpenOrdersItem([...openOrdersItem, item]);
    }
  };

  return (
    <div className="container">
      <div className="font-bold text-4xl mb-12">Мои заказы</div>
      {ordersProducts.map((item, index) => (
        <div key={index} className="w-[750px] mb-5">
          <div
            className={`h-[90px] bg-[white] flex justify-between items-center px-6  ${
              openOrdersItem.includes(String(index))
                ? "rounded-t-[30px] border-b"
                : "rounded-[30px] border-b border-b-white"
            }`}
          >
            <div className="flex items-center gap-5">
              <div className="text-xl font-bold">Заказ #{item.id}</div>
            </div>
            <div className="flex gap-5 items-center">
              <button className="h-[35px] rounded-[20px] text-[#1BB486] bg-[#EAF8F4] text-sm p-2">
                Оплачено
              </button>
              <img
                src={arrow_order_item}
                alt="arrow"
                className={`cursor-pointer transition-transform duration-75 ${
                  openOrdersItem.includes(String(index))
                    ? "rotate-180"
                    : "rotate-0"
                }`}
                onClick={() => handleOpenOrder(String(index))}
              />
            </div>
          </div>
          <div
            className={` ${style.products_order_item} ${
              openOrdersItem.includes(String(index)) ? "max-h-60" : "max-h-0"
            }`}
          >
            {item.products.map((product) => (
              <div key={product.id} className="px-6 py-5 border-b">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="size-[65px]"
                    />
                    <div>
                      <div className="font-bold mb-1.5">{product.title}</div>
                      <div className="text-sm text-gray-500">
                        {product.size}, {product.typeDough}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold mb-1.5">{product.price} ₽</div>
                    <div className="text-sm text-gray-500">
                      {product.count} шт
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="px-6 py-3 text-lg">
              Итого: <span className="font-bold">{item.price} ₽</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
