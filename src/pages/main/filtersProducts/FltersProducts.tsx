import React, { useState } from "react";

import selected_item_on_filter from "../../../assets/icons/selected_item_on_filter.svg";
import WeigthProductsFilter from "./weigthProductsFilter/WeigthProductsFilter";
import TypeDoughFilter from "./typeDoughFilter/TypeDoughFilter";
import PriceProductFilter from "./priceProductFilter/PriceProductFilter";

const FltersProducts = () => {
  const [selectedTypeDough, setSelectedTypeDough] = useState<number>(0);

  const [selectedTypeWeigth, setSelectedTypeWeigt] = useState<number>(1);

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

      <hr className="my-7" />

      {/* Фильтр по цене  */}
      <PriceProductFilter />
      {/* Фильтр по цене  */}

      <hr className="my-7" />

      {/* Фильтр по весу */}
      <WeigthProductsFilter
        selectedTypeWeigth={selectedTypeWeigth}
        handleSelect={(item: number) => setSelectedTypeWeigt(item)}
      />
      {/* Фильтр по весу */}

      <hr className="my-7" />

      {/* Фильтр по типу теста */}
      <TypeDoughFilter
        selectedTypeDough={selectedTypeDough}
        handleSelectTypeDough={(item: number) => setSelectedTypeDough(item)}
      />
      {/* Фильтр по типу теста */}

      <button className="rounded-2xl text-white bg-[#FE5F00] w-[250px] h-[50px] mt-7">
        Применить
      </button>
    </div>
  );
};

export default FltersProducts;
