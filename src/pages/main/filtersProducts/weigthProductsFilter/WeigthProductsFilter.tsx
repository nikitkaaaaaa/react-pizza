import React, { useState } from "react";

import selected_item_on_filter from "../../../../assets/icons/selected_item_on_filter.svg";

interface WeigthProductsFilterProps {
  selectedTypeWeigth: string[];
  handleSelectedTypeWeigt: (item: string) => void;
}

const WeigthProductsFilter = ({
  selectedTypeWeigth,
  handleSelectedTypeWeigt,
}: WeigthProductsFilterProps) => {
  const weigthProducts: string[] = ["250 гр", "350 гр", "500 гр"];

  return (
    <div>
      <div className="font-bold text-xl mb-3">Вес</div>
      <div>
        {weigthProducts.map((item, index) => (
          <div key={index} className="flex my-2.5 gap-2 items-center">
            <div
              className={`w-6 h-6 rounded-lg flex justify-center items-center cursor-pointer ${
                selectedTypeWeigth.includes(item)
                  ? "bg-[#FE5F00]"
                  : "bg-[#F1F1F1]"
              }`}
              onClick={() => handleSelectedTypeWeigt(item)}
            >
              {selectedTypeWeigth.includes(item) && (
                <img src={selected_item_on_filter} alt="icon arrow" />
              )}
            </div>
            <div
              className="cursor-pointer"
              onClick={() => handleSelectedTypeWeigt(item)}
            >
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeigthProductsFilter;
