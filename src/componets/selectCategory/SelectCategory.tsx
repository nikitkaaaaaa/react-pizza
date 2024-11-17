import React, { useState } from "react";

interface SelectCategoryProps {
  handleSelectCategoryProducts: (category: string) => void;
}

const SelectCategory = ({
  handleSelectCategoryProducts,
}: SelectCategoryProps) => {
  const [selectedProduct, setSelectedProduct] = useState<number>(0);

  const categoryProducts: string[] = [
    "Все",
    "Мясные",
    "Острые",
    "Вегетарианские",
    "С курицей",
  ];

  const handleOnSelectCategoryProducts = (index: number, category: string) => {
    const categoryProducts = category === "Все" ? (category = "") : category;
    setSelectedProduct(index);
    handleSelectCategoryProducts(categoryProducts);
  };

  return (
    <div className="inline-flex gap-2 bg-[#F9F9F9] px-1 py-1 rounded-2xl h-[55px] ">
      {categoryProducts.map((item, index) => (
        <div
          key={index}
          className={`cursor-pointer px-4 flex items-center rounded-2xl ${
            index == selectedProduct && "bg-white text-[#FE5F00] shadow-sm "
          }`}
          onClick={() => handleOnSelectCategoryProducts(index, item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default SelectCategory;
