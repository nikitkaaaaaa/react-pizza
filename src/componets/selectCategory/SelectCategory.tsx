import React, { useState } from "react";

const SelectCategory = () => {
  const [selectedProduct, setSelectedProduct] = useState<number>(0);

  const categoryProducts: string[] = [
    "Все",
    "Мясные",
    "Острые",
    "Вегетарианские",
    "С курицей",
  ];

  return (
    <div className="inline-flex gap-2 bg-[#F9F9F9] px-1 py-1 rounded-2xl h-[55px] ">
      {categoryProducts.map((item, index) => (
        <div
          key={index}
          className={`cursor-pointer px-4 flex items-center rounded-2xl ${
            index == selectedProduct && "bg-white text-[#FE5F00] shadow-sm "
          }`}
          onClick={() => setSelectedProduct(index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default SelectCategory;
