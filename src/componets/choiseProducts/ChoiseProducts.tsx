import React, { useState } from "react";

import sort from "../../assets/icons/sort.svg";

const ChoiseProducts = () => {
  const [showChoise, setShowChoise] = useState<boolean>(false);

  const tupeChoise: string[] = ["рейтенгу", "стоимость", "алфавит"];

  const [currentTypeChoise, setCurrentTypeChoise] = useState<string>(
    tupeChoise[0]
  );

  return (
    <div
      className="bg-[#F9F9F9] px-3 py-1 rounded-2xl flex items-center gap-2 h-[55px] cursor-pointer relative w-[235px]"
      onClick={() => setShowChoise((prev) => !prev)}
    >
      <img src={sort} alt="sort" />
      <div>Сортировка : </div>
      <span className="text-[#FE5F00]">{currentTypeChoise}</span>
      <div
        className={`absolute top-12 left-0 w-full transition-all  px-0.5 py-1 overflow-hidden transition-max-height duration-300 ease-in-out ${
          showChoise ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className=" shadow-md rounded-2xl ">
          {tupeChoise.map((item, index) => (
            <div
              key={index}
              onClick={() => setCurrentTypeChoise(item)}
              className=" py-2.5 pl-7  hover:bg-[#FFF6F4] hover:text-[#FE5F00] "
            >
              <div>{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChoiseProducts;
