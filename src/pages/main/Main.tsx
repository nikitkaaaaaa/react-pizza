import React from "react";

import style from "./main.module.css";
import SelectCategory from "../../componets/selectCategory/SelectCategory";
import SortProducts from "../../componets/sortProducts/SortProducts";
import Products from "./products/Products";
import FltersProducts from "./filtersProducts/FltersProducts";

const Main = () => {
  return (
    <div>
      <div className="text-3xl font-bold">Все пиццы</div>

      {/* Выбор категории продуктов и сортирвока */}
      <div className=" flex justify-between items-center my-8">
        <SelectCategory />
        <SortProducts />
      </div>
      {/* Выбор категории продуктов и сортирвока */}

      <div className="text-xl font-bold mb-6">Фильтрация</div>
      <div className="flex gap-32 bordser border-red-800 ">
        <div className={style.filters_products}>
          <FltersProducts />
        </div>

        <div className={style.products}>
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Main;
