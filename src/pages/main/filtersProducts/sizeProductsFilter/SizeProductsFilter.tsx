import React, { useState } from "react";

import selected_item_on_filter from "../../../../assets/icons/selected_item_on_filter.svg";

interface SizeProductsFilterProps {
  selectedSize: string[];
  handleSelectedTySizeProduct: (item: string) => void;
}

const SizeProductsFilter = ({
  selectedSize,
  handleSelectedTySizeProduct,
}: SizeProductsFilterProps) => {
  const sizeProducts: string[] = ["20 см", "30 см", "40 см"];

  return (
    <div>
      <div className="font-bold text-xl mb-3">Размеры</div>
      <div>
        {sizeProducts.map((item, index) => (
          <div key={index} className="flex my-2.5 gap-2 items-center">
            <div
              className={`w-6 h-6 rounded-lg flex justify-center items-center cursor-pointer ${
                selectedSize.includes(item) ? "bg-[#FE5F00]" : "bg-[#F1F1F1]"
              }`}
              onClick={() => handleSelectedTySizeProduct(item)}
            >
              {selectedSize.includes(item) && (
                <img src={selected_item_on_filter} alt="icon arrow" />
              )}
            </div>
            <div
              className="cursor-pointer"
              onClick={() => handleSelectedTySizeProduct(item)}
            >
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SizeProductsFilter;
