import React, { useState } from "react";

import selected_item_on_filter from "../../../assets/icons/selected_item_on_filter.svg";
import WeigthProductsFilter from "./weigthProductsFilter/WeigthProductsFilter";
import TypeDoughFilter from "./typeDoughFilter/TypeDoughFilter";
import PriceProductsFilter from "./priceProductsFilter/PriceProductsFilter";
import SizeProductsFilter from "./sizeProductsFilter/SizeProductsFilter";

const FltersProducts = () => {
  const [selectedNewProducts, setSelectedNewProducts] =
    useState<boolean>(false);

  return (
    <div className="text-lg">
      {/* Выбрать только по новинкам  */}
      <div className="flex  items-center gap-2.5">
        <div
          className={`w-6 h-6 rounded-lg  flex flex-col justify-center items-center cursor-pointer " ${
            selectedNewProducts ? "bg-[#FE5F00]" : "bg-[#F1F1F1]"
          }`}
          onClick={() => setSelectedNewProducts((prev) => !prev)}
        >
          {selectedNewProducts && (
            <img src={selected_item_on_filter} alt="icon arrow" />
          )}
        </div>
        <div
          className="cursor-pointer"
          onClick={() => setSelectedNewProducts((prev) => !prev)}
        >
          Новинки
        </div>
      </div>
      {/* Выбрать только по новинкам  */}

      <hr className="my-4" />

      {/* Фильтр по цене  */}
      <PriceProductsFilter />
      {/* Фильтр по цене  */}

      <hr className="my-4" />

      {/* Фильтр по весу */}
      <WeigthProductsFilter />
      {/* Фильтр по весу */}

      <hr className="my-4" />

      {/* Фильтр по размеру */}
      <SizeProductsFilter />
      {/* Фильтр по размеру */}

      <hr className="my-4" />

      {/* Фильтр по типу теста */}
      <TypeDoughFilter />
      {/* Фильтр по типу теста */}

      <button className="rounded-2xl text-white bg-[#FE5F00] w-[250px] h-[50px] mt-7">
        Применить
      </button>
    </div>
  );
};

export default FltersProducts;
