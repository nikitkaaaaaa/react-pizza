import React, { useState } from "react";

import Popup from "../popup/Popup";

interface SearchProductsCardProps {
  id: number;
  imageUrl: string[];
  price: number;
  title: string;
  description: string;
}

const SearchProductsCard = ({
  id,
  imageUrl,
  price,
  title,
  description,
}: SearchProductsCardProps) => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const openProductFromSearch = () => {
    setShowPopup(true);
  };

  return (
    <div>
      <div
        key={id}
        className="px-3.5   flex gap-2  items-center h-[50px] cursor-pointer hover:bg-[#FFFAF6] transition-all ease-in-out duration-300"
        onClick={openProductFromSearch}
      >
        <img src={imageUrl[0]} alt={title} className="size-[35px]" />
        <div>{title}</div>
        <div>{price} ₽</div>
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

export default SearchProductsCard;
