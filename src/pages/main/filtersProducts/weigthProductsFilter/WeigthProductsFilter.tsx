import React from "react";

interface WeigthProductsFilterProps {
  selectedTypeWeigth: number;
  handleSelect: (item: number) => void;
}

const WeigthProductsFilter = ({
  selectedTypeWeigth,
  handleSelect,
}: WeigthProductsFilterProps) => {
  const weigthProducts: string[] = ["250 гр", "350 гр", "500 гр"];

  return (
    <div>
      <div className="font-bold text-xl mb-4">Вес пиццы</div>
      <div>
        {weigthProducts.map((item, index) => (
          <div key={index} className="flex my-2.5 gap-2 items-center">
            <div
              className={`w-6 h-6 rounded-[30px]  flex flex-col justify-center items-center cursor-pointer ${
                selectedTypeWeigth === index ? "bg-[#FE5F00]" : "bg-[#F1F1F1]"
              }`}
              onClick={() => handleSelect(index)}
            >
              <div
                className={`w-[10px] h-[10px] rounded-[30px] ${
                  selectedTypeWeigth === index && "bg-[white]"
                }`}
              ></div>
            </div>
            <div className="cursor-pointer" onClick={() => handleSelect(index)}>
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeigthProductsFilter;
