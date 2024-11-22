import React from "react";

import remove_product_from_cart from "../../assets/icons/remove_product_from_cart.svg";
import minus from "../../assets/icons/minus.svg";
import plus from "../../assets/icons/plus.svg";

interface CartCardProps {
  id: number;
  title: string;
  imageUrl: string;
  typeDough: string;
  price: number;
  size: string;
}

const CartCard = ({
  id,
  title,
  imageUrl,
  typeDough,
  price,
  size,
}: CartCardProps) => {
  return (
    <div>
      <div className=" bg-white flex gap-5 mb-3 py-5 px-7">
        <img src={imageUrl} alt={title} className="w-[65px] h-[65px]" />

        <div className="w-full">
          <div className="font-bold">{title}</div>
          <div className="text-gray-500">
            {size} см, {typeDough} тесто
          </div>
          <hr className="my-3.5" />
          <div className=" flex justify-between items-center">
            <div className="flex  gap-2 items-center">
              <button className="w-[30px] h-[30px] border border-[#FE5F00] flex flex-col items-center justify-center rounded-md">
                <img src={minus} alt="minus" />
              </button>
              <div className="font-bold">2</div>
              <button className="w-[30px] h-[30px] border border-[#FE5F00] flex flex-col items-center justify-center rounded-md">
                <img src={plus} alt="plus" />
              </button>
            </div>

            <div className="flex  gap-3.5 items-center">
              <div className="font-bold ">{price} ₽</div>
              <img
                src={remove_product_from_cart}
                alt="remove product from cart"
                className="mb-0.5 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
