import React from "react";

interface TypeDoughFilterProps {
  selectedTypeDough: number;
  handleSelectTypeDough: (item: number) => void;
}

const TypeDoughFilter = ({
  selectedTypeDough,
  handleSelectTypeDough,
}: TypeDoughFilterProps) => {
  const typeDough: string[] = ["Традиционное", "Тонкое"];

  return (
    <div>
      <div className="font-bold text-xl mb-4">Тип теста:</div>
      <div>
        {typeDough.map((item, index) => (
          <div key={index} className="flex my-2.5 gap-2 items-center">
            <div
              className={`w-6 h-6 rounded-[30px]  flex flex-col justify-center items-center cursor-pointer ${
                selectedTypeDough === index ? "bg-[#FE5F00]" : "bg-[#F1F1F1]"
              }`}
              onClick={() => handleSelectTypeDough(index)}
            >
              <div
                className={`w-[10px] h-[10px] rounded-[30px] ${
                  selectedTypeDough === index && "bg-[white]"
                }`}
              ></div>
            </div>
            <div
              className="cursor-pointer"
              onClick={() => handleSelectTypeDough(index)}
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
