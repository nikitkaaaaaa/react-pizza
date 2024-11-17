import React from "react";

import selected_item_on_filter from "../../../../assets/icons/selected_item_on_filter.svg";

interface FeatureProductsFilterProps {
  selectedFeature: string[];
  handleSelectedTypeFeature: (feature: string) => void;
}

const FeatureProductsFilter = ({
  handleSelectedTypeFeature,
  selectedFeature,
}: FeatureProductsFilterProps) => {
  const typeFeatureProduct: string[] = ["Для компании", "Новинки"];

  return (
    <div>
      {typeFeatureProduct.map((item, index) => (
        <div key={index} className="flex my-2.5 gap-2 items-center">
          <div
            className={`w-6 h-6 rounded-lg flex justify-center items-center cursor-pointer ${
              selectedFeature.includes(item) ? "bg-[#FE5F00]" : "bg-[#F1F1F1]"
            }`}
            onClick={() => handleSelectedTypeFeature(item)}
          >
            {selectedFeature.includes(item) && (
              <img src={selected_item_on_filter} alt="icon arrow" />
            )}
          </div>
          <div
            className="cursor-pointer"
            onClick={() => handleSelectedTypeFeature(item)}
          >
            {item}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureProductsFilter;
