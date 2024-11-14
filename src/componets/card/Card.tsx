import React from "react";

import add_product from "../../assets/icons/add_product.svg";
import Icard from "./Icard";

const Card = ({ id, imageUrl, price, title, description }: Icard) => {
  return (
    <div>
      <div className="flex justify-center">
        <img src={imageUrl[0]} alt={title} className="w-[220px]" />
      </div>
      <div className="font-bold text-xl">{title}</div>
      <div className="mt-2 text-gray-400 text-sm h-[60px]">{description}</div>
      <div className="flex justify-between mt-4 items-center">
        <div className="text-lg">
          от <span className="font-bold">{price} ₽</span>
        </div>
        <div className="flex gap-3 text-[#D15700]">
          <button className="py-1.5 px-5 rounded-2xl bg-[#FFF0E6]">
            Выбрать
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
