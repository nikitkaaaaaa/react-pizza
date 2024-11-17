import React, { useState } from "react";

import selected_item_on_filter from "../../../../assets/icons/selected_item_on_filter.svg";

interface TypeDoughFilterProps {
  selectedTypeDough: string[];
  handleSelectedTypeDough: (item: string) => void;
}

const TypeDoughFilter = ({
  selectedTypeDough,

  handleSelectedTypeDough,
}: TypeDoughFilterProps) => {
  const typeDough: string[] = ["Традиционное", "Тонкое"];

  return (
    <div>
      <div className="font-bold text-xl mb-3">Тип теста:</div>
      <div>
        {typeDough.map((item, index) => (
          <div key={index} className="flex my-2.5 gap-2 items-center">
            <div
              className={`w-6 h-6 rounded-lg flex justify-center items-center cursor-pointer ${
                selectedTypeDough.includes(item)
                  ? "bg-[#FE5F00]"
                  : "bg-[#F1F1F1]"
              }`}
              onClick={() => handleSelectedTypeDough(item)}
            >
              {selectedTypeDough.includes(item) && (
                <img src={selected_item_on_filter} alt="icon arrow" />
              )}
            </div>
            <div
              className="cursor-pointer"
              onClick={() => handleSelectedTypeDough(item)}
            >
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypeDoughFilter;
