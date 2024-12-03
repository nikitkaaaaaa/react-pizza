import React, { useState } from "react";

import Popup from "../popup/Popup";

interface CardProps {
  id: number;
  imageUrl: string[];
  price: number;
  title: string;
  description: string;
}

const Card = ({ id, imageUrl, price, title, description }: CardProps) => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  return (
    <div>
      <div
        className="cursor-pointer "
        onClick={() => setShowPopup(true)}
        key={id}
      >
        <div className="flex justify-center">
          <img
            src={imageUrl[0]}
            alt={title}
            className="w-[220px] transition-all duration-200 hover:translate-y-0.5"
          />
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
      <Popup
        id={id}
        title={title}
        showPopup={showPopup}
        closePopup={() => setShowPopup(false)}
        imageUrl={imageUrl}
        description={description}
        price={price}
      />
    </div>
  );
};

export default Card;
