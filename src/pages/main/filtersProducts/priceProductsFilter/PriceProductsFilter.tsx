import React from "react";

const PriceProductsFilter = () => {
  return (
    <div>
      <div className="font-bold text-xl mb-3">Цена от и до:</div>
      <div className=" flex  justify-between gap-2 my-2.5">
        <input
          type="text"
          className="outline-none rounded-lg border h-[40px] w-full px-4 text-gray-500"
          placeholder="0 ₽"
        />
        <input
          type="text"
          className="outline-none rounded-lg border h-[40px] w-full px-4 text-gray-500"
          placeholder="1200 ₽"
        />
      </div>
    </div>
  );
};

export default PriceProductsFilter;
