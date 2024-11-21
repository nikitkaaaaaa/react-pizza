import React from "react";

import selected_item_on_filter from "../../../../assets/icons/selected_item_on_filter.svg";

interface ItemProductsFilterProps {
  arr: string[];
  selectedItem: string[];
  handleSelectedItem: (item: string) => void;
  titleFilter?: string;
}

const ItemProductsFilter = ({
  selectedItem,
  arr,
  handleSelectedItem,
  titleFilter,
}: ItemProductsFilterProps) => {
  return (
    <div>
      <div className="font-bold text-xl mb-3">{titleFilter}</div>
      <div>
        {arr.map((item, index) => (
          <div key={index} className="flex my-2.5 gap-2 items-center">
            <div
              className={`w-6 h-6 rounded-lg flex justify-center items-center cursor-pointer ${
                selectedItem.includes(item) ? "bg-[#FE5F00]" : "bg-[#F1F1F1]"
              }`}
              onClick={() => handleSelectedItem(item)}
            >
              {selectedItem.includes(item) && (
                <img src={selected_item_on_filter} alt="icon arrow" />
              )}
            </div>
            <div
              className="cursor-pointer"
              onClick={() => handleSelectedItem(item)}
            >
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemProductsFilter;
